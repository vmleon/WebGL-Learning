import { getGLContext } from "./el";

function updateClearColor(gl) {
  return function(...color) {
    gl.clearColor(...color);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, 0, 0);
  };
}

function checkKey(gl) {
  return function(event) {
    switch (event.keyCode) {
      // number 1 => green
      case 49: {
        updateClearColor(gl)(0.2, 0.8, 0.2, 1.0);
        break;
      }
      // number 2 => blue
      case 50: {
        updateClearColor(gl)(0.2, 0.2, 0.8, 1.0);
        break;
      }
      // number 3 => random color
      case 51: {
        updateClearColor(gl)(Math.random(), Math.random(), Math.random(), 1.0);
        break;
      }
      // number 4 => get color
      case 52: {
        const color = gl.getParameter(gl.COLOR_CLEAR_VALUE);
        alert(`clearColor = (
                ${color[0].toFixed(1)},
                ${color[1].toFixed(1)},
                ${color[2].toFixed(1)}
              )`);
        window.focus();
        break;
      }
    }
  };
}

export default function app(canvasId) {
  return () => {
    let gl = getGLContext(canvasId);
    window.onkeydown = checkKey(gl);
  };
}
