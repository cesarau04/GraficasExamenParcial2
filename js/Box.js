class Box extends THREE.Mesh{
    constructor(w=2, h=2, d=2){
        super();
        this.geometry = new THREE.BoxGeometry( w, h, d );
        this.material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        this.mesh = new THREE.Mesh( this.geometry, this.material );

        this.repr = "Box"
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