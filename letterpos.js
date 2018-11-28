function posLetter (someString) {
 var letterArr = someString.split("");
 var letterCount = {};
 for (var i = 0; i < letterArr.length; i++){
   if(letterCount[letterArr[i]]){
     letterCount[letterArr[i]].push(i);
   }
   else {
     letterCount[letterArr[i]] = [i];
   }
 }
 console.log(letterCount);
 return letterCount;
}