import { css, CSSResultGroup, LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
// import  { ModelViewerElement }  from '@google/model-viewer/lib/model-viewer';
// import { $scene } from '@google/model-viewer/lib/model-viewer-base';
// import { Scene, WebGLRenderer, AnimationMixer, Clock }from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import GlobalStyles from '@/css/global-styles.css?inline';
import videoSrc from '@/models/flat-3d.webm?inline';

// @ts-ignore
@customElement('sf-model')
export class SfModel extends LitElement {

  static readonly styles = [
    GlobalStyles,
    css`
      :host {
        display: flex;
        width: 100%;
        height: 225px;
        justify-content: center;
      }

      video {
        height: 100%;
      }
    `
  ];

  // @property({type: String})
  // src;

  // @state()
  // loader = new GLTFLoader();

  // @state()
  // scene = new Scene();

  // @state()
  // camera;

  // @state()
  // renderer = new WebGLRenderer({ alpha: true });

  // @state()
  // dracoLoader = new DRACOLoader();

  // @state()
  // clock = new Clock();

  // @state()
  // mixer;

  // myLoad(event){
  //   const sceneSym = Object.getOwnPropertySymbols(this).find(x => x.description === "threeScene");
  //   console.log("🚀 ~ file: sf-model.ts:20 ~ SfModel", this.model, Object.getOwnPropertySymbols(this), sceneSym)

  //   sceneSym.traverse(n => {
  //     if (n.isLight) {
  //       n.castShadow = true // why I have to re-enable this?
  //     }
  //   })
  // }
  // connectedCallback() {
  //   super.connectedCallback()
  //   this.dracoLoader.setDecoderConfig({ type: 'wasam' });
  //   this.dracoLoader.setDecoderPath('/draco/');
  //   this.dracoLoader.preload();
  //   const ComputedSize = this.getBoundingClientRect()
  //   this.renderer.setSize(ComputedSize.width, ComputedSize.height);
  //   this.shadowRoot.appendChild(this.renderer.domElement);

  //   const scene = {};
  //   const camera = {};

  //   this.loader.setDRACOLoader(this.dracoLoader);
  //   this.loader.load(
  //     // resource URL
  //     this.src,
  //     // called when the resource is loaded
  //     (gltf) => {

  //       this.camera = gltf.cameras[0];
  //       // this.renderer.render(this.scene, this.camera);
  //       gltf.scene.traverse(function (obj) {
  //         if (obj.isLight) {
  //           obj.shadow.camera.near = 0.001;
  //           obj.shadow.camera.updateProjectionMatrix();
  //         } else if (obj.isMesh) {
  //           obj.castShadow = true
  //           obj.receiveShadow = true
  //         }
  //       })
  //       console.log("🚀 ~ file: sf-model.ts:85 ~ SfModel ~ connectedCallback ~ gltf.scene", gltf.scene)
  //       this.mixer = new AnimationMixer(gltf.scene);
  //       this.mixer.clipAction(gltf.animations[0]).play();
  //       this.scene.add(gltf.scene);

  //       // gltf.animations; // Array<THREE.AnimationClip>
  //       // gltf.scene; // THREE.Group
  //       // gltf.scenes; // Array<THREE.Group>
  //       // gltf.cameras; // Array<THREE.Camera>
  //       // gltf.asset; // Object

  //       // console.log("🚀 ~ file: sf-model.ts:76 ~ SfModel  ~ gltf.animations", gltf);
  //       this.myAnimate();
  //     },
  //     // called while loading is progressing
  //     (xhr) => {

  //       console.log((xhr.loaded / xhr.total * 100) + '% loaded');

  //     },
  //     // called when loading has errors
  //     (error) => {

  //       console.log('An error happened', error);

  //     }
  //   );

  // }

  // myAnimate(){
  //   if (this.mixer) this.mixer.update(this.clock.getDelta());
  //   requestAnimationFrame(()=>{this.myAnimate()});
  //   this.render();

  // }

  // render(){
  //   this.renderer.render(this.scene, this.camera);
  // }

  render(){
    return html`
      <video autoplay mute loop src="${videoSrc}">
    `;
  }

  // constructor(){
  //   super();
  // }
}