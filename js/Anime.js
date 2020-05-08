class Anime {
    constructor(){
        this.name = "Working"
        this.do = this.do.bind(this)
    }

    do(obj) {
        if (obj.shouldAnimate) {
            if (obj.animationMode === 'ROTATING') {                
                obj.updateRotation((obj.mesh.rotation.x + 30) % 360, (obj.mesh.rotation.y + 30) % 360);
            } else if (obj.animationMode === 'MOVING') {
                if (obj.mesh.position.x > 3.) {
                    obj.updatePosition(-3.);
                } else {
                    obj.updatePosition(obj.mesh.position.x + 0.01);
                }
                if (obj.mesh.position.y > 3.) {
                    obj.updatePosition(obj.mesh.position.x, -3.);
                } else {
                    obj.updatePosition(obj.mesh.position.x, obj.mesh.position.y + 0.01);
                }
            }
        }
    }
}
