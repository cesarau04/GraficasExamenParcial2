isWireFrame = false;
hex = "#ffffff"

function toolsEventHandler(e) 
{
  console.log("Enter EventHandler");
  if (e === 'floor'){
    console.log("Enter Floor");
    var geometry = new THREE.BoxGeometry(5., .1, 5.);
    var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    var mesh = new THREE.Mesh(geometry, material)
    program.addMesh(mesh)
  }

  if (e === "sphere"){
    program.addMesh(new Sphere());
    program.currentSelected.changeWireframe(isWireFrame);
    program.currentSelected.changeColor(hex);
  }
  if (e === "box"){
    program.addMesh(new Box());
    program.currentSelected.changeWireframe(isWireFrame);
    program.currentSelected.changeColor(hex);
  }
  if (e === "cylinder"){
    program.addMesh(new Cylinder());
    program.currentSelected.changeWireframe(isWireFrame);
    program.currentSelected.changeColor(hex);
  }
  if (e === "cone"){
    program.addMesh(new Cone());
    program.currentSelected.changeWireframe(isWireFrame);
    program.currentSelected.changeColor(hex);
  }
  if (e === "solid"){
    isWireFrame = false;
    for(i = 0; i < program.objectsInScene.length;i++){
      program.objectsInScene[i].changeWireframe(false);
    }
  }else if(e === "wiref"){
    isWireFrame = true;
    for(i = 0; i < program.objectsInScene.length;i++){
      program.objectsInScene[i].changeWireframe(true);
    }
  }
  
  if (e === "camera-change") {
    if (program.bIsCameraOrto){
      program.createPerspectiveCamera();
      console.log(program.camera);
    } else {
      program.createOrtoCamera(-5, 5, 5, -5);
      console.log(program.camera);
      console.log(program.currentSelected);
      
    }
  }

  if (e === "reposition") {
    if (program.bIsCameraOrto){
      program.createOrtoCamera();
    } else {
      program.createPerspectiveCamera();
    }
  }
}

function colorPaletteEvent(){
  hex = document.getElementById("color-palette").value//.replace("#","0x")
  console.log(hex);
  for(i = 0; i < program.objectsInScene.length;i++){
     program.objectsInScene[i].changeColor(hex);
  }
}

function onModeChange(e){
  // EditMode = !EditMode
  console.log("EditMode val: ") // + EditMode);
}

function resetUI(){
  document.getElementById("zoom-slider").value = 0
  document.getElementById("pan-slider").value = 0
  document.getElementById("dolly-slider").value = 0
  document.getElementById("tilt-slider").value = 0
}

function onZoomCamera(e){

}

var CamVelocityFactor = 50;
function onPanCamera(e){
  var panValue = document.getElementById("pan-slider").value / CamVelocityFactor;
  program.camera.position.x = program.camera.position.x + panValue
  document.getElementById("pan-slider").value = 0
}

function onDollyCamera(e){
  var dollyValue = document.getElementById("dolly-slider").value / CamVelocityFactor;
  program.camera.position.z = program.camera.position.z + dollyValue
  document.getElementById("dolly-slider").value = 0
}

function onTiltCamera(e){
  var tiltValue = document.getElementById("tilt-slider").value / CamVelocityFactor;
  program.camera.position.y = program.camera.position.y + tiltValue
  document.getElementById("tilt-slider").value = 0
}

function initEventHandler(e)
{
  document.getElementById("mode").addEventListener("change", onModeChange);
  document.getElementById("zoom-slider").addEventListener("change", onZoomCamera);
  document.getElementById("pan-slider").addEventListener("change", onPanCamera);
  document.getElementById("dolly-slider").addEventListener("change", onDollyCamera);
  document.getElementById("tilt-slider").addEventListener("change", onTiltCamera);
}
