const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let k = 0;
  
  for( let i = 0; i < matrix.length; i++){
  	matrix[i].forEach( function(item) {
    	if( item == "^^") {
      	k++;
      }
    });
  }
  
  return k;
};
