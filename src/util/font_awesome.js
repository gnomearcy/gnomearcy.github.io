export default (iconSize) => {
  if(iconSize % 16 !== 0){
    throw "iconSize has to me a multiple of 16";
  }
  // Formats the return value in "?x" format, where ? is computed value
  return `${iconSize / 16}x`;
}
