import * as PIXI from "pixi.js";
import React from "react";
import { PixiCanvasHandler } from "../pixiCanvasHandler";

type Props = { handler: PixiCanvasHandler};
export default class PixiCanvas extends React.Component<Props> {
    pixi_cnt?: HTMLDivElement;
    app: PIXI.Application;
    handler: PixiCanvasHandler;
    constructor(props: Props) {
        super(props);
        this.app = props.handler.app;
        this.handler = props.handler;
    }
    
    updatePixiCnt = (element: HTMLDivElement) => {
        this.pixi_cnt = element;
        this.app.resizeTo = element;
        this.handler.updateElement(element);

        if (this.pixi_cnt && this.pixi_cnt.children.length <= 0) {
            this.pixi_cnt.appendChild(this.app.canvas as HTMLCanvasElement);
            this.handler.setup();
        }
    };

    render() {
        return (
            <div style={{width: '100%', height: '100%'}} ref={this.updatePixiCnt} />
        );
    }
}

