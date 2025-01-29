// Three.js implementation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#hero-canvas'),
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Create animated background elements
const particles = new THREE.Group();
const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
const particleMaterial = new THREE.MeshBasicMaterial({ 
    color: 0x00F0FF,
    transparent: true,
    opacity: 0.4
});

for (let i = 0; i < 100; i++) {
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    particle.position.x = (Math.random() - 0.5) * 15;
    particle.position.y = (Math.random() - 0.5) * 15;
    particle.position.z = (Math.random() - 0.5) * 15;
    particles.add(particle);
}

scene.add(particles);

function animate() {
    requestAnimationFrame(animate);
    
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.001;
    
    particles.children.forEach(particle => {
        particle.rotation.x += 0.005;
        particle.rotation.y += 0.005;
    });

    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
}); 