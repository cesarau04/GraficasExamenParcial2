"use strict"
var canvas;
var program;
var mesh;

function main() {
    canvas = document.getElementById("canvas");
    program = new Program(canvas);
    
    initEventHandler();
    
    program.update();
}


class Program {
    constructor(canvasIn) {
        this.objectsInScene = [];
        this.scene = null;
        this.camera = null;
        this.sceneReady = false;
        this.mode = 'EDIT_MODE';
        this.canvas = canvasIn;
        this.threeRenderer = null;
        this.currentSelected = null;

        // this.__restart__ = this.__restart__.bind(this);
        // this.createLight = tihs.createLight.bind(this);
        // this.createCamera = this.createCamera.bind(this);
        this.addMesh = this.addMesh.bind(this);
        this.update = this.update.bind(this);
        // Auto init
        this.__restart__()
    }

    __restart__() {
        this.threeRenderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.threeRenderer.setSize(this.canvas.width, this.canvas.height);
        this.threeRenderer.setClearColor("black");
        this.scene = new THREE.Scene();
        this.camera = this.createCamera()
        this.scene.add(this.camera);
        this.scene.add(this.createLight());
        this.objectsInScene = []
        this.mode = 'EDIT_MODE';
        this.sceneReady = true;
        this.currentSelected = null;
    }

    createLight(){
        return new THREE.AmbientLight();
    }

    createCamera(fov=60., near=0.01, far=10000, x=0., y=0., z=5.){
        var camera = new THREE.PerspectiveCamera(fov, canvas.width / canvas.height, near, far);
        camera.position.set(x, y, z);
        return camera
    }

    addMesh(obj){
        this.scene.add(obj)
        this.objectsInScene.push(obj)
        this.sceneReady = true;
        this.currentSelected = obj
    }

    update(){
        if (this.sceneReady) {
            this.threeRenderer.render(this.scene, this.camera);
            
            // Render all objects
            //for (var obj in this.objectsInScene){
                
            //}
        }
        requestAnimationFrame(this.update);
    
    }
}

