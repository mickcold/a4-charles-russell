//Entry point: loads the data, builds the chart and controls, and redraws whenever a control changes
//This file is glue; the real work lives in data.js, glyphs.js, chart.js and controls.js

import {loadFileList, loadData, filterRows, capRows} from './data.js'
import {setupChart, drawChart} from './chart.js'
import {setupControls, readControls, fillFileOptions, selectFile, fillCrimeTypeOptions, setLocationBounds} from './controls.js'

//The directory where the data is stored
const DATA_URL = 'data/UK_Crime_Data/'

//List of every data file
const MANIFEST_URL = DATA_URL + 'files.json'

//Most crimes drawn at once, so big files don't freeze the page
//TODO: pick the number by trying the Metropolitan file
const MAX_MARKS = 1000

let allRows = []
let chart = null

//Updates/draws the chart from reading the controls and rows
const update = function() {
  const settings = readControls(),
        rows     = capRows(filterRows(allRows, settings), MAX_MARKS)

  drawChart(chart, rows, settings)
}

//Determines the random file shown at startup
const pickRandomFile = function(files) {
  const fileArray = JSON.parse(MANIFEST_URL)
  const ranFileIndex = Math.floor(Math.random() * fileArray.length)
  return fileArray[ranFileIndex]
}

//Loads a police force's file, then resets the controls that depend on it and redraws
const loadFile = async function(file) {
  //TODO: allRows = await loadData(DATA_URL + file)
  //TODO: fillCrimeTypeOptions(allRows) and setLocationBounds(allRows), since a new file has new types and a new area
  //TODO: update()
}

//Shows the help menu
const setupHelp = function() {
  const dialog = document.querySelector('#help-dialog')

  document.querySelector('#help-button').onclick = function() {
    dialog.showModal()
  }

  document.querySelector('#help-close').onclick = function() {
    dialog.close()
  }

  dialog.showModal()
}

const start = async function() {
  setupHelp()

  //TODO: this loads the folder, not a file; replace with the manifest steps below
  //TODO: files = await loadFileList(MANIFEST_URL), fillFileOptions(files), pick one with pickRandomFile, selectFile it, then loadFile it
  allRows = await loadData(DATA_URL)
  chart   = setupChart('#chart')

  fillCrimeTypeOptions(allRows)
  setupControls(update, loadFile)

  update()
}

start()
