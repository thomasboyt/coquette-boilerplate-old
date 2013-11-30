import ExampleEntity from "changeme/example-entity";

var Game = function(canvasId, width, height) {
  window.coq = new Coquette(this, canvasId, width, height, "#000");

  coq.entities.create(ExampleEntity, {
    text: "Hello world!"
  });
};

new Game("container", 500, 500);
