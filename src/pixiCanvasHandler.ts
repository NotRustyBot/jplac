import { Application } from "pixi.js";

export class PixiCanvasHandler {
    app: Application;
    element?: HTMLDivElement;

    constructor() {
        this.app = new Application();
    }

    async precook() {
        await this.app.init({ backgroundColor: 0x1099bb });
    }

    updateElement(element: HTMLDivElement) {
        this.element = element;
    }

    setup() {
    }

}