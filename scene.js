/* Optimized 3D Interactive Space Noise Background for Daud Creatives */
(() => {
  const cv = document.getElementById("bg");
  if (!window.THREE || !cv) return;

  const small = innerWidth < 700;
  
  // 1. Renderer Setup
  const r = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: !small });
  r.setPixelRatio(Math.min(devicePixelRatio, 2));
  r.setSize(innerWidth, innerHeight);

  // 2. Scene & Camera Layout
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xf4f7ff, 0.008); // Subtle background fade

  const cam = new THREE.PerspectiveCamera(65, innerWidth / innerHeight, 0.1, 500);
  cam.position.set(0, 0, 35);

  // 3. Realistic Lighting setup
  const pl = new THREE.PointLight(0x3b82f6, 1.5, 100); // Premium Blue Light Source
  pl.position.set(20, 20, 20);
  const al = new THREE.AmbientLight(0xffffff, 0.85); // Global soft light
  scene.add(pl, al);

  // 4. Mesh 1: The Main Business Torus Ring (Right Side)
  const torusGeo = new THREE.TorusGeometry(12, 2.5, 16, 100);
  const torusMat = new THREE.MeshStandardMaterial({
    color: 0x1e40af,
    wireframe: true, // Clean corporate tech grid lines
    transparent: true,
    opacity: small ? 0.3 : 0.65
  });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  torus.position.set(small ? 0 : 18, 2, -10);
  scene.add(torus);

  // 5. Mesh 2: Creative Multi-faceted Wireframe (Left Lower Side)
  const wireGeo = new THREE.IcosahedronGeometry(6, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x3b82f6,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const wire = new THREE.Mesh(wireGeo, wireMat);
  wire.position.set(-15, -8, -20);
  scene.add(wire);

  // 6. Mesh 3: Cosmic Background Dust System (600 Interactive Particles)
  const particleCount = small ? 250 : 650;
  const targetPos = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    targetPos[i * 3] = THREE.MathUtils.randFloatSpread(160);       // X dimension
    targetPos[i * 3 + 1] = THREE.MathUtils.randFloatSpread(100);   // Y dimension
    targetPos[i * 3 + 2] = 40 - Math.random() * 200;               // Z depth depth
  }
  
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute("position", new THREE.BufferAttribute(targetPos, 3));
  
  const particleMat = new THREE.PointsMaterial({
    color: 0x1e40af,
    size: small ? 0.5 : 0.65,
    transparent: true,
    opacity: 0.6,
  });
  
  const dust = new THREE.Points(particleGeo, particleMat);
  scene.add(dust);

  // 7. Interactive State Control Variables
  let curScroll = 0, prevScroll = 0, mx = 0, my = 0;

  // Calculates percentage tracking of user layout depth
  const getScrollProg = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    return h > 0 ? Math.min(Math.max(scrollY / h, 0), 1) : 0;
  };

  // 8. Core Animation Render Loop Matrix
  function renderFrame() {
    const velocity = curScroll - prevScroll;
    prevScroll = curScroll;

    // Smooth responsive camera mapping path based on user depth tracking
    cam.position.z = 35 - curScroll * 85; 
    cam.position.x += ((mx * 3 + Math.sin(curScroll * 4) * 2) - cam.position.x) * 0.05;
    cam.position.y += ((-my * 2 - curScroll * 6) - cam.position.y) * 0.05;
    cam.lookAt(0, 0, -20);

    // Speed physics acceleration variables map
    const activeSpeed = 0.002 + Math.abs(velocity) * 2.5;

    // Self rotating geometry modules
    torus.rotation.x += activeSpeed;
    torus.rotation.y += activeSpeed * 0.5;

    wire.rotation.x += activeSpeed * 0.8;
    wire.rotation.y += 0.003;

    dust.rotation.z += 0.0003; // Light background cosmic swirl

    r.render(scene, cam);
  }

  function animationLoop() {
    curScroll += (getScrollProg() - curScroll) * 0.08; // Smooth fluid lerp interface
    renderFrame();
    requestAnimationFrame(animationLoop);
  }

  // 9. Global Responsive Trigger System Setup
  addEventListener("resize", () => {
    cam.aspect = innerWidth / innerHeight;
    cam.updateProjectionMatrix();
    r.setSize(innerWidth, innerHeight);
    renderFrame();
  });

  // Inertia desktop tracking setup configuration
  addEventListener("pointermove", (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  }, { passive: true });

  // Init execution sequence
  curScroll = prevScroll = getScrollProg();
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) renderFrame(); else requestAnimationFrame(animationLoop);
})();
