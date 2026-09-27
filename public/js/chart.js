//All of the D3 drawing lives here
//d3 is imported as a module from the CDN, so there's no global d3 and no npm package for the browser

import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm'
import {pickGlyph, slopeFor, rotationFor, functionPoints, colorFor} from './glyphs.js'

//Size of the drawing area, and room around it for the axes
const WIDTH  = 800,
      HEIGHT = 500,
      MARGIN = {top: 20, right: 20, bottom: 40, left: 50}

//Runs once: creates the <svg>, the groups for the marks and axes, and the scales
//Returns an object that drawChart receives every time it redraws
export const setupChart = function(selector) {
  //TODO: d3.select(selector).append('svg') with a viewBox so it scales to the page
  //TODO: append a <g> for the marks, one for the x axis (longitude), one for the y axis (latitude)
  //TODO: create the x and y scales (domains get set in drawChart, from the slider ranges)
  return {}
}

//Runs on every update: sets the scale domains, redraws the axes, and joins rows to marks
//Every mark is a <path>: d3.line() builds a function's curve and d3.symbol() builds a shape, and both return a 'd' string
export const drawChart = function(chart, rows, settings) {
  //TODO: set scale domains from settings (lonMin..lonMax, latMin..latMax)
  //TODO: selection.data(rows, row => row.crimeId).join('path') with d = markPath, transform = markTransform, stroke/fill = colorFor
  //TODO: attach pointer events for the tooltip (pointerenter / pointermove / pointerleave)
}

//Returns the 'd' string for one crime: a curve for a function, a symbol for a shape
//index is the crime's position after filtering (it sets the slope)
export const markPath = function(row, index, chart) {
  //TODO: pickGlyph(row.lsoaCode); function → d3.line() over functionPoints(...); shape → d3.symbol(...)
  return ''
}

//Returns the transform for one crime: shapes move to (lon, lat) and rotate; curves need none
export const markTransform = function(row, index, chart) {
  //TODO: shape → 'translate(x, y) rotate(rotationFor(index))' using the scales; function → ''
  return ''
}

//Fills the tooltip with a crime's details and moves it next to the pointer
export const showTooltip = function(event, row) {
  //TODO: set #tooltip text (crime type, location, LSOA name), position with event.clientX / event.clientY, unhide
}

export const hideTooltip = function() {
  //TODO: hide #tooltip
}
