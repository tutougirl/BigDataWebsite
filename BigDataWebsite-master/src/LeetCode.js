/*
 * @Author: he yan ying
 * @Date: 2022-03-04 10:48:00
 * @LastEditors: he yan ying
 * @LastEditTime: 2022-03-04 11:05:14
 * @Description: 
 */
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if(s.length===0){
      return null;
  }
  let dp=new Array(s.length).fill(0).map(()=>new Array(s.length).fill(0));
  for(let i=0;i<s.length;i++){
      dp[i][i]=1;
  }
  let max=0;
  let result=null;
  for(i=0;i<s.length;i++){
      for(let j=i+1;j<s.length;j++){
          let length=j-i+1;
          if(length<=2){
              if(s[i]===s[j]){
                  dp[i][j]=1;
              }else{
                  dp[i][j]=0;
              }
          }else if(length>2){
              if(s[i]===s[j]){
                  dp[i][j]=dp[i+1][j-1];
              }else{
                  dp[i][j]=0;
              }
          }
          if(dp[i][j]===1){
              max=length>max?length:max;
              result=length>max?s.substring(i,j+1):result;
          }
      }
  }
  return result;
};
longestPalindrome("babad")