const d3 = require('d3');
const Handlebars = require('Handlebars');
const i18next = require('i18next');

function ButtonWidget(view, scope) {
  this.view = view;
  this.scope = scope;
}

ButtonWidget.prototype.render = function() {
  var view = this.view;
  var scope = this.scope;

  // Update…
  var button = d3.select(view.shadowRoot)
  .selectAll('button')
  .data([view.dataset])
  .attr('type', function(d) {
    return d.type || 'button';
  })
  .text(function(d) { return view.textContent; });

  if (view.hasAttribute('data-icon')) {
    button.insert(function(d) {
      var span = document.createElement('span');
      span.classList.add('glyphicon');
      span.classList.add('glyphicon-' + d.icon);
      return span;
    }, ':first-child');
  }
};

module.exports = ButtonWidget;
