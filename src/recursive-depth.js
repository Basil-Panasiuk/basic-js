const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let depth = 1;
    let cur = 0;
    
    arr.forEach( item => {
    	if(Array.isArray(item)){
      	cur = 1 + this.calculateDepth( item );
      }

      if(depth < cur){
        depth = cur;
      }
    });

    return depth;
  }
};

