function pow(x, n) {
  let result;
  
  if ( x>0 && n>0 ) { 
    result = Math.pow(x, n);
  } else {
    result = 'false'
  }
  
  return result;
}

module.exports = pow;
