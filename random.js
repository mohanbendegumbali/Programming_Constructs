function generateRandomNumbers() {
    let numbers = [];
  
    for (let i = 0; i < 10; i++) {
      let num = Math.floor(Math.random() * 900) + 100;
      numbers.push(num);
    }
  
    return numbers;
  }
  
  let randomNumbers = generateRandomNumbers();
  
  console.log(randomNumbers);
  