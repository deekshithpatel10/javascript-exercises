const removeFromArray = function(array) {
   const resultArray = [];

   // since the number of elements to be removed is not known,
   // we use the 'argument' object of the function.

   const ElementsToRemove = Array.from(arguments).slice(1);
   

   for( index = 0; index < array.length; index++) {
      if ( ElementsToRemove.includes( array[index] ) ) continue;
      else {
         resultArray.push(array[index]);
      }
   }

   return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
