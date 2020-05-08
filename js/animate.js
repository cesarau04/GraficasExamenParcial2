class Animate{
    animate(obj){
        if (obj.animationData === 'ROTATING'){
            obj.updateRotation((obj.mesh.rotation.x + 0.01) % 360, obj.mesh.rotation.y = (obj.mesh.rotation.y + 0.01) % 360);
        } else if (obj.animationData === 'MOVING') {
            if (obj.mesh.position.x > 3.){
                obj.updatePosition(-3.);
            } else {
                obj.updatePosition(obj.mesh.position.x + 0.01);
            }
            if (obj.mesh.position.y > 3.){
                obj.updatePosition(obj.mesh.position.x, -3.);
            } else {
                obj.updatePosition(obj.mesh.position.x, obj.mesh.position.y + 0.01);
            }
        } else {
            alert("This object has no animation")
        }
    }
}
