"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, checkSpam, getMaxSubSum, truncate, extractCurrencyValue , camelize}; 
//add all of your function names here that you need for the node mocha tests



  function ucFirst(str) {
    if (str==="")return "";
   return str[0].toUppercase()+ str.slice(1);
  }

  function checkSpam(str) {
    let str1= str.toLowerCase();
    if (str1.includes("viagra")||str1.includes("xxx")) return true; 
  }


  function truncate(str, maxlength) {
    if (str.length<maxlength) return str;
    return (str.slice(0,maxlength-1) +"...");
  }

  function extractCurrencyValue (str){
    let str1= str.slice(1,str.length-1);
    return (Number(str1));
  }



/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let sum=0;
  let maxnum= Math.max(arr);
  if (arr.length===0) return [];
  for (let num of arr){
    if (num<0)num=0;
    sum+=num;
  }
  if (maxnum>(sum-maxnum))return maxnum;
  else
  return sum;
}


function camelize(str) {

  }


