var assert = require('assert');
var rayVsRect = require('./');

describe('rayVsRect()', function() {
  var rect, rayish;

  beforeEach(function() {
    rect = {
      top: 45,
      left: 45,
      width: 10,
      height: 10
    };
  });

  describe('hits', function() {
    describe('ray goes completely through rect', function() {
      it('returns point where ray enters rect', function() {
        rayish = createRay(10, 50, 70, 50);

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 45);
        assert.equal(point.y, 50);
      });
    });

    describe('ray starts outside, ends inside rect', function() {
      it('returns point where ray enters rect', function() {
        rayish = createRay(10, 50, 50, 50);

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 45);
        assert.equal(point.y, 50);
      });
    });

    describe('ray goes along rect edge', function() {
      it('returns point where ray first hits rect edge', function() {
        rayish = createRay(45, 10, 45, 70);

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 45);
        assert.equal(point.y, 45);
      });
    });

    describe('ray starts inside rect', function() {
      it('returns ray start', function() {
        rayish = createRay(50, 50, 50, 10);

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 50);
        assert.equal(point.y, 50);
      });
    });

    describe('ray starts on rect edge', function() {
      it('returns ray start', function() {
        rayish = createRay(55, 55, 70, 50);

        var point = rayVsRect(rayish, rect);

        assert.equal(point.x, 55);
        assert.equal(point.y, 55);
      });
    });
  });

  describe('misses', function() {
    describe('ray does not reach rect', function() {
      it('returns null', function() {
        rayish = createRay(10, 50, 40, 50);

        var point = rayVsRect(rayish, rect);

        assert.strictEqual(point, null);
      });
    });

    describe('ray goes wide of rect', function() {
      it('returns null', function() {
        rayish = createRay(10, 50, 50, 70);

        var point = rayVsRect(rayish, rect);

        assert.strictEqual(point, null);
      });
    });

    describe('ray goes away from rect', function() {
      it('returns null', function() {
        rayish = createRay(40, 50, 10, 50);

        var point = rayVsRect(rayish, rect);

        assert.strictEqual(point, null);
      });
    });
  });
});

function createRay(x1, y1, x2, y2) {
  return {
    start: {
      x: x1,
      y: y1
    },
    end: {
      x: x2,
      y: y2
    }
  };
}
