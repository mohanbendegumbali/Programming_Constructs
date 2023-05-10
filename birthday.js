function generateBirthMonths(numIndividuals) {
    let birthMonths = []; // Create an empty array to store the birth months
  
    for (let i = 0; i < numIndividuals; i++) { // Loop through the number of individuals
      let birthYear = Math.floor(Math.random() * 2) + 92; // Generate a random birth year between 92 and 93
      let birthMonth = Math.floor(Math.random() * 12) + 1; // Generate a random birth month between 1 and 12
      let birthDate = Math.floor(Math.random() * 31) + 1; // Generate a random birth date between 1 and 31
      let birthDay = new Date(birthYear, birthMonth - 1, birthDate); // Create a new date object with the birth year, month, and date
  
      birthMonths.push({month: birthMonth, date: birthDay}); // Add the birth month and date to the array of birth months
    }
  
    return birthMonths; // Return the array of birth months
  }
  
  function findSameMonthBirthdays(birthMonths) {
    let sameMonthBirthdays = {}; // Create an empty object to store the individuals with same month birthdays
  
    for (let i = 0; i < birthMonths.length; i++) { // Loop through the birth months
      let month = birthMonths[i].month; // Get the birth month of the current individual
      let date = birthMonths[i].date; // Get the birth date of the current individual
  
      if (sameMonthBirthdays[month] == undefined) { // If no one has been added to this month yet
        sameMonthBirthdays[month] = []; // Create a new array for this month
      }
  
      sameMonthBirthdays[month].push(date); // Add the individual's birth date to the array for this month
    }
  
    return sameMonthBirthdays; // Return the object of individuals with same month birthdays
  }
  
  let numIndividuals = 50; // Set the number of individuals to 50
  let birthMonths = generateBirthMonths(numIndividuals); // Generate the birth months of the individuals
  let sameMonthBirthdays = findSameMonthBirthdays(birthMonths); // Find the individuals with same month birthdays
  
  console.log("The individuals with same month birthdays are:", sameMonthBirthdays); // Display the output
  