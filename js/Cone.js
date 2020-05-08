class Cone extends THREE.Mesh{
    constructor(rt=0.01,rb=1, ws=5, hs=16){
      super();
      this.geometry = new THREE.CylinderGeometry(rt,rb, ws, hs);
      this.material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      this.mesh = new THREE.Mesh(this.geometry, this.material)
      this.repr = "Cone"
      this.shouldAnimate=false;
  
      this.updatePosition = this.updatePosition.bind(this);
      this.updateRotation = this.updateRotation.bind(this);
      this.updateScale = this.updateScale.bind(this); 
  
      this.anime = this.anime.bind(this);
      this.toString = this.toString.bind(this);
    }
  
    anime(mode = "ROTATING"){
        this.shouldAnimate = !this.shouldAnimate;
        this.animationMode = mode;
      }  
    
    updatePosition(x=this.mesh.position.x, y=this.mesh.position.y, z=this.mesh.position.z){
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }
  
    updateRotation(x=this.mesh.rotation.x, y=this.mesh.rotation.y, z=this.mesh.rotation.z){
        this.rotation.x = x;
        this.rotation.y = y;
        this.rotation.z = z;
    }
  
    updateScale(x=this.mesh.scale.x, y=this.mesh.scale.y, z=this.mesh.scale.z){
        this.scale.x = x;
        this.scale.y = y;
        this.scale.z = z;
    }
  
    toString(){
      return this.repr;
    }
  }