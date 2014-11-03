# ray-vs-rect

Ray-aware rectangle intersection check.

## Usage

    var rayVsRect = require('ray-vs-rect');
    
    var Vec2 = require('vec2');
    var Rayish = require('rayish');
    var Rec2 = require('rec2');
    
    var rayish = new Rayish(new Vec2(10, 50), new Vec2(70, 50));
    var rect = new Rec2(45, 45, 10, 10);
    
    var point = rayVsRect(rayish, rect);
    
    point // (45, 50)

## Install

    npm install ray-vs-rect

## License

MIT


