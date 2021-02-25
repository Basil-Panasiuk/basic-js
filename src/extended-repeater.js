const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let end = '';
  
  if(options.hasOwnProperty('addition')){
  	
    if(options.hasOwnProperty('additionRepeatTimes')){
    	let arr = [];
      
      for(let i = 0; i< options.additionRepeatTimes; i++){
        arr.push(String(options.addition));
      }
      
      if(options.hasOwnProperty('additionSeparator')){
      	end = arr.join(options.additionSeparator); 
      } else {
      	end = arr.join('|'); 
      }
      
    }

    if(options.additionRepeatTimes === undefined) {
      end = String(options.addition);
    }
  }
  
  let res;
  if(options.hasOwnProperty('repeatTimes')) {
    let arr1 = [];
    for ( let i = 0; i < options.repeatTimes; i++){
    	arr1.push(String(str) +  end);
    }
    
    if(options.hasOwnProperty('separator')) {
    	res = arr1.join(options.separator);
    } else {
    	res = arr1.join('+');
    }

    if(options.repeatTimes === undefined) {
      res = String(str) + end;
    }
    
  }
  
  return res;
};
  