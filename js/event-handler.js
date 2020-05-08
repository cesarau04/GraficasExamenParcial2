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
    program.currentSelected.anime()
  }
  if (e === "cylinder"){
    program.addMesh(new Cylinder());
  }
  if (e === "cone"){
    program.addMesh(new Cone());
  }
}

function onModeChange(e){
  EditMode = !EditMode
  console.log("EditMode val: " + EditMode);
}

function initEventHandler(e)
{
	document.addEventListener("change", onModeChange)
}
