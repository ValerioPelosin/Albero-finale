/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function preload() {
  treeModel = loadAsset("albero.glb");
}

function setup() {
  createCanvas3D(windowWidth, windowHeight);
  
  //Change background color of the scene
  background3D("#333333");
  
  hideGrid();
  
  var tree = clone(treeModel,0,0,0);

  align(BOTTOM);
  diffuse("grey");
  box(0, 0, 0, 6, 0.5, 6);
}

function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}
