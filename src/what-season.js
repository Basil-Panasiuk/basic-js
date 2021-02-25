const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if(!date){
  	return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch(e) {
    throw new Error(e);
  }
	let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  
  return ( season [date.getMonth()] );
};
