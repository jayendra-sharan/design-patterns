var myOffice = (function () {
  
  var instance = null;

  var initActual = function () {
    var _randomNumber = Math.ceil(Math.random (20) * 999);
    
    function _randomNumberValue () {
      return _randomNumber;
    }

    return {
      officeName: function () {
        console.info ("This is Dunder Mifflin.");
      },
      city: "Scranton",
      getRandomNumber: _randomNumberValue
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = initActual ();
      }
      return instance;
    }
  }
}) ();

var office1 = myOffice.getInstance ();
var office2 = myOffice.getInstance ();

console.log (office1.getRandomNumber () === office2.getRandomNumber ());
