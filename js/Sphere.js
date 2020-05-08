class Sphere extends THREE.Mesh{
    constructor(r=1, ws=32, hs=32){
      super();
      this.geometry = new THREE.SphereGeometry(r, ws, hs);
      this.material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      this.mesh = new THREE.Mesh(this.geometry, this.material)
      this.repr = "Sphere"
  
      this.shouldAnimate = false;

      this.updatePosition = this.updatePosition.bind(this);
      this.updateRotation = this.updateRotation.bind(this);
      this.updateScale = this.updateScale.bind(this);

      this.animate = this.animate.bind(this);
      this.toString = this.toString.bind(this);
  }

  updatePosition(x = this.mesh.position.x, y = this.mesh.position.y, z = this.mesh.position.z){
      this.mesh.postion(x, y, z)
  }
  updateRotation(x = this.mesh.rotation.x, y = this.mesh.rotation.y, z = this.mesh.rotation.z){
      this.mesh.rotation(z, y, z)
  }
  updateScale(x = this.mesh.scale.x, y = this.mesh.scale.y, z = this.mesh.scale.z){
      this.mesh.scale(x, y, z);
  }

  animate(){
      this.shouldAnimate = !this.shouldAnimate
  }

  toString(){
      return this.repr;
  }
}