const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { cypressGhost342, cypressGhost514, options } = config;

async function executeTest() {
  let resultInfo = {}
  let datetime = new Date().toISOString().replace(/:/g, ".");

  let features = fs.readdirSync(cypressGhost342);


  for (let index = 0; index < features.length; index++) {
    const feature = features[index];

    let screenshots = fs.readdirSync(`${cypressGhost342}/${feature}`).map(function (item) {
        return item
      let num = item.split('.')
      return parseInt(num, 10);
    });
    
    screenshots = screenshots.sort(sorter);

    for (let j = 0; j < screenshots.length; j++) {
      const step = screenshots[j];
      
      const data = await compareImages(
        fs.readFileSync(`${cypressGhost342}/${feature}/${step}`),
        fs.readFileSync(`${cypressGhost514}/${feature}/${step}`),
        options
      );

      console.log(data);

      resultInfo[`${feature}-${step}`] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime
      }

      if (!fs.existsSync('./results')) {
        fs.mkdirSync('./results', {
          recursive: true
        });
      }

      if (!fs.existsSync(`./results/${datetime}`)) {
        fs.mkdirSync(`./results/${datetime}`, {
          recursive: true
        });
      }

      if (!fs.existsSync(`./results/${datetime}/${feature}`)) {
        fs.mkdirSync(`./results/${datetime}/${feature}`, {
          recursive: true
        });
      }
      fs.writeFileSync(`./results/${datetime}/${feature}/compare-${step}.png`, data.getBuffer());

      if (!fs.existsSync(`./results/${datetime}`)) {
        fs.mkdirSync(`./results/${datetime}`, {
          recursive: true
        });
      }
      fs.copyFileSync(`${cypressGhost342}/${feature}/${step}`, `./results/${datetime}/${feature}/v3-${step}.png`);
      fs.copyFileSync(`${cypressGhost514}/${feature}/${step}`, `./results/${datetime}/${feature}/v4-${step}.png`);
    };
  };
  fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
  fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

  console.log('------------------------------------------------------------------------------------')
  console.log("Execution finished. Check the report under the results folder")
  return resultInfo;
}
(async () => console.log(await executeTest()))();

function step(f, s, info) {
  filterInfo = info[`${f}-${s}`]

  let diffHtml = ``;
  console.log(info, "here")
  if (filterInfo.misMatchPercentage < 5) {
    diffHtml = `
      <div class="imgline">
      <div class="imgcontainer">
      <span class="imgname">Diff (less than 5%)</span>
      <img class="img2" src="./${f}/compare-${s}.png" id="diffImage" label="Diff">
      </div>
      </div>`;
  } else {
    diffHtml = `
    <div class="imgcontainer">
    <span class="imgname">Diff (greather than 5%)</span>
    <img class="imgfull" src="./${f}/compare-${s}.png" id="diffImage" label="Diff">
    </div>`
  }
  return `
  
  <h2>Step: ${s}</h2>
  <p>Data: ${JSON.stringify(filterInfo)}</p><div class="imgline">
    <div class="imgcontainer">
    <span class="imgname">Ghost 3.42</span>
    <img class="img2" src="./${f}/v3-${s}.png" id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
    <span class="imgname">Ghost 5.14</span>
    <img class="img2" src="./${f}/v4-${s}.png" id="testImage" label="Test">
    </div>
    </div>
    ${diffHtml}
    </div>`
}

function feature(f, info) {

  let screenshots = fs.readdirSync(`${cypressGhost342}/${f}`).map(function (item) {
    return item
    let num = item.split('.')
    return parseInt(num, 10);
  });
  screenshots = screenshots.sort(sorter);

  return `<div class=" browser" id="test0">
    <div class=" btitle">
    <h2>Feature: ${f}</h2>
    </div>
    ${screenshots.map(s => step(f, s, info))}`
}

function createReport(datetime, resInfo) {

  let features = fs.readdirSync(cypressGhost342).sort(sorter);

  return `
    <html>
    <head>
    <title> VRT Report </title>
    <link href="index.css" type="text/css" rel="stylesheet">
    </head>
    <body>
    <h1>Report for 
    <a></a>
    </h1>
    <p>Executed: ${datetime}</p>
    <div id="visualizer">
    ${features.map(b => feature(b, resInfo))}
    </div>
    </body>
    </html>`
}

function sorter(a, b) {
  const numA = parseInt(a.match(/^\d+/)[0]);
  const numB = parseInt(b.match(/^\d+/)[0]);
  return numA - numB;
};