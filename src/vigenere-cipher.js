const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    if (type === false) {
      this.direct = false;
    } else {
      this.direct = true;
    }
  } 

  encrypt(message, key) {
    if(!message || !key){
      throw new Error();
    }
    let arrL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let arrN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    
    let m = [];
    let k = [];
    
    let mesLen = 0;
    
    let mesUp = message.toUpperCase();
    
    for( let i = 0; i < mesUp.length; i++){
    		if(arrL.indexOf(mesUp[i]) == -1){
        	m.push(mesUp[i]);
        } else {
        	m.push(arrN[arrL.indexOf(mesUp[i])] );
          mesLen++;
        }    	
    }
    
    key = key.toUpperCase();
    let str = '';
    if(key.length < mesLen){
      while(mesLen > str.length){
        for( let i = 0; i < key.length; i++){
          str += key[i];
          if(mesLen === str.length){
            break;
          }
        }
      }
    } else {
      for(let i = 0; i < mesLen; i++){
        str += key[i];
      }
    }
   
    
    for( let i = 0; i < str.length; i++){
      k.push(arrN[arrL.indexOf(str[i])] );
    }
    
    for(let i = 0; i < m.length; i++){
    	if(typeof m[i] != 'number'){
      	k.splice(i, 0, 'er');
      }
    }
    
    let res = '';
    for( let i = 0; i < m.length; i++){
    	if(typeof m[i] !== 'number'){
      	res += m[i];
      } else {
      	if( k[i] + m[i] <= 26){
      		res += arrL[k[i] + m[i] ];
      	} else {
      		res += arrL[k[i] + m[i] - 26];
      	}
      }	
    }
    
    if(this.direct){
      return res;
    } else {
      return res.split('').reverse().join('');
    }


  }    

  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key){
      throw new Error();
    }
    let arrL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let arrN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    
    let m = [];
    let k = [];
    
    let mesLen = 0;
    
    let mesUp = encryptedMessage.toUpperCase();
    
    for( let i = 0; i < mesUp.length; i++){
    		if(arrL.indexOf(mesUp[i]) == -1){
        	m.push(mesUp[i]);
        } else {
        	m.push(arrN[arrL.indexOf(mesUp[i])] );
          mesLen++;
        }    	
    }
    
    key = key.toUpperCase();
    let str = '';
    if(key.length < mesLen){
      while(mesLen > str.length){
        for( let i = 0; i < key.length; i++){
          str += key[i];
          if(mesLen === str.length){
            break;
          }
        }
      }
    } else {
      for(let i = 0; i < mesLen; i++){
        str += key[i];
      }
    }
    
    for( let i = 0; i < str.length; i++){
      k.push(arrN[arrL.indexOf(str[i])] );
    }
    
    for(let i = 0; i < m.length; i++){
    	if(typeof m[i] != 'number'){
      	k.splice(i, 0, 'er');
      }
    }
    
     let res = '';
    for( let i = 0; i < m.length; i++){
    	if(typeof m[i] !== 'number'){
      	res += m[i];
      } else {
          if( k[i] > m[i] ){
            res += arrL[26 - k[i] + m[i] ];
          } else {
            res += arrL[m[i] - k[i]];
          }
        }
    }
    
    if(this.direct){
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;


