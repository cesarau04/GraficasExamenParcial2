class Cylinder extends THREE.Mesh{
    constructor(rt=1,rb=1, ws=5, hs=16){
      super();
      this.geometry = new THREE.CylinderGeometry(rt,rb, ws, hs);
      this.material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      this.mesh = new THREE.Mesh(this.geometry, this.material)
      this.repr = "Cylinder"
      this.shouldAnimate=false;
      this.animationMode=null;
  
      this.toString = this.toString.bind(this);
    }

    animate(mode = "ROTATING"){
      this.shouldAnimate = !this.shouldAnimate;
      this.animationMode = mode;
    }
    
    updatePosition(x, y, z){
  
    }
  
    updateRotation(x=obj.mesh.rotation.x, y=obj.mesh.rotation.y, z=obj.mesh.rotation.z){
  
    }
  
    updateScale(x, y, z){
      this.mesh.scale(x,y,z)
    }
  
    toString(){
      return this.repr;
    }
  }