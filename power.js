//  Function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current) {
  return voltage * current;
}

// Test cases
console.log(circuitPower(230, 10)); // ➞ 2300
console.log(circuitPower(110, 3)); // ➞ 330
console.log(circuitPower(480, 20)); // ➞ 9600
