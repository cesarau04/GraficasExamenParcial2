isWireFrame = false;
hex = "#ffffff"

function toolsEventHandler(e) {
  console.log("Enter EventHandler");
  if (e === 'floor') {
    program.addMesh(new Floor());
    program.currentSelected.changeWireframe(isWireFrame);
  }

  if (e === "sphere") {
    program.addMesh(new Sphere());
    program.currentSelected.changeWireframe(isWireFrame);
    program.currentSelected.changeColor(hex);
  }
  if (e === "box") {
    program.addMesh(new Box());
    program.currentSelected.changeWireframe(isWireFrame);
    program.currentSelected.changeColor(hex);
  }
  if (e === "cylinder") {
    program.addMesh(new Cylinder());
    program.currentSelected.changeWireframe(isWireFrame);
    program.currentSelected.changeColor(hex);
  }
  if (e === "cone") {
    program.addMesh(new Cone());
    program.currentSelected.changeWireframe(isWireFrame);
    program.currentSelected.changeColor(hex);
  }
  if (e === "torus") {
    program.addMesh(new Torus());
    program.currentSelected.changeWireframe(isWireFrame);
  }
  if (e === "torus-knot") {
    program.addMesh(new TorusKnot());
    program.currentSelected.changeWireframe(isWireFrame);
  }
  if (e === "solid") {
    isWireFrame = false;
    for (i = 0; i < program.objectsInScene.length; i++) {
      program.objectsInScene[i].changeWireframe(false);
    }
  } else if (e === "wiref") {
    isWireFrame = true;
    for (i = 0; i < program.objectsInScene.length; i++) {
      program.objectsInScene[i].changeWireframe(true);
    }
  }

  if (e === "camera-change") {
    if (program.bIsCameraOrto) {
      program.createPerspectiveCamera();
    } else {
      program.createOrtoCamera(-5, 5, 5, -5);
    }
  }

  if (e === "reposition") {
    if (program.bIsCameraOrto) {
      program.createOrtoCamera();
    } else {
      program.createPerspectiveCamera();
    }
  }

  if (e === "delete-current") {
    newScene = []
    console.log(program.objectsInScene);

    for (var i in program.objectsInScene) {
      if (program.objectsInScene[i].id === program.currentSelected.id) {
        document.getElementById("figure-list").innerHTML = ''
      } else {
        newScene.push(program.objectsInScene[i])
      }
    }


    var bkCamera = program.camera;
    var bkLight = program.light;
    program.scene.dispose();
    program.scene = new THREE.Scene();
    program.scene.add(bkCamera);
    program.scene.add(bkLight);
    program.objectsInScene = []
    for (var i in newScene) {
      program.addMesh(newScene[i])
    }
  }
  if (e === "clear") {
    program.__restart__();
  }


  function colorPaletteEvent() {
    hex = document.getElementById("color-palette").value//.replace("#","0x")
    console.log(hex);
    for (i = 0; i < program.objectsInScene.length; i++) {
      program.objectsInScene[i].changeColor(hex);
    }
  }

  function onModeChange(e) {
    // EditMode = !EditMode
    console.log("EditMode val: ") // + EditMode);
  }

  function resetUI() {
    document.getElementById("zoom-slider").value = 0
    document.getElementById("pan-slider").value = 0
    document.getElementById("dolly-slider").value = 0
    document.getElementById("tilt-slider").value = 0
  }

  function refreshTransformUI() {
    if (program.currentSelected === null) {
      return
    }
    document.getElementById("translation-x").value = program.currentSelected.position.x
    document.getElementById("translation-y").value = program.currentSelected.position.y
    document.getElementById("translation-z").value = program.currentSelected.position.z

    document.getElementById("rotation-x").value = program.currentSelected.rotation.x
    document.getElementById("rotation-y").value = program.currentSelected.rotation.y
    document.getElementById("rotation-z").value = program.currentSelected.rotation.z

    document.getElementById("scale-x").value = program.currentSelected.scale.x
    document.getElementById("scale-y").value = program.currentSelected.scale.y
    document.getElementById("scale-z").value = program.currentSelected.scale.z
  }

  // function 

  function onZoomCamera(e) {

  }

  var CamVelocityFactor = 50;
  function onPanCamera(e) {
    var panValue = document.getElementById("pan-slider").value / CamVelocityFactor;
    program.camera.position.x = program.camera.position.x + panValue
    document.getElementById("pan-slider").value = 0
  }

  function onDollyCamera(e) {
    var dollyValue = document.getElementById("dolly-slider").value / CamVelocityFactor;
    program.camera.position.z = program.camera.position.z + dollyValue
    document.getElementById("dolly-slider").value = 0
  }

  function onTiltCamera(e) {
    var tiltValue = document.getElementById("tilt-slider").value / CamVelocityFactor;
    program.camera.position.y = program.camera.position.y + tiltValue
    document.getElementById("tilt-slider").value = 0
  }

  function initEventHandler(e) {
    document.getElementById("mode").addEventListener("change", onModeChange);
    document.getElementById("zoom-slider").addEventListener("change", onZoomCamera);
    document.getElementById("pan-slider").addEventListener("change", onPanCamera);
    document.getElementById("dolly-slider").addEventListener("change", onDollyCamera);
    document.getElementById("tilt-slider").addEventListener("change", onTiltCamera);
  }
