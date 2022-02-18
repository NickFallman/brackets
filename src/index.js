// source configs
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

const inStr = '([{}])', curCfg = config3; // 4-true
// const inStr = '[(])', curCfg = config2; // false
// const inStr = '|()|(||)||', curCfg = config5; // true
// const inStr = '8888877878887777777888888887777777887887788788887887777777788888888887788888', curCfg = config6; // false
// const inStr = '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', curCfg = config7; // 19-true

// module.exports = 
function check(str, bracketsConfig) {
  let resBool = false;
  let inStr = str;
  let arrBrackets = bracketsConfig.map((item) => item.join(""));
  console.log(arrBrackets);
  
  // This loop iterates values (of array) that iterable, as an iterable object, defines to be iterated over. 
  // The object's elements (of inStr) are shown, but none of the object's properties.

  for (let curChar of inStr) {
    arrBrackets.forEach((item) => { 
      while (inStr.includes(item)) {
        console.log(item, inStr); 
        inStr = inStr.replace(item, "");
        console.log(inStr); 
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
