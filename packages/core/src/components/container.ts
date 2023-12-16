import { SVG, Svg } from "@svgdotjs/svg.js";

interface IContainer {
  draw: Svg;
}

interface IContainerConstructor {
  element: string;
  height?: number;
  width?: number;
}

export class Container implements IContainer {
  public draw: Svg;

  constructor({ element, height = 1190, width = 1684 }: IContainerConstructor) {
    const dom = document.querySelector(element) as HTMLElement;
    if (!dom) {
      throw new Error("Target element not found");
    }

    this.draw = SVG().addTo(dom).size(width, height);
  }
}
