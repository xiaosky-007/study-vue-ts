var sd = require('silly-datetime');

module.exports={
    
    forTime(param){
       return sd.format(new Date(param), 'YYYY-MM-DD HH:mm');
    }
}