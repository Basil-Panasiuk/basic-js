const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if( !sampleActivity || 
    typeof sampleActivity !== 'string' || 
    sampleActivity < 1 || 
    sampleActivity > MODERN_ACTIVITY ||
    isNaN(sampleActivity)) {
    return false;
  } else {
    return Math.ceil( Math.log( MODERN_ACTIVITY / sampleActivity ) / ( 0.693 / HALF_LIFE_PERIOD) );
  }

};
