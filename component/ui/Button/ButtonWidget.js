const d3 = require('d3');
const Handlebars = require('Handlebars');

function ButtonWidget(view, scope) {
  this.view = view;
  this.scope = scope;
  this.template = Handlebars.compile(view.innerHTML);
}

ButtonWidget.prototype.render = function() {
  return this.fetchData()
      .then(renderButtion);
};

ButtonWidget.prototype.fetchData = function() {
    var promises = [];
    var widget = this;

    promises.push(widget.scope.onAppReady);

    if (this.view.hasAttribute('data-model')) {
        promises.push(
            this.scope.getModel().then(function(result) {
                widget.model = result;
            })
        );
    }

    return Promise.all(promises).then(function() {
        return widget;
    });
};

function renderButtion(widget) {
    // Update…
    var button = d3.select(widget.view.shadowRoot)
        .selectAll('button')
        .data([widget.view.dataset])
        .attr('type', function(d) {
            return d.type || 'button';
        })
        .text(function() {
          return widget.template({
              model: widget.model
          });
        });

    if (widget.view.hasAttribute('data-icon')) {
        button.insert(function(d) {
            var span = document.createElement('span');
            span.classList.add('glyphicon');
            span.classList.add('glyphicon-' + d.icon);
            return span;
        }, ':first-child');
    }
}

module.exports = ButtonWidget;
