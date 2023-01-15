//import three.js
import * as THREE from "three";
//import trackball controls
import { TrackballControls } from "TrackballControls";

//create scene
const scene = new THREE.Scene();

//initialise controls variable
let controls;
//create camera
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 50;

//render scene
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
document.getElementById("render_container").appendChild(renderer.domElement);
createControls(camera);
//create TrackballControls
function createControls(camera) {
  controls = new TrackballControls(camera, renderer.domElement);

  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;

  controls.keys = ["KeyA", "KeyS", "KeyD"];
}

//cube texture
const loader = new THREE.TextureLoader();
var BlankFace = new THREE.MeshBasicMaterial({
  map: loader.load("images/BlankFace.png"),
});
var RedFace = new THREE.MeshBasicMaterial({
  map: loader.load("images/RedFace.png"),
});
var WhiteFace = new THREE.MeshBasicMaterial({
  map: loader.load("images/WhiteFace.png"),
});
var BlueFace = new THREE.MeshBasicMaterial({
  map: loader.load("images/BlueFace.png"),
});
var GreenFace = new THREE.MeshBasicMaterial({
  map: loader.load("images/GreenFace.png"),
});
var OrangeFace = new THREE.MeshBasicMaterial({
  map: loader.load("images/OrangeFace.png"),
});
var YellowFace = new THREE.MeshBasicMaterial({
  map: loader.load("images/YellowFace.png"),
});

//Array of faces for each cube
const materials = new Array(27);
for (var w = 0; w < 27; w++) {
  materials[w] = new Array(6);
}
//Array of cube objects
const cubes = [];

//colouring the cubes, setting up the materials array
for (var i = 0; i < 27; i++) {
  materials[i][0] = GreenFace;
  materials[i][1] = BlueFace;
  materials[i][2] = RedFace;
  materials[i][3] = OrangeFace;
  materials[i][4] = WhiteFace;
  materials[i][5] = YellowFace;
}

//create 3d object(s)
const geometry = new THREE.BoxGeometry(5, 5, 5); //Making the cube geometry

//adding all the cubes objects to an array
for (var k = 0; k < 27; k++) {
  cubes[k] = new THREE.Mesh(geometry, materials[k]);
  cubes[k].rotation.y = 0;
}

//positioning the cubes using 3 nested for loops and adding the cubes to the scene
var cubeNumber = 0;
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    for (var p = 0; p < 3; p++) {
      cubes[cubeNumber].position.x = -5 + i * 5;
      cubes[cubeNumber].position.y = -5 + j * 5;
      cubes[cubeNumber].position.z = -5 + p * 5;
      scene.add(cubes[cubeNumber]);
      cubeNumber++;
    }
  }
}
rotateBottomRow(cubes, "A");
rotateLeftColumn(cubes, "A");
rotateMiddleColumn(cubes, "C");
rotateRightColumn(cubes,"C");
//rotateMiddleRow(cubes, "A");
//rotateTopRow(cubes, "A");
//rotateLeftColumn(cubes, "A");
//rotateFrontFace(cubes,"C");
//rotateMiddleFace(cubes,"C");
//rotateBackFace(cubes,"C")

function rotateBottomRow(arrayOfCubeObjects, direction) {
  //identify all cubes in the bottom layer
  var group = new THREE.Group();
  for (var cube of arrayOfCubeObjects) {
    if (cube.position.y == -5) {
      group.add(cube);
    }
  }
  if (direction == "C") {
    group.rotation.y = Math.PI / 2;
  } else if (direction == "A") {
    group.rotation.y = -Math.PI / 2;
  }
  //loop through each object in group starting with last
  for (var cubeInGroup = group.children.length-1; cubeInGroup >=0;cubeInGroup --){
    group.children[cubeInGroup].getWorldPosition(group.children[cubeInGroup].position);
    group.children[cubeInGroup].getWorldQuaternion(group.children[cubeInGroup].quaternion);
    group.children[cubeInGroup].position.x = Math.round(group.children[cubeInGroup].position.x);
    group.children[cubeInGroup].position.y = Math.round(group.children[cubeInGroup].position.y);
    group.children[cubeInGroup].position.z = Math.round(group.children[cubeInGroup].position.z);
    scene.add(group.children[cubeInGroup]);
  }
}

function rotateMiddleRow(arrayOfCubeObjects, direction) {
  //identify all cubes in the middle layer
  var group = new THREE.Group();
  for (var cube of arrayOfCubeObjects) {
    if (cube.position.y == 0) {
      group.add(cube);
    }
  }
  if (direction == "C") {
    group.rotation.y = Math.PI / 2;
  } else if (direction == "A") {
    group.rotation.y = -Math.PI / 2;
  }
  //loop through each object in group starting with last
  for (var cubeInGroup = group.children.length-1; cubeInGroup >=0;cubeInGroup --){
    group.children[cubeInGroup].getWorldPosition(group.children[cubeInGroup].position);
    group.children[cubeInGroup].getWorldQuaternion(group.children[cubeInGroup].quaternion);
    group.children[cubeInGroup].position.x = Math.round(group.children[cubeInGroup].position.x);
    group.children[cubeInGroup].position.y = Math.round(group.children[cubeInGroup].position.y);
    group.children[cubeInGroup].position.z = Math.round(group.children[cubeInGroup].position.z);
    scene.add(group.children[cubeInGroup]);
  }
}

function rotateTopRow(arrayOfCubeObjects, direction) {
  //identify all cubes in the top layer
  var group = new THREE.Group();
  for (var cube of arrayOfCubeObjects) {
    if (cube.position.y == 5) {
      group.add(cube);
    }
  }
  if (direction == "C") {
    group.rotation.y = Math.PI / 2;
  } else if (direction == "A") {
    group.rotation.y = -Math.PI / 2;
  }
  //loop through each object in group starting with last
  for (var cubeInGroup = group.children.length-1; cubeInGroup >=0;cubeInGroup --){
    group.children[cubeInGroup].getWorldPosition(group.children[cubeInGroup].position);
    group.children[cubeInGroup].getWorldQuaternion(group.children[cubeInGroup].quaternion);
    group.children[cubeInGroup].position.x = Math.round(group.children[cubeInGroup].position.x);
    group.children[cubeInGroup].position.y = Math.round(group.children[cubeInGroup].position.y);
    group.children[cubeInGroup].position.z = Math.round(group.children[cubeInGroup].position.z);
    scene.add(group.children[cubeInGroup]);
  }
}

function rotateLeftColumn(arrayOfCubeObjects, direction) {
  //identify all cubes in the left column
  var group = new THREE.Group();
  for (var cube of arrayOfCubeObjects) {
    if (cube.position.x == -5) {
      group.add(cube);
    }
  }
  if (direction == "C") {
    group.rotation.x = Math.PI / 2;
  } else if (direction == "A") {
    group.rotation.x = -Math.PI / 2;
  }
  //loop through each object in group starting with last
  for (var cubeInGroup = group.children.length-1; cubeInGroup >=0;cubeInGroup --){
    group.children[cubeInGroup].getWorldPosition(group.children[cubeInGroup].position);
    group.children[cubeInGroup].getWorldQuaternion(group.children[cubeInGroup].quaternion);
    group.children[cubeInGroup].position.x = Math.round(group.children[cubeInGroup].position.x);
    group.children[cubeInGroup].position.y = Math.round(group.children[cubeInGroup].position.y);
    group.children[cubeInGroup].position.z = Math.round(group.children[cubeInGroup].position.z);
    scene.add(group.children[cubeInGroup]);
  }
}
function rotateRightColumn(arrayOfCubeObjects, direction) {
  //identify all cubes in the left column
  var group = new THREE.Group();
  for (var cube of arrayOfCubeObjects) {
    if (cube.position.x == 5) {
      group.add(cube);
    }
  }
  if (direction == "C") {
    group.rotation.x = Math.PI / 2;
  } else if (direction == "A") {
    group.rotation.x = -Math.PI / 2;
  }
  //loop through each object in group starting with last
  for (var cubeInGroup = group.children.length-1; cubeInGroup >=0;cubeInGroup --){
    group.children[cubeInGroup].getWorldPosition(group.children[cubeInGroup].position);
    group.children[cubeInGroup].getWorldQuaternion(group.children[cubeInGroup].quaternion);
    group.children[cubeInGroup].position.x = Math.round(group.children[cubeInGroup].position.x);
    group.children[cubeInGroup].position.y = Math.round(group.children[cubeInGroup].position.y);
    group.children[cubeInGroup].position.z = Math.round(group.children[cubeInGroup].position.z);
    scene.add(group.children[cubeInGroup]);
  }
}
function rotateMiddleColumn(arrayOfCubeObjects, direction) {
  //identify all cubes in the left column
  var group = new THREE.Group();
  for (var cube of arrayOfCubeObjects) {
    if (cube.position.x == 0) {
      group.add(cube);
    }
  }
  if (direction == "C") {
    group.rotation.x = Math.PI / 2;
  } else if (direction == "A") {
    group.rotation.x = -Math.PI / 2;
  }
  //loop through each object in group starting with last
  for (var cubeInGroup = group.children.length-1; cubeInGroup >=0;cubeInGroup --){
    group.children[cubeInGroup].getWorldPosition(group.children[cubeInGroup].position);
    group.children[cubeInGroup].getWorldQuaternion(group.children[cubeInGroup].quaternion);
    group.children[cubeInGroup].position.x = Math.round(group.children[cubeInGroup].position.x);
    group.children[cubeInGroup].position.y = Math.round(group.children[cubeInGroup].position.y);
    group.children[cubeInGroup].position.z = Math.round(group.children[cubeInGroup].position.z);
    scene.add(group.children[cubeInGroup]);
  }
}

function rotateFrontFace(arrayOfCubeObjects, direction) {
  //identify all cubes in the left column
  var group = new THREE.Group();
  for (var cube of arrayOfCubeObjects) {
    if (cube.position.z == 5) {
      group.add(cube);
    }
  }
  if (direction == "C") {
    group.rotation.z = -Math.PI / 2;
  } else if (direction == "A") {
    group.rotation.z = Math.PI / 2;
  }
  //loop through each object in group starting with last
  for (var cubeInGroup = group.children.length-1; cubeInGroup >=0;cubeInGroup --){
    group.children[cubeInGroup].getWorldPosition(group.children[cubeInGroup].position);
    group.children[cubeInGroup].getWorldQuaternion(group.children[cubeInGroup].quaternion);
    group.children[cubeInGroup].position.x = Math.round(group.children[cubeInGroup].position.x);
    group.children[cubeInGroup].position.y = Math.round(group.children[cubeInGroup].position.y);
    group.children[cubeInGroup].position.z = Math.round(group.children[cubeInGroup].position.z);
    scene.add(group.children[cubeInGroup]);
  }
}
function rotateMiddleFace(arrayOfCubeObjects, direction) {
  //identify all cubes in the left column
  var group = new THREE.Group();
  for (var cube of arrayOfCubeObjects) {
    if (cube.position.z == 0) {
      group.add(cube);
    }
  }
  if (direction == "C") {
    group.rotation.z = -Math.PI / 2;
  } else if (direction == "A") {
    group.rotation.z = Math.PI / 2;
  }
  //loop through each object in group starting with last
  for (var cubeInGroup = group.children.length-1; cubeInGroup >=0;cubeInGroup --){
    group.children[cubeInGroup].getWorldPosition(group.children[cubeInGroup].position);
    group.children[cubeInGroup].getWorldQuaternion(group.children[cubeInGroup].quaternion);
    group.children[cubeInGroup].position.x = Math.round(group.children[cubeInGroup].position.x);
    group.children[cubeInGroup].position.y = Math.round(group.children[cubeInGroup].position.y);
    group.children[cubeInGroup].position.z = Math.round(group.children[cubeInGroup].position.z);
    scene.add(group.children[cubeInGroup]);
  }
}
function rotateBackFace(arrayOfCubeObjects, direction) {
  //identify all cubes in the left column
  var group = new THREE.Group();
  for (var cube of arrayOfCubeObjects) {
    if (cube.position.z == -5) {
      group.add(cube);
    }
  }
  if (direction == "C") {
    group.rotation.z = -Math.PI / 2;
  } else if (direction == "A") {
    group.rotation.z = Math.PI / 2;
  }
  //loop through each object in group starting with last
  for (var cubeInGroup = group.children.length-1; cubeInGroup >=0;cubeInGroup --){
    group.children[cubeInGroup].getWorldPosition(group.children[cubeInGroup].position);
    group.children[cubeInGroup].getWorldQuaternion(group.children[cubeInGroup].quaternion);
    group.children[cubeInGroup].position.x = Math.round(group.children[cubeInGroup].position.x);
    group.children[cubeInGroup].position.y = Math.round(group.children[cubeInGroup].position.y);
    group.children[cubeInGroup].position.z = Math.round(group.children[cubeInGroup].position.z);
    scene.add(group.children[cubeInGroup]);
  }
}

//create a point light
const light = new THREE.PointLight(0xffffff, 10, 100);
light.position.set(30, 45, 60);

//add light to scene

scene.add(light);

const light1 = new THREE.AmbientLight(); // soft white light
scene.add(light1);
//animate object(s)
const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

//call animate to display
animate();