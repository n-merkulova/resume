import { Resize } from "./Resize";

let resize: Resize;

const initResize = () => {
  resize = new Resize({ fitOnResize: true });
};

export { resize, initResize };
