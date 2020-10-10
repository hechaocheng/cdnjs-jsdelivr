/*!
  * Progress v2.0.0-alpha.1 (https://phonon-framework.github.io)
  * Copyright 2015-2019 qathom
  * Licensed under MIT (https://github.com/phonon-framework/phonon/blob/master/LICENSE.md)
  */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Util = _interopDefault(require('../util.js'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Component = function () {
  function Component(name, defaultProps, props) {
    var _this = this;

    this.template = '';
    this.id = null;
    this.eventHandlers = [];
    this.registeredElements = [];
    this.name = name;
    var element = typeof props.element === 'string' ? document.querySelector(props.element) : props.element;
    var config = {};

    if (element) {
      var dataConfig = Util.Selector.attrConfig(element);

      if (dataConfig) {
        config = dataConfig;
      }
    }

    this.defaultProps = defaultProps;
    this.props = Object.assign(defaultProps, config, props, {
      element: element
    });
    this.id = this.uid();

    this.elementListener = function (event) {
      return _this.onBeforeElementEvent(event);
    };

    this.setEventsHandler();
  }

  Component.prototype.setTemplate = function (template) {
    this.template = template;
  };

  Component.prototype.getTemplate = function () {
    return this.template;
  };

  Component.prototype.getElement = function () {
    return this.getProp('element') || null;
  };

  Component.prototype.setElement = function (element) {
    this.props.element = element;
  };

  Component.prototype.getId = function () {
    return this.id;
  };

  Component.prototype.uid = function () {
    return Math.random().toString(36).substr(2, 10);
  };

  Component.prototype.getName = function () {
    return this.name;
  };

  Component.prototype.getProps = function () {
    return this.props;
  };

  Component.prototype.getProp = function (name) {
    var defaultValue = this.defaultProps[name];
    return typeof this.props[name] !== 'undefined' ? this.props[name] : defaultValue;
  };

  Component.prototype.setProps = function (props) {
    var componentProps = Object.assign({}, props);
    this.props = Object.assign(this.props, componentProps);
  };

  Component.prototype.setProp = function (name, value) {
    if (typeof this.props[name] === 'undefined') {
      throw new Error('Cannot set an invalid prop');
    }

    this.props[name] = value;
  };

  Component.prototype.registerElements = function (elements) {
    var _this = this;

    elements.forEach(function (element) {
      return _this.registerElement(element);
    });
  };

  Component.prototype.registerElement = function (element) {
    element.target.addEventListener(element.event, this.elementListener);
    this.registeredElements.push(element);
  };

  Component.prototype.unregisterElements = function () {
    var _this = this;

    this.registeredElements.forEach(function (element) {
      _this.unregisterElement(element);
    });
  };

  Component.prototype.unregisterElement = function (element) {
    var registeredElementIndex = this.registeredElements.findIndex(function (el) {
      return el.target === element.target && el.event === element.event;
    });

    if (registeredElementIndex > -1) {
      element.target.removeEventListener(element.event, this.elementListener);
      this.registeredElements.splice(registeredElementIndex, 1);
    } else {
      console.error('Warning! Could not remove element:' + ' ' + (element.target + " with event: " + element.event + "."));
    }
  };

  Component.prototype.triggerEvent = function (eventName, detail, objectEventOnly) {
    var _this = this;

    if (detail === void 0) {
      detail = {};
    }

    if (objectEventOnly === void 0) {
      objectEventOnly = false;
    }

    var eventNameObject = eventName.split('.').reduce(function (acc, current, index) {
      if (index === 0) {
        return current;
      }

      return acc + current.charAt(0).toUpperCase() + current.slice(1);
    });
    var eventNameAlias = "on" + eventNameObject.charAt(0).toUpperCase() + eventNameObject.slice(1);
    var props = this.getProps();
    this.eventHandlers.forEach(function (scope) {
      if (typeof scope[eventNameObject] === 'function') {
        scope[eventNameObject].apply(_this, [detail]);
      }

      if (typeof scope[eventNameAlias] === 'function') {
        props[eventNameAlias].apply(_this, [detail]);
      }
    });

    if (objectEventOnly) {
      return;
    }

    var element = this.getElement();

    if (element) {
      Util.Dispatch.elementEvent(element, eventName, this.name, detail);
    } else {
      Util.Dispatch.winDocEvent(eventName, this.name, detail);
    }
  };

  Component.prototype.preventClosable = function () {
    return false;
  };

  Component.prototype.destroy = function () {
    this.unregisterElements();
  };

  Component.prototype.onElementEvent = function (event) {};

  Component.prototype.setEventsHandler = function () {
    var props = this.getProps();
    var scope = Object.keys(props).reduce(function (cur, key) {
      if (typeof props[key] === 'function') {
        cur[key] = props[key];
      }

      return cur;
    }, {});

    if (Object.keys(scope).length > 0) {
      this.eventHandlers.push(scope);
    }
  };

  Component.prototype.onBeforeElementEvent = function (event) {
    if (this.preventClosable()) {
      return;
    }

    this.onElementEvent(event);
  };

  return Component;
}();

var Progress = function (_super) {
  __extends(Progress, _super);

  function Progress(props) {
    var _this = _super.call(this, 'progress', {
      height: 8,
      min: 0,
      max: 100,
      now: 0,
      label: false,
      striped: false,
      animate: true,
      background: null
    }, props) || this;

    _this.onTransition = false;

    _this.setHeight();

    _this.setAccessibility();

    if (_this.getProp('striped')) {
      _this.setStriped();
    }

    if (_this.getProp('background')) {
      _this.setBackground();
    }

    _this.set(_this.getProp('now'));

    return _this;
  }

  Progress.attachDOM = function () {
    Util.Observer.subscribe({
      componentClass: 'progress',
      onAdded: function onAdded(element, create) {
        create(new Progress({
          element: element
        }));
      },
      onRemoved: function onRemoved(element, remove) {
        remove('Progress', element);
      }
    });
  };

  Progress.prototype.set = function (value) {
    if (value === void 0) {
      value = 0;
    }

    var progressBar = this.getProgressBar();
    var min = this.getProp('min');
    var max = this.getProp('max');
    var progress = Math.round(value / (min + max) * 100);

    if (value < min) {
      console.error("Progress: Warning, " + value + " is under min value.");
      return false;
    }

    if (value > max) {
      console.error("Progress: Warning, " + value + " is above max value.");
      return false;
    }

    progressBar.setAttribute('aria-valuenow', "" + value);

    if (this.getProp('label')) {
      progressBar.innerHTML = progress + "%";
    }

    progressBar.style.width = progress + "%";
    return true;
  };

  Progress.prototype.animateProgressBar = function (startAnimation) {
    if (startAnimation === void 0) {
      startAnimation = true;
    }

    if (!this.getProp('striped')) {
      throw new Error('Progress: Animation works only with striped progress.');
      return false;
    }

    var progressBar = this.getProgressBar();

    if (startAnimation && !progressBar.classList.contains('progress-bar-animated')) {
      progressBar.classList.add('progress-bar-animated');
    }

    if (!startAnimation && progressBar.classList.contains('progress-bar-animated')) {
      progressBar.classList.remove('progress-bar-animated');
    }

    return true;
  };

  Progress.prototype.show = function () {
    var progress = this.getElement();
    progress.style.height = this.getProp('height') + "px";
    this.triggerEvent(Util.Event.SHOW);
    this.triggerEvent(Util.Event.SHOWN);
    return true;
  };

  Progress.prototype.hide = function () {
    var progress = this.getElement();
    progress.style.height = '0px';
    this.triggerEvent(Util.Event.HIDE);
    this.triggerEvent(Util.Event.HIDDEN);
    return true;
  };

  Progress.prototype.destroy = function () {
    this.unregisterElements();
    this.hide();
  };

  Progress.prototype.setHeight = function () {
    this.getElement().style.height = this.getProp('height') + "px";
  };

  Progress.prototype.setAccessibility = function () {
    var progress = this.getElement();
    progress.setAttribute('aria-valuemin', "" + this.getProp('min'));
    progress.setAttribute('aria-valuemax', "" + this.getProp('max'));
  };

  Progress.prototype.setStriped = function () {
    this.getProgressBar().classList.add('progress-bar-striped');

    if (this.getProp('animate')) {
      this.animateProgressBar();
    }
  };

  Progress.prototype.setBackground = function () {
    var progressBar = this.getProgressBar();
    var background = this.getProp('background');

    if (progressBar.classList.contains("bg-" + background)) {
      progressBar.classList.add("bg-" + background);
    }
  };

  Progress.prototype.getProgressBar = function () {
    return this.getElement().querySelector('.progress-bar');
  };

  return Progress;
}(Component);
Progress.attachDOM();

module.exports = Progress;
//# sourceMappingURL=progress.js.map
