var counterModule = (function () {
  var counter = 0;

  return {
    incrementCounter: function () {
      counter++;
      console.log (counter);
    },
    decrementCounter: function () {
      counter--;
      console.log (counter);
    },
    resetCounter: function () {
      console.log ("Current counter value: ", counter);
      console.log ("Resetting...");
      counter = 0;
      setTimeout (function () {
        console.log ("Reset to: 0");
      }, 2000);
    }
  }
})();

counterModule.incrementCounter ();
counterModule.incrementCounter ();
counterModule.incrementCounter ();
counterModule.incrementCounter ();
counterModule.incrementCounter ();
counterModule.decrementCounter ();
counterModule.incrementCounter ();
counterModule.incrementCounter ();
counterModule.decrementCounter ();
counterModule.resetCounter ();