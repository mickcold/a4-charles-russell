//Turns a crime row into what gets drawn: which function, its slope and its color
//No drawing happens here, so these functions are easy to test in the console

//The math functions a crime can be drawn as, e.g. {sin: ..., cos: ..., tan: ..., log: ..., ln: ..., square: ..., cube: ...}
export const FUNCTIONS = {
  //TODO: one entry per function, each taking x and returning y
}

//Turns text (an LSOA code or a crime ID) into a whole number, always the same number for the same text
export const hashString = function(text) {
  //TODO: combine the character codes into one number
  return 0
}

//Uses the LSOA code as a seed to pick one function at random
//Returns e.g. {kind: 'function', name: 'sin'} (kind is left over from shapes; simplify it if you like)
export const pickGlyph = function(lsoaCode) {
  //TODO: hashString(lsoaCode) → an index into the names in FUNCTIONS
  return {kind: 'function', name: 'sin'}
}

//Slope for a function, from the crime's position after filtering
export const slopeFor = function(index) {
  //TODO: index % 10
  return 1
}

//Builds the points of y = slope · f(x − lon) + lat across xDomain, ready for d3.line()
//Returns an array of [x, y] pairs
export const functionPoints = function(name, slope, lon, lat, xDomain) {
  //TODO: step x across xDomain, look up FUNCTIONS[name], compute y
  return []
}

//Turns a crime ID into a color, always the same color for the same ID
export const colorFor = function(crimeId) {
  //TODO: Put crimeID thru the Golden Ratio Hue Generation formula
  return 'steelblue'
}
