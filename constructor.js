function Person (firstName, lastName, job) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.job = job;
}

Person.prototype.getDescription = function () {
  return this.firstName + " " + this.lastName + " is a " + this.job + ".";
}

var jim = new Person ("Jim", "Halpert", "Salesman");
var michale = new Person ("Michael", "Scott", "Branch Manager");

console.log (jim.getDescription ());
console.log (michale.getDescription ());