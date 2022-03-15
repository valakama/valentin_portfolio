const canvas = document.querySelector('canvas.webgl');



const textureloader = new THREE.TextureLoader();

const normaltexture = textureloader.load('texture/mooon.jpg');

const scene = new THREE.Scene();
const clock = new THREE.Clock();
const size_x = window.innerWidth;
const size_y = window.innerHeight;
const camera = new THREE.PerspectiveCamera( 75, size_x / size_y, 0.1, 100 );

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize( size_x ,size_y);
renderer.setClearColor( 0x000000, 0);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereBufferGeometry(.5, 64, 64);
// const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshStandardMaterial();
material.roughness = 0.7;
material.metalness = 1;
material.normalMap = normaltexture;
// material.wireframe = true;
material.color = new THREE.Color(0xf60465);

const cube = new THREE.Mesh( geometry, material);

scene.add( cube );


camera.position.z = 2;


const pointlight = new THREE.PointLight(0x03FFFF, 0.1);
pointlight.position.x =  2;
pointlight.position.y = 3;
pointlight.position = 4;
scene.add(pointlight);

const pointlight2 = new THREE.PointLight(0x03FFFF, 2);
pointlight2.position.set(3,1,3);
pointlight2.intensity = 2;
scene.add(pointlight2);

const pointlight3 = new THREE.PointLight(0xFF4C03, 2);
pointlight3.position.set(-1,1,0);
pointlight3.intensity = 1;
scene.add(pointlight3);

let mousex = 0;
let mousey = 0;

let targetx = 0;
let targety = 0;

const windowhalfx = window.innerWidth / 2;
const windowhalfy = window.innerHeight / 2;



document.addEventListener('mousemove', onDocumentMouse = (e) => {
    mousex = (e || event).clientX;
    mousey = (e || event).clientY;
});



function animate() {
    targetx = mousex * .001;
    targety = mousey * .001;
    
    const elsapsed = clock.getElapsedTime();
    
    cube.rotation.y = .5 * elsapsed;
    // cube.rotation.x = .5 * elsapsed;
    // cube.rotation.y = targetx;
    // cube.rotation.x = targety;
    // pointlight3.position.set(mousex * 10, mousey * 10,0);
    
    
    // cube.rotation.y += 0.01;
    // cube.rotation.x += 0.01;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();