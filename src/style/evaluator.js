const throwIfUndef = (arg) => {
  if(typeof arg === 'undefined'){
    throw "... received 'undefined' argument";
  }
}

const throwIfNotNum = (arg) => {
  throwIfUndef(arg);
  if(!(typeof arg === 'number')){
    throw "... received non-number argument";
  }
}

const undefinedEvaluator = (p) => {
   throwIfUndef(p);
   for(var propertyName in p){
     if(p.hasOwnProperty(propertyName)){
       console.log(p);
       let value = p[propertyName];
       if(typeof value === 'undefined'){
         throw "Property " + propertyName + " is undefined";
       }
       // Test is if it's an object and recursively test it's properties
       if(typeof value === "object"){
         undefinedEvaluator(value);
       }
     }
   }
   return p;
}

// Checks a single number or array for any numbers that are less than 0.
//
// Function takes a variable amount of arguments.
// Single number array is allowed.
// Single number is allowed.
// Empty array is allowed.
//
// 'undefined' values are an exception.
// Array with non-number is an exception.
// Negative or zero numbers are an exception.
// Non-number argument is an exception.
function higherThanZeroEvaulator(p) {
    throwIfUndef(arguments);
    // Single argument - check if it's array of numbers or single number
    if(arguments.length === 1){
      let first = arguments[0];
      // No need to explicitly check for 'undefined' on first argument,
      // that is taken care of by accessing the constructor
      if(first.constructor === Array){
        // It's an array, recurse...
        first.forEach((e) => {
          higherThanZeroEvaulator(e);
        });
      }
      else {
        // Possibly a number...
        throwIfNotNum(p);
        if(!(first > 0.0)){
          throw 'Invalid number argument value';
        }
      }
    }
    else {
      for(let size = arguments.length, i = 0; i < size; i++){
        higherThanZeroEvaulator(arguments[i]);
      }
    }
}

export {
  undefinedEvaluator,
  higherThanZeroEvaulator,
  throwIfUndef
};
