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
  environment (SUNSET);

  var albero = beginGroup();
  diffuse("#0D4B0F");
  roughness (0,1);
  sphere(0, 5, 0, 3);
  roughness (1);
  diffuse("#44291F");
  align(TOP);
  cylinder(0, 0, 0, 1, 4);
  endGroup();

  var pino = beginGroup();
  diffuse("#0D4B0F");
  roughness (0,1);
  cone(5, 4, 0, 2, 5);
  roughness (1);
  diffuse("#44291f");
  cylinder(5, 0, 0, 1, 4);
  align(TOP);
  endGroup();

  var lato = 80;
  var numeroAlberi = 40;
  for (let i = 0; i < numeroAlberi; i++) {
    let x = random(-lato / 2, lato / 2);
    let y = 0;
    let z = random(-lato / 2, lato / 2);
    let nuovoAlbero = clone(albero, x, y, z);
    nuovoAlbero.setScale(1, 2);
  }

  var latop = 60;
  var numeroPini = 40;
  for (let i = 0; i < numeroPini; i++)
  {
    let x = random(-latop / 2, latop / 2);
    let y = 0;
    let z = random(-latop / 2, latop / 2);
    let nuovoPino = clone(pino, x, y, z);
    nuovoPino.setScale(1, 3);
  }
  var terreno = beginGroup();
  align(BOTTOM);
  diffuse("#0D5310");
  box (0,0,0,lato, 1, lato);
  endGroup();
  pushFX(BLOOM, 0.2);
}

  
function draw() {}

  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment

