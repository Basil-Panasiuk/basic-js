const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if( !Array.isArray(members)){
    return false;
  }

  let arr = [];
  members.forEach ( function (item) {
  	if (typeof item === 'string') {
      for( let i = 0; i < item.length; i++){
        if ( item[i] !== ' '){
          arr.push(item[i].toUpperCase());
          break;
        }
      }
    }
  });
  
  if( arr.length < 1) {
  	return false;
  } else {
  	return arr.sort().join('');
  }
  
};
