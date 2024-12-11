function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }
  return a + b;
}

let result = add(1, 2); // Correct usage
console.log(result); // Output: 3

try {
  let result2 = add(1, '2'); // This will throw an error
  console.log(result2);
} catch (e) {
  console.error(e.message); // Output: Both arguments must be numbers.
}

//Alternatively, use type assertion:
let result3 = add(1, Number('2')); // Type assertion
console.log(result3); //Output:3