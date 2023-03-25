import debounce from "lodash.debounce";

export class Resize {
  readonly defaultMobileScreenSize = {
    width: 375,
    height: 812,
  };

  readonly defaultDesktopScreenSize = {
    width: 1440,
    height: 1024,
  };

  readonly defaultHtmlFontSize = 10;

  readonly minHtmlFontSize = 6;
  readonly maxHtmlFontSize = 10;

  readonly fitOnResize: boolean = false;

  portraitOrientation: boolean = false;

  currentScreenSize = {
    height: window.innerHeight,
    width: window.innerWidth,
  };

  currentHtmlFontSize: number | undefined;

  constructor({ fitOnResize = false }: { fitOnResize?: boolean }) {
    this.resize();

    this.fitOnResize = fitOnResize;

    if (this.fitOnResize) {
      window.addEventListener(
        "resize",
        // this.resize
        debounce(this.resize, undefined, { leading: true })
      );
    }
  }

  resize = () => {
    this.currentScreenSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    this.portraitOrientation = window.innerHeight > window.innerWidth;

    const defaultScreenSize = this.portraitOrientation
      ? this.defaultMobileScreenSize
      : this.defaultDesktopScreenSize;

    let scaleX = this.currentScreenSize.width / defaultScreenSize.width,
      scaleY = this.currentScreenSize.height / defaultScreenSize.height;

    if (scaleX * defaultScreenSize.height > this.currentScreenSize.height) {
      scaleX = this.currentScreenSize.height / defaultScreenSize.height;
    }

    if (scaleY * defaultScreenSize.width > this.currentScreenSize.width) {
      scaleY = this.currentScreenSize.width / defaultScreenSize.width;
    }

    const resultedFontSize = Math.round(
      Math.min(scaleX, scaleY) * this.defaultHtmlFontSize
    );

    this.currentHtmlFontSize = Math.min(
      Math.max(resultedFontSize, this.minHtmlFontSize),
      this.maxHtmlFontSize
    );

    document.documentElement.style.fontSize = `${this.currentHtmlFontSize}px`;
  };

  // remToPx = (rem: number): number => {
  //   return Math.round(rem * this.currentHtmlFontSize * 2) / 2;
  // };
}
