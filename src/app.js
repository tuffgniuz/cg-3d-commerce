import * as BABYLON from 'babylonjs'

const stage = document.querySelector('#stage')
const engine = new BABYLON.Engine(stage, true)

const createScene = () => {
    const scene = new BABYLON.Scene(engine)    
    // scene.clearColor = new BABYLON.Color3(0, 0, 0);

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(-10, 20, 10), scene)

    const camera = new BABYLON.ArcRotateCamera('camera',
        BABYLON.Tools.ToRadians(45),
        BABYLON.Tools.ToRadians(45),
        100,
        BABYLON.Vector3.Zero(),
        scene)
    camera.attachControl(stage, true)

    // TRANSPARENT CANVAS
    scene.clearColor = new BABYLON.Color4(0,0,0,0.0000000000000001);

    const sneaker = BABYLON.SceneLoader.ImportMesh('', '../assets/', 'nike-air.babylon', scene)

    return scene
}

const scene = createScene()

engine.runRenderLoop( () => {
    scene.render()
})

window.addEventListener('resize', () => {
    engine.resize()
})
