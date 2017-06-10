const ButtonWidget = require('./ButtonWidget.js');

/**
 * Controller of the button widget
 * @constructor
 * @param {object} view - HTML element
 * @param {object} model - Model to keep state data
 */
function ButtonController(view, scope) {
  this.super(view, scope);
  var controller = this;

  scope.onAttached.then(function() {
    if (view.hasAttribute('data-activate')) {
      scope.bindAttribute('activate');
      listenActivateEvent(view, scope);
    }

    if (view.hasAttribute('data-href')) {
      listenNavigateEvent(view, scope);
    }

    controller.buttonWidget = new ButtonWidget(view, scope);
    controller.buttonWidget.render();
  });

  this.render = function() {
    this.buttonWidget.render();
  };
}

/**
 * Adds activate event listener.
 * @private
 */
function listenActivateEvent(view, scope) {
  view.addEventListener('click', function() {
    scope.onActivate();
  });
}

/**
 * Adds navigate event listener.
 * @private
 */
function listenNavigateEvent(view, scope) {
  view.addEventListener('click', function() {
    scope.navigateTo(view.dataset.href);
  });
}

module.exports = ButtonController;
