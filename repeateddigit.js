function findRepeatedDigits() {
    let repeatedDigits = []; 
  
    for (let i = 0; i < 100; i++) { 
      let numStr = i.toString(); 
      if (numStr.length == 2 && numStr[0] == numStr[1]) { 
        repeatedDigits.push(i);
      }
    }
  
    return repeatedDigits; 
  }
  
  let repeatedDigits = findRepeatedDigits(); 
  console.log("The digits that are repeated twice are:", repeatedDigits); 
  