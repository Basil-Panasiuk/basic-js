const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if(arguments.length < 1) {
      this.chain.push(`(  )`);
      return this;
    } else {
      this.chain.push(`( ${value} )`);
      return this;
    }
    
  },

  removeLink(position) {
    if( !isNaN(position) && (position ^ 0) === position && position > 0 && position <= this.getLength() ) {
    	this.chain.splice(position-1,1);
      return this;
    } else {
      this.chain = [];
    	throw new Error();
    }
  },

  reverseChain() {
  	this.chain.reverse();
    return this; 
  },
  
  finishChain() {
    res = this.chain.join('~~');
    this.chain.splice(0, this.getLength());
    return res;
  }  

};

module.exports = chainMaker;
