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
  }
  if (e === "box"){
    program.addMesh(new Box());
  }
  if (e === "cylinder"){
    program.addMesh(new Cylinder());
  }
  if (e === "cone"){
    program.addMesh(new Cone());
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
