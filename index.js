var rayVsLineSegment = require('ray-vs-line-segment');
var Vec2 = require('vec2');

/**
* @param {Rayish} rayish
* @param {Rec2} rect
* @Return {Vec2} point where ray first hits rect or null if no hit.
*/
function rayVsRect(rayish, rect) {
  if (rect.contains(rayish.start)) {
    return rayish.start;
  }

  var intersections = segments(rect).map(rayVsSegment(rayish)).filter(truthy);
  return rayish.start.nearest(intersections);
}

function segments(rect) {
  return [
    // top
    segment(rect.x, rect.y, rect.bound.x, rect.y),
    // right
    segment(rect.bound.x, rect.y, rect.bound.x, rect.bound.y),
    // bottom
    segment(rect.x, rect.bound.y, rect.bound.x, rect.bound.y),
    // left
    segment(rect.x, rect.y, rect.x, rect.bound.y)
  ];
}

function segment(x1, y1, x2, y2) {
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

function rayVsSegment(rayish) {
  return function(segment) {
    return rayVsLineSegment(rayish, segment);
  };
}

function truthy(value) {
  return value;
}

module.exports = rayVsRect;
