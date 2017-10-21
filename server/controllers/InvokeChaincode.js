'use strict'

var debug = true;

module.exports.invokeChaincode = function invokeChaincode(req, res, next){

  if(debug) console.log('---->ServiceLedger: invokeChaincode method called');

  var examples = {};
  examples['application/json'] = {
    "message": "example message of invokeChaincode"
  }
  
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}
