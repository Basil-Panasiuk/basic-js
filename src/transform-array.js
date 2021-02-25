const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if( !Array.isArray(arr)) {
    throw new Error();
  }

  let a = [...arr];
  
  for (let i = 0; i < a.length; i++){
    if( a[i]  == '--double-next' && i < a.length-1) {
    	a[i] = a[i+1];
    }
    else if( a[i]  == '--double-prev' && i > 0) {
    	a[i] = a[i-1];
    }
    else if( a[i] == '--discard-prev' && i > 0){
    	a.splice(i-1, 1);
    }
    else if( a[i] == '--discard-next' && a.length-1 > i){
    	a.splice(i+1,1);
    }
  }

  return a.filter(item => {return item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev' });
};
