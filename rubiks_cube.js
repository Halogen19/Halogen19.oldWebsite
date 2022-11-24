//import three.js
import * as THREE from 'three';
//import trackball controls
import {
  TrackballControls
} from "TrackballControls";

//create scene
const scene = new THREE.Scene();

//initialise controls variable
let controls;
//create camera
const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight, 0.1,1000);
camera.position.z = 50;

//render scene
const renderer = new THREE.WebGLRenderer({ antialias: true } );
renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
document.getElementById("render_container").appendChild(renderer.domElement);
createControls( camera );
//create TrackballControls
function createControls( camera ) {

  controls = new TrackballControls( camera, renderer.domElement );

  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;

  controls.keys = [ 'KeyA', 'KeyS', 'KeyD' ];

}







//cube texture
const loader = new THREE.TextureLoader();

const materials1 = [
    new THREE.MeshBasicMaterial({map: loader.load('images/BlankFace.png')}), // x positive
    new THREE.MeshBasicMaterial({map: loader.load('images/BlueFace.png')}), // x negative
    new THREE.MeshBasicMaterial({map: loader.load('images/BlankFace.png')}), // y positive
    new THREE.MeshBasicMaterial({map: loader.load('images/WhiteFace.png')}),   // y negative
    new THREE.MeshBasicMaterial({map: loader.load('images/RedFace.png')}),   // z positive
    new THREE.MeshBasicMaterial({map: loader.load('images/BlankFace.png')}),   // z negative
  ];

  const materials2 = [
    new THREE.MeshBasicMaterial({map: loader.load('images/BlankFace.png')}), // x positive
    new THREE.MeshBasicMaterial({map: loader.load('images/BlueFace.png')}), // x negative
    new THREE.MeshBasicMaterial({map: loader.load('images/BlankFace.png')}), // y positive
    new THREE.MeshBasicMaterial({map: loader.load('images/WhiteFace.png')}),   // y negative
    new THREE.MeshBasicMaterial({map: loader.load('images/RedFace.png')}),   // z positive
    new THREE.MeshBasicMaterial({map: loader.load('images/BlankFace.png')}),   // z negative
  ];



//create 3d object(s)
const geometry = new THREE.BoxGeometry(5,5,5);
const cube1 = new THREE.Mesh(geometry,materials1);
const cube2 = new THREE.Mesh(geometry, materials2)


cube1.position.x = 0;
cube1.position.y = 0;
cube1.position.z = 0;
cube1.rotation.z = 45;
cube1.rotation.x = -45;


cube2.position.x = 0;
cube2.position.y = 5;
cube2.position.z = 0;
cube2.rotation.z = 45;
cube2.rotation.x = -45;


//create a point light
const light = new THREE.PointLight( 0xffffff, 10, 100 );
light.position.set( 30, 45, 60 );

//add object(s) to scene

scene.add(cube2);
scene.add(cube1);
scene.add(light);

const light1 = new THREE.AmbientLight(); // soft white light
scene.add( light1 );
//animate object(s)
const animate = () =>{
    requestAnimationFrame(animate);
    controls.update();
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //cube.rotation.z += 0.01;
    renderer.render(scene,camera);
};

//call animate to display
animate();

