// Code your solution here
function findMatching (drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}
function fuzzyMatch (drivers, string) {
  return drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0);
}
function matchName (drivers, string) {
  return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}
// Test cases
console.log(findMatching(['John', 'Sammy', 'Asha', 'Ian', 'Sarah', 'John'], 'John')); 