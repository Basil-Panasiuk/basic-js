const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let ob = {
  };
  
  ob.turns = Math.pow(2, disksNumber) - 1;
  ob.seconds = Math.floor(ob.turns / (turnsSpeed / 3600) );
  
  return ob;
};
