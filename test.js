var assert = require('assert');

var Vec2 = require('vec2');
var Rec2 = require('rec2');
var Rayish = require('rayish');

var rayVsRect = require('./');

describe('rayVsRect()', function() {
  var rect, rayish;

  beforeEach(function() {
    rect = new Rec2();
  });

  describe('hits', function() {
    describe('ray goes completely through rect', function() {
      it('returns point where ray enters rect');
    });

    describe('ray starts outside, ends inside rect', function() {
      it('returns point where ray enters rect');
    });

    describe('ray goes along rect edge', function() {
      it('returns point where ray first hits rect edge');
    });

    describe('ray starts inside rect', function() {
      it('returns ray start');
    });

    describe('ray starts on rect edge', function() {
      it('returns ray start');
    });
  });

  describe('misses', function() {
    describe('ray does not reach rect', function() {
      it('returns null');
    });

    describe('ray goes wide of rect', function() {
      it('returns null');
    });

    describe('ray goes away from rect', function() {
      it('returns null');
    });
  });
});
