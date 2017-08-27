# UI Button

Button web component for _websemble_ application.

__Features__:
* Attribute binding to view API
* Navigation between views with data-href attribute
* Handlebars templating support

## Getting started

Include UI Button in your project dependencies
(see [websemble generator]
  (https://github.com/cybersettler/generator-websemble/wiki)).
In your project's bower.json:

```json
{
  "dependencies": {
    "uiButton": "cybersettler/uiButton"
  }
}
```

## API

### data-model

Data to be used

### data-activate

An alternative to the click event, activate is fired
when the button is activated. The value specifies a
view handler.

### data-href

Specifies a view to which navigate when the button
is activated. It may be a handler or a view URI.

### data-icon

Used to display a _glyphicon_. The value may be
a view handler or the name of the icon, without
the "glyphicon" string.
