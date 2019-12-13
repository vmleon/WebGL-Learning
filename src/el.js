export function getGLContext(id) {
  const canvas = document.getElementById(id);

  if (!canvas) {
    alert("HTML5 canvas not supported. Please, update your browser.");
    return;
  }
  return canvas.getContext("webgl2");
}

export function createRoot(id) {
  const root = document.createElement("div");
  root.appendChild(createCanvas(id, 800, 600));
  return root;
}

export function createCanvas(id, width, height) {
  const canvas = document.createElement("canvas");
  canvas.id = id;
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
