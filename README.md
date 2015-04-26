# ray-vs-rect

Ray-aware rectangle intersection check.

## Usage

```js
var rayVsRect = require('ray-vs-rect');

var ray = {
  start: {x: 10, y: 50},
  end: {x: 70, y: 50}
};

var rect = {
  left: 45,
  top: 45,
  width: 10,
  height: 10
};

var point = rayVsRect(ray, rect);

point // {x: 45, y: 50}
```

## Install

```bash
npm install ray-vs-rect
```

## License

MIT