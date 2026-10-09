import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function calculateSum() {
  // Create an interface to read input from the terminal
  const rl = readline.createInterface({ input, output });

  try {
    // 1. Ask for the first number
    const firstInput = await rl.question('Enter the first number: ');
    
    // 2. Ask for the second number
    const secondInput = await rl.question('Enter the second number: ');

    // 3. Convert inputs from strings to numbers
    const num1 = parseFloat(firstInput);
    const num2 = parseFloat(secondInput);

    // 4. Validate and print the result
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Error: Please enter valid numbers!');
    } else {
      const sum = num1 + num2;
      console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    }

  } finally {
    // Always close the interface when done
    rl.close();
  }
}

// Execute the function
calculateSum();
