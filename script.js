// cascading menu

window.toggleMenu = function() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
};
// read-more
window.toggleAbout = function() {
    var content = document.getElementById("about-content");
    var btn = document.getElementById("toggle-btn");
    if (content.style.display === "none") {
        content.style.display = "block";
        btn.innerHTML = "Lees minder";
    } else {
        content.style.display = "none";
        btn.innerHTML = "Lees meer";
    }
}

// cube
export function renderCube() {
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    let cube;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('cube').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Rood
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Groen
        new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blauw
        new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Geel
        new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
        new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Cyaan
    ];
    const material = new THREE.MeshFaceMaterial(materials);
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        if (isDragging) {
            let deltaX = previousMousePosition.x - mouseX;
            let deltaY = previousMousePosition.y - mouseY;
            cube.rotation.x += deltaY * 0.01;
            cube.rotation.y += deltaX * 0.01;
        }

        previousMousePosition = {
            x: mouseX,
            y: mouseY
        };

        renderer.render(scene, camera);
    };

    document.addEventListener('mousedown', function (event) {
        isDragging = true;
        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    animate();
}

document.addEventListener('DOMContentLoaded', function () {
    renderCube();
});
 // back to top scrollfunction

 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.back-to-top').classList.add('show');
    } else {
        document.querySelector('.back-to-top').classList.remove('show');
    }
}
