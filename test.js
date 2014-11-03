var assert = require('assert');

var Vec2 = require('vec2');
var Rec2 = require('rec2');
var Rayish = require('rayish');

var rayVsRect = require('./');

describe('rayVsRect()', function() {
  var rect, rayish;

  beforeEach(function() {
    rect = new Rec2(45, 45, 10, 10);
  });

  describe('hits', function() {
    describe('ray goes completely through rect', function() {
      it('returns point where ray enters rect', function() {
        rayish = new Rayish(new Vec2(10, 50), new Vec2(70, 50));

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 45);
        assert.equal(point.y, 50);
      });
    });

    describe('ray starts outside, ends inside rect', function() {
      it('returns point where ray enters rect', function() {
        rayish = new Rayish(new Vec2(10, 50), new Vec2(50, 50));

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 45);
        assert.equal(point.y, 50);
      });
    });

    describe('ray goes along rect edge', function() {
      it('returns point where ray first hits rect edge', function() {
        rayish = new Rayish(new Vec2(45, 10), new Vec2(45, 70));

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 45);
        assert.equal(point.y, 45);
      });
    });

    describe('ray starts inside rect', function() {
      it('returns ray start', function() {
        rayish = new Rayish(new Vec2(50, 50), new Vec2(50, 10));

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 50);
        assert.equal(point.y, 50);
      });
    });

    describe('ray starts on rect edge', function() {
      it('returns ray start', function() {
        rayish = new Rayish(new Vec2(55, 55), new Vec2(70, 50));

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 55);
        assert.equal(point.y, 55);
      });
    });
  });

  describe('misses', function() {
    describe('ray does not reach rect', function() {
      it('returns null', function() {
        rayish = new Rayish(new Vec2(10, 50), new Vec2(40, 50));

        var point = rayVsRect(rayish, rect);

        assert.strictEqual(point, null);
      });
    });

    describe('ray goes wide of rect', function() {
      it('returns null', function() {
        rayish = new Rayish(new Vec2(10, 50), new Vec2(50, 70));

        var point = rayVsRect(rayish, rect);

        assert.strictEqual(point, null);
      });
    });

    describe('ray goes away from rect', function() {
      it('returns null', function() {
        rayish = new Rayish(new Vec2(40, 50), new Vec2(10, 50));

        var point = rayVsRect(rayish, rect);

        assert.strictEqual(point, null);
      });
    });
  });
});
