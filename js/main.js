"use strict"
var canvas;
var program;
var mesh;

function main() {
    canvas = document.getElementById("canvas");
    program = new Program(canvas);
    
    initEventHandler();
    resetUI();

    program.update();
}


class Program {
    constructor(canvasIn) {
        this.objectsInScene = [];
        this.scene = null;
        this.camera = null;
        this.bIsCameraOrto = false;
        this.sceneReady = false;
        this.mode = 'EDIT_MODE';
        this.canvas = canvasIn;
        this.threeRenderer = null;
        this.currentSelected = null;
        this.anime = null;

        // this.__restart__ = this.__restart__.bind(this);
        // this.createLight = tihs.createLight.bind(this);
        // this.createCamera = this.createCamera.bind(this);
        this.addMesh = this.addMesh.bind(this);
        this.update = this.update.bind(this);
        this.createPerspectiveCamera = this.createPerspectiveCamera.bind(this);
        this.createOrtoCamera = this.createOrtoCamera.bind(this)
        // Auto init
        this.__restart__()
    }

    __restart__() {
        this.threeRenderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.threeRenderer.setSize(this.canvas.width, this.canvas.height);
        this.threeRenderer.setClearColor("black");
        this.scene = new THREE.Scene();
        this.createPerspectiveCamera()
        this.scene.add(this.camera);
        this.scene.add(this.createLight());
        this.objectsInScene = []
        this.mode = 'EDIT_MODE';
        this.sceneReady = true;
        this.currentSelected = null;
        this.bIsCameraOrto = false;
        this.anime = new Anime()
    }

    createLight(){
        return new THREE.AmbientLight();
    }

    createPerspectiveCamera(fov=60., near=0.01, far=10000, x=0., y=0., z=15.){
        var camera = new THREE.PerspectiveCamera(fov, this.canvas.width / this.canvas.height, near, far);
        camera.position.set(x, y, z);
        this.camera = camera
        this.bIsCameraOrto = false;
    }

    createOrtoCamera(left=-5, 
                    right=5, 
                    top=5,
                    bottom=-5, 
                    near=0.01, 
                    far=10000,
                    x=0.,
                    y=0.,
                    z=10){
        var camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
        camera.position.set(x,y,z)
        this.camera = camera
        this.bIsCameraOrto = true;
    }

    moveCamera(x, y, z){
        this.camera.position.x = x
        this.camera.position.y = y
        this.camera.position.z = z
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
        }

        for (var obj in this.objectsInScene){
            this.anime.do(obj);
        }
        
        requestAnimationFrame(this.update);
    }
}

