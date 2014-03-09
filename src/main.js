/*import ExampleEntity from "./example-entity";

import {Coquette} from 'coquette/src/main';
*/

var ExampleEntity = require('./example-entity');
var coquette = require('coquette/src/main');

var Game = function(canvasId, width, height) {
  window.coq = new coquette.Coquette(this, canvasId, width, height, "#000");

  coq.entities.create(ExampleEntity, {
    text: "Hello world!"
  });
};

new Game("container", 500, 500);
