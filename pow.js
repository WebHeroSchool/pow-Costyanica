function pow(x, n) {
  let result;
  
  if ( x>0 && n>0 ) { 
    result = Math.pow(x, n);
    return result;
  } else {
    return false;
  }
}

module.exports = pow;
