const reverseString = function(text) {
   let reverseText = "";
   
   for( index = 0; index < text.length; index++) {
      reverseText += text[ text.length - 1 - index ];
   }

   return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
