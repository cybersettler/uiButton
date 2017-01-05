/**
 * Controller of the button widget
 * @constructor
 * @param {object} view - HTML element
 * @param {object} model - Model to keep state data
 */
function ButtonController(view, scope) {
  this.super(view, scope);

  if (view.hasAttribute('data-onactivate')) {
    listenActivateEvent();
  }

  if (view.hasAttribute('data-href')) {
    listenNavigateEvent();
  }

  /**
   * Adds activate event listener.
   * @private
   */
  function listenActivateEvent() {
    view.addEventListener('click', function() {
      scope.dispatch(view.dataset.onactivate);
    });
  }

  /**
   * Adds navigate event listener.
   * @private
   */
  function listenNavigateEvent() {
    scope.navigateTo(view.dataset.href);
  }
}

module.exports = ButtonController;
