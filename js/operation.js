
const contenedor = document.getElementById('contenedor');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight,
    0.1, 1000);

const rendered = new THREE.WebGLRenderer(
    {
        antialias: true
    }
);
rendered.setPixelRatio(window.
    devicePixelRatio)
    document.body.appendChild(
        rendered.domElement
);


rendered.setSize(contenedor.clientWidth, contenedor.clientHeight);
camera.aspect = contenedor.clientWidth / contenedor.clientHeight;		
camera.updateProjectionMatrix();
//rendered.setSize(innerWidth, innerHeight);

document.body.appendChild(rendered.domElement);


const sphere = new THREE.Mesh(new THREE.SphereGeometry(7, 100, 100),
    new THREE.MeshBasicMaterial({
        //color: 0xff0000
        map: new THREE.TextureLoader().load('./img/progrImg.jpg')

    })
);

scene.add(sphere);

camera.position.z = 15;



function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x +=0.0000015;
    sphere.rotation.y +=0.00055;
    rendered.render(scene, camera);
};

animate();

contenedor.appendChild(rendered.domElement);
rendered.setClearColor( 0xffffff );


function resize() {		
    rendered.setSize(contenedor.clientWidth, contenedor.clientHeight);
    camera.aspect = contenedor.clientWidth / contenedor.clientHeight;		
    camera.updateProjectionMatrix();
 };
 window.addEventListener("resize", resize);