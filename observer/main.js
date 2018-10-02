/**
 * @description constructor function to create Observer List.
 */
function ObserversList () {
  this.observerList = [];
}

/**
 * @description function to add an object to the list.
 */
ObserversList.prototype.add = function (obj) {
  return this.observerList.push (obj);
}

/**
 * @description function to get the object of given position.
 * @param {Number} index to get the object.
 */
ObserversList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList [index];
  } else {
    return -1;
  }
}

/**
 * @description function to get the number of objects present.
 */
ObserversList.prototype.count = function () {
  return this.observerList.length;
}

/**
 * @description function to get the index of a given object.
 * @param {Object} obj object to find.
 * @param {Number} startIndex start index of search.
 */
ObserversList.prototype.indexOf = function (obj, startIndex) {
  var i = startIndex || 0;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }

  return -1;
}

/**
 * @description function to get remove a particular object at given instance.
 * @param {Number} index position from where object should be removed.
 */
ObserversList.prototype.removeAt = function (index) {
  this.observerList.splice (index, 1);
}


/**
 * @description constructor function to create an observer list and
 * provide ability to add, remove, or notify.
 */
function Subject () {
  this.observers = new ObserversList ();
}

/**
 * @description function to add observers.
 * @param {Object} observer that needs to be added to the observer list.
 */
Subject.prototype.addObserver = function (observer) {
  return this.observers.add (observer);
}

/**
 * @description function to remove an observer.
 * @param {Object} observer to be removed
 */
Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt (this.observers.indexOf (observer, 0));
}

/**
 * @description function to executed update methods of all the observers.
 * @param {Object} context parameters to be passed when update is called.
 */
Subject.prototype.notify = function (context) {
  var observerCount = this.observers.count ();
  for (var index = 0; index < observerCount; index++) {
    this.observers.get (index).update (context);
  }
}

/**
 * @description a simple observer constructor with an empty update function.
 */
function Observer () {
  this.update = function () {

  }
}

// IIFE to execute the code using above observer pattern
(function () {

  /**
   * @description function to extend properties.
   */
  function extend (obj, extension) {
    for (var props in extension) {
      obj[props] = extension[props];
    }
  }

  // Cache dom elements
  var addNewObserver = document.querySelector ("#addNewObserver"),
      mainCheckbox = document.querySelector ("#mainCheckbox"),
      observerContainer = document.querySelector ("#observerContainer");
  
  // The main check box is responsible for controlling all observers, hence
  // it is the subject. Extend mainCheckbox with the Subject object.
  extend (mainCheckbox, new Subject ());

  // Since mainCheckbox is the Subject, it has the responsibility to notify all
  // its observer to update.
  mainCheckbox.addEventListener ("click", function () {
    // send the current state of check box as context to be executed.
    this.notify (this.checked);
  });

  // on clicking the add new observer button, it should add a new observer to
  // to the observer list created by the Subject.
  addNewObserver.addEventListener ("click", _addNewObserverElement);

  // function to add a new observer element.
  function _addNewObserverElement () {
    var checkbox = document.createElement ("input");
    checkbox.type = "checkbox";

    // this new check box will act as an observer and will have its update method.
    extend (checkbox, new Observer ());

    // override the update method.
    checkbox.update = function (value) {
      this.checked = value;
    }

    // now add this observer to observers list using Subject's add observer method.
    mainCheckbox.addObserver (checkbox);

    // in the end, add the new checkbox to dom.
    observerContainer.appendChild (checkbox);
  }
})();