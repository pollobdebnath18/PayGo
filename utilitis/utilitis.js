
// for input  field
function getInputById(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}
// for inner Text ( tag like h1-h6 , p , span ....)
function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}
//for calculation
function setInnerTextByIdAndValue(id, value) {
  return (document.getElementById(id).innerText = value);
}

