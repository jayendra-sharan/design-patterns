var myOffice = (function () {
  var _office = "Dunder Mifflin Paper Company",
      associate = "Jim Halpert";

  function _showOffice () {
    console.log ("Office: " + _office);
  }

  function shortDesc () {
    console.log (associate + " works in " + _office);
  }

  function showOffice () {
    _showOffice ();
  }

  function setOffice (office) {
    _office = office;
  }

  return {
    associate: associate,
    getOffice: showOffice,
    getShortDesc: shortDesc,
    changeOffice: setOffice
  }
}) ();

myOffice.getOffice ();
myOffice.getShortDesc ();
myOffice.changeOffice ("The Office");
myOffice.getShortDesc ();
myOffice.getOffice ();