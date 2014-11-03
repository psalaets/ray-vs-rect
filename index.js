var rayVsLineSegment = require('ray-vs-line-segment');
var Segment2 = require('segment2');
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
    new Segment2(rect, new Vec2(rect.bound.x, rect.y)),
    // right
    new Segment2(new Vec2(rect.bound.x, rect.y), rect.bound),
    // bottom
    new Segment2(new Vec2(rect.x, rect.bound.y), rect.bound),
    // left
    new Segment2(rect, new Vec2(rect.x, rect.bound.y))
  ];
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
