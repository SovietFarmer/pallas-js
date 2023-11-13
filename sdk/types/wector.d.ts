// @ts-nocheck
declare module "wector" {
  declare class Script {
    name: string;
    game: string;
    author: string;
    files: Array<string>;
    directory: string;
  }

  declare class Vec2 {
    constructor(x?: number, y?: number);

    x: number;
    y: number;

    distance(to: Vec2): number;
    distanceSq(to: Vec2): number;
  }

  declare class Vec3 {
    constructor(x?: number, y?: number, z?: number);

    x: number;
    y: number;
    z: number;

    distance(to: Vec3): number;
    distanceSq(to: Vec3): number;
  }

  declare class Vec4 {
    constructor(x?: number, y?: number, z?: number, w?: number);

    x: number;
    y: number;
    z: number;
    w: number;
  }

  function drawText(x1: number, y1: number, x2: number, y2: number, color?: number, thickness?: number): void;
  function drawLine(text: string, x: number, x: number, color?: number, thickness?: number): void;

  const gameName: String;
  const currentScript: Script;
}
