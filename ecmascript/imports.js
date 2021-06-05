// unique namespace

const $;

$.query = function(selector) {
  ...
}

// IIFE

(() => {
  var a = 2;
})()

// CommonJS - Node

module.exports = { PI: 3.14 };

const module = require('./module');
module.PI;

const _ = require('lodash');
_.groupBy(...);

const { groupBy } = require('lodash');
const groupBy = require('lodash/groupby');

// AMD - Asynchronous Module Definition

define(['dep1', 'dep2'], function(dep1, dep2) {
  return dep3
});

// UMD - Universal Module Definition

(function(global, factory) {
  if (commonjs) {
    module.exports = factory(global);
  } else if (amd) {
    define([], factory);
  } else {
    global.module = factory();
  }
})(this, function() { ... });

// ES6 Modules

// named export
export const PI = 22 / 7;

// default export
export default function sum(a, b) {
  return a + b;
}

import theSum, { PI } from './module';

import theSum, * as Constants from './module';

Constants.PI

import React from 'react';

React.Component

import React, { Component } from 'react';

// code splitting
import('./module').then((module) => {
  ...
});