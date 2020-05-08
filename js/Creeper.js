class Creeper extends THREE.Group{
    constructor(){
        super();
        this.front_foot = new Box(3, 1.5, 2);
        this.front_foot.updatePosition(0, -5, 0)

        this.back_foot = new Box(3, 1.5, 2);
        this.back_foot.updatePosition(0, -5, 1)
        //body = new Box();
        //head = new Box();

        this.add(this.front_foot);
        this.add(this.back_foot);
    }

    changeWireframe(value){
        //this.children.Box.mesh.material.wireframe = value;
        console.log(this.children)
        for (var i = 0; i<this.children.length; i++){
            this.children[i].mesh.material.wireframe = value;
        }
    }
}