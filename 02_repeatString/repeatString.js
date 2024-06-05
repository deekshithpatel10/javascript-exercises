const repeatString = function(text, numOfRepeats) {
   let finalText = "";

   if ( numOfRepeats < 0 ) return "ERROR";

   for( let index = 0; index < numOfRepeats; index++ ) {
      finalText += text;
   }

   return finalText;
};

// Do not edit below this line
module.exports = repeatString;
