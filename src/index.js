module.exports = function check(str, bracketsConfig) {
  // your solution
    
let arr = [];

  if (str.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[arr.length - 1] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1]) {
        arr.pop();
      } else if (str[i] == bracketsConfig[j][0]) {
        arr.push(str[i]);
      }
    }
  } if (arr.length == 0) {
    return true;
  } return false;

}
