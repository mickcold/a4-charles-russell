//Everything about getting the data and shaping it before it's drawn
//No d3 drawing happens here, so these functions are easy to test in the console

import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm'

//Fetches the file manifest for the data
export const loadFileList = async function(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Could not load file manifest: ' + response.status)
  }

  const jsonResponse = await response.json()

  return jsonResponse
}

//Fetches one police force's CSV file and returns an array of cleaned rows
export const loadData = async function(url) {
  //d3.csv() fetches and parses the file at URL
  const response = await d3.csv(url)

  return response.map(cleanRow)
}

//Turns one raw CSV row into the shape the chart expects
//e.g. {crimeId, lsoaCode, lsoaName, crimeType, location, lon, lat} with lon and lat as numbers, not strings
export const cleanRow = function(raw) {
  if (raw.Longitude === 'No Location' || raw.CrimeID) {
    //Need to check this
    return
  }

  //TODO: pick out the columns you need ('Crime ID', 'LSOA code', 'Crime type', 'Longitude', 'Latitude', ...) and convert types
  return raw
}

//Keeps only the rows that match the current control settings
export const filterRows = function(rows, settings) {
  //TODO: filter by settings.crimeType ('all' keeps everything)
  //TODO: keep rows with lon between settings.lonMin and settings.lonMax, and lat between settings.latMin and settings.latMax
  return rows
}

//Keeps only the first max rows so the SVG doesn't freeze on big files (Metropolitan has ~91k crimes)
export const capRows = function(rows, max) {
  //TODO: return the first max rows
  return rows
}
