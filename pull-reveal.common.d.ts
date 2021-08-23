import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { GridLayout } from '@nativescript/core/ui/layouts/grid-layout';
import { PanGestureEventData } from "@nativescript/core/ui/gestures";
export declare class CommonWrapper extends GridLayout {
}
export declare class CommonContents extends StackLayout {
    private _isLoaded;
    private _didLayout;
    private wpwidth;
    private wpheight;
    private pwidth;
    private pheight;
    private hwidth;
    private hheight;
    private minylat;
    private maxylat;
    private ylat;
    private minxlat;
    private maxxlat;
    private xlat;
    private minHt;
    private dragspeed;
    private _anchor;
    private _exposed;
    private label;
    private pullLabel;
    private pullHandle;
    constructor();
    computeHeight(view: any): number;
    onPan(args: PanGestureEventData): void;
    recalcExtents(): void;
    enforceExtents(): void;
    calcExtents(): void;
    open(animTime: number): void;
    close(animTime?: number): void;
    anchor: string;
    exposed: number;
}
