const sumAll = function(num1, num2) {

   // both inputs should be numbers
   if( typeof(num1) != typeof(5) || typeof(num2) != typeof(5) ) return 'ERROR';

   if( num1 < 0 || num2 < 0 ) return 'ERROR';

   let start, end;

   if( num1 > num2 ) {
      start = num2;
      end = num1;
   } else {
      start = num1;
      end = num2;
   }

   // the sum of first n natural numbers is (n * ( n + 1 ))/2
   let sumTillStart = ( start * ( start + 1 ) ) / 2;
   let sumTillEnd = ( end * ( end + 1 ) ) / 2;

   // the difference removes value of start, so we add it back 
   return ( sumTillEnd - sumTillStart + start );
};

// Do not edit below this line
module.exports = sumAll;
