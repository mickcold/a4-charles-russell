//Functions for cleaning and loading the data used in the program

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

//Fetches csv, cleans the data (removes entries with missing coords), and returns the cleaned array
export const loadData = async function(url) {
  //d3.csv() fetches and parses the file at URL
  const response = await d3.csv(url)

  const fData = response.filter(entry => {
    if (entry.Longitude !== '') {
      return true
    }
    else {
      return false
    }
  })

  return fData.map(cleanRow)
}

//Takes a csv row and turns it into an object with only relevant data for the program to use
export const cleanRow = function(raw) {
  return {
    crimeId: raw['Crime ID'],
    lsoaCode: raw['LSOA code'],
    crimeType: raw['Crime type'],
    lon: Number(raw['Longitude']),
    lat: Number(raw['Latitude'])
  }
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
