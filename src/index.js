module.exports = function check(str, bracketsConfig) {
  let resBool = false;
  let inStr = str;
  let arrBrackets = bracketsConfig.map((item) => item.join(""));
  console.log(arrBrackets);
  
  for (let curChar of inStr) {
    arrBrackets.forEach((item) => { 
      while (inStr.includes(item)) {
        inStr = inStr.replace(item, "");
      }
    } );
  }
  resBool = (inStr.length === 0);
  return resBool;
}
