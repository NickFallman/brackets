// source configs
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// const inStr = '{([{}])}'; // true
// const curCfg = config3;
// const inStr = '[(])', curCfg = config2; // false
// const inStr = '|()|(||)||', curCfg = config5; // true
const inStr = '8888877878887777777888888887777777887887788788887887777777788888888887788888', curCfg = config6; // false

// module.exports = 
function check(str, bracketsConfig) {
  let resBool = false;
  let inStr = str;
  let arrBrackets = bracketsConfig.map((item) => item.join(""));
  console.log(arrBrackets);
  
  for (let i = 0; i < inStr.length / 2 + 1 ; i++) {
    arrBrackets.forEach((item) => { 
      while (inStr.includes(item)) {
        console.log(item, inStr); 
        inStr = inStr.replace(item, "");
      }
    } );
  }
  resBool = (inStr.length === 0);

  // let stackArr = [];
  // let curChar = '';
  // const cfgSize = bracketsConfig.lenght;
  // console.log(str, cfgSize, bracketsConfig);
  // const closingBrackets = bracketsConfig.map((elm, i) => elm = elm[i][1]);
  // console.log(closingBrackets);
  // const openingBrackets = new Set(Object.values(bracketPairs))
  
  // for (curChar of str) {
  //   if (!characters[char]) {
  //     stackArr.push(char); 
  //   } 
  //   else if (stack.pop() !== characters[char]){
  //       return false;
  //   } 
  // }

  return resBool;
}

res = check(inStr, curCfg);
console.log(res);
