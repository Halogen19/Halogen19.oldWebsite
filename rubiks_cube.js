//create scene
const scene = new THREE.Scene();

//create camera
const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight, 0.1,1000);
camera.position.z = 50;

//render scene
const renderer = new THREE.WebGLRenderer({ antialias: true } );
renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
document.getElementById("render_container").appendChild(renderer.domElement);

//cube texture
const loader = new THREE.TextureLoader();


const materials = [
    new THREE.MeshBasicMaterial({map: loader.load('images/BlankFace.png')}), // x positive
    new THREE.MeshBasicMaterial({map: loader.load('images/BlueFace.png')}), // x negative
    new THREE.MeshBasicMaterial({map: loader.load('images/BlankFace.png')}), // y positive
    new THREE.MeshBasicMaterial({map: loader.load('images/WhiteFace.png')}),   // y negative
    new THREE.MeshBasicMaterial({map: loader.load('images/RedFace.png')}),   // z positive
    new THREE.MeshBasicMaterial({map: loader.load('images/BlankFace.png')}),   // z negative
  ];



//create 3d object(s)
const geometry = new THREE.BoxGeometry(5,5,5);
const material = new THREE.MeshBasicMaterial({
    //color: '#FFFFff',
    //envMap: textureCube
    //wireframe:true
});
const cube = new THREE.Mesh(geometry,materials);
cube.rotation.z = 45;
cube.rotation.x = -45;
//create a point light
const light = new THREE.PointLight( 0xffffff, 10, 100 );
light.position.set( 30, 45, 60 );

//add object(s) to scene
scene.add(cube);
scene.add(light);

const light1 = new THREE.AmbientLight(); // soft white light
scene.add( light1 );
//animate object(s)
const animate = () =>{
    requestAnimationFrame(animate);
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //cube.rotation.z += 0.01;
    renderer.render(scene,camera);
};

//call animate to display
animate();

