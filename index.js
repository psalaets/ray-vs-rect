var rayVsLineSegment = require('ray-vs-line-segment');
var Vec2 = require('vec2');

/**
* @param {object} ray - Object that looks like
* {
*   start: {x: number, y: number},
*   end: {x: number, y: number}
* }
*
* @param {object} rect - Object that looks like
* {
*   left: number,
*   top: number,
*   width: number,
*   height: number
* }
*
* @return {object} point (x/y) where ray hits rect or null if no hit.
*/
function rayVsRect(rayish, rect) {
  if (rectContainsPoint(rect, rayish.start)) {
    return rayish.start;
  }

  var rayStart = new Vec2(rayish.start);

  var intersections = segments(rect).map(rayVsSegment(rayish)).filter(truthy);
  return rayStart.nearest(intersections);
}

function rectContainsPoint(rect, point) {
  return rect.left <= point.x && point.x <= rect.left + rect.width &&
    rect.top <= point.y && point.y <= rect.top + rect.height;
}

function segments(rect) {
  return [
    // top side
    segment(rect.left, rect.top, rect.left + rect.width, rect.top),
    // right side
    segment(rect.left + rect.width, rect.top, rect.left + rect.width, rect.top + rect.height),
    // bottom side
    segment(rect.left, rect.top + rect.height, rect.left + rect.width, rect.top + rect.height),
    // left side
    segment(rect.left, rect.top, rect.left, rect.top + rect.height)
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
