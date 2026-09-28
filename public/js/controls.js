//The user controls from index.html: police force file, crime type, and longitude/latitude ranges
//This is the only file that knows the element IDs; everything else just reads settings

//Wires every control; changing the file needs a reload, the filters only need a redraw
export const setupControls = function(onFilterChange, onFileChange) {
  //TODO: #crime-file 'change' listener that calls onFileChange with the chosen file
  //TODO: #filter-crime-type and the four sliders get 'input' listeners that call onFilterChange
  //TODO: each slider also updates its <output> (e.g. #lon-min-output) so it shows its number
  //TODO: decide what happens when a "From" slider is dragged past its "To" slider
}

//Returns the current value of every control as one settings object
export const readControls = function() {
  //TODO: read the real values from the elements; slider .value is a string, so convert to numbers
  return {
    file:      '',
    crimeType: 'all',
    lonMin:    -180,
    lonMax:    180,
    latMin:    -90,
    latMax:    90
  }
}

//Adds the files in the array to the list of options for the user to pick from in the form of an <option>
export const fillFileOptions = function(files) {
  files.array.forEach(element => {
    const temp = files[element]
    const option = document.createElement('option')

    //Setting the option values; the URL and the name
    option.value = temp.file
    option.textContent = temp.label

    //Adds it to the file options
    document.querySelector('#crime-file').append(option)
  });
}

//Selects a file in #crime-file without the user clicking it (used for the random default)
export const selectFile = function(file) {
  document.querySelector('#crime-file').value = file
}

//Replaces #filter-crime-type's options with 'All' plus the crime types found in the loaded rows
export const fillCrimeTypeOptions = function(rows) {
  //TODO: clear the old options (a new file can have different types), keep 'All'
  //TODO: collect the unique crime types (new Set) and append an <option> for each
}

//Sets the four sliders' min/max to the loaded file's longitude/latitude extent, and resets them to the full range
export const setLocationBounds = function(rows) {
  //TODO: find the smallest and largest lon and lat (rows with no location don't count)
  //TODO: set min, max and value on each slider, and update its <output>
}
