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
    program.addMesh(new Sphere())
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

class Sphere extends THREE.Mesh{
  constructor(r=1, ws=32, hs=32){
    super();
    this.geometry = new THREE.SphereGeometry(r, ws, hs);
    this.material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.repr = "Sphere"

    this.toString = this.toString.bind(this);
  }

  updateTransform(pos, rot, scale){
    updatePosition(pos[0], pos[1], pos[2]);
    updateRotation(rot[0], rot[1], rot[2]);
    updateScale(scale[0], scale[1], scale[2]);
  }
  
  updatePosition(x, y, z){

  }

  updateRotation(x, y, z){

  }

  updateScale(x, y, z){
    this.mesh.scale(x,y,z)
  }

  toString(){
    return this.repr;
  }
}