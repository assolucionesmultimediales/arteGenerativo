let circulosActive = false;
let lineasActive = false;
let fondo = '#422251';
let primaryColor = '#f37299';
let secondaryColor = '#fde4c5';
let tertiaryColor = '#81d0b1';
let quaternaryColor = '#e0bb36';
let colores = [primaryColor, secondaryColor, tertiaryColor, quaternaryColor];

let btnIniciarCirculos, btnDetenerCirculos, btnIniciarLineas, btnDetenerLineas, btnGuardarCanvas;
let buttonContainer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(fondo);
  
  // Crear un contenedor para los botones, ubicado en la parte superior con mayor margen izquierdo.
  buttonContainer = createDiv('');
  buttonContainer.style('position', 'absolute');
  buttonContainer.style('top', '50px');       // Mayor margen superior
  buttonContainer.style('left', '50px');      // Mayor margen izquierdo
  buttonContainer.style('display', 'flex');
  buttonContainer.style('flex-direction', 'column'); // Uno abajo del otro
  buttonContainer.style('gap', '10px');              // Espacio entre botones
  
  // Botón para iniciar los círculos
  btnIniciarCirculos = createButton('Iniciar Círculos');
  btnIniciarCirculos.parent(buttonContainer);
  btnIniciarCirculos.mousePressed(iniciarCirculos);
  styleButton(btnIniciarCirculos, primaryColor);
  
  // Botón para detener los círculos
  btnDetenerCirculos = createButton('Detener Círculos');
  btnDetenerCirculos.parent(buttonContainer);
  btnDetenerCirculos.mousePressed(detenerCirculos);
  styleButton(btnDetenerCirculos, secondaryColor);
  
  // Botón para iniciar las líneas
  btnIniciarLineas = createButton('Iniciar Líneas');
  btnIniciarLineas.parent(buttonContainer);
  btnIniciarLineas.mousePressed(iniciarLineas);
  styleButton(btnIniciarLineas, tertiaryColor);
  
  // Botón para detener las líneas
  btnDetenerLineas = createButton('Detener Líneas');
  btnDetenerLineas.parent(buttonContainer);
  btnDetenerLineas.mousePressed(detenerLineas);
  styleButton(btnDetenerLineas, quaternaryColor);
  
  // Botón para guardar el canvas
  btnGuardarCanvas = createButton('Guardar Canvas');
  btnGuardarCanvas.parent(buttonContainer);
  btnGuardarCanvas.mousePressed(guardarCanvas);
  styleButton(btnGuardarCanvas, primaryColor);
}

function draw() {
  if (circulosActive) {
    drawCirculos();
  }
  if (lineasActive) {
    drawLineas();
  }
}

function drawCirculos() {
  push();
  blendMode(HARD_LIGHT);
  noStroke();
  fill(random(colores));
  let diam = random(50, 150);
  circle(random(width), random(height), diam);
  pop();
}

function drawLineas() {
  push();
  stroke(tertiaryColor);
  strokeWeight(2);
  line(random(width / 8), 0, random(width / 4), height);
  stroke(quaternaryColor);
  line(random(width / 6), 0, random(width), height);
  pop();
}

function iniciarCirculos() {
  circulosActive = true;
}

function detenerCirculos() {
  circulosActive = false;
}

function iniciarLineas() {
  lineasActive = true;
}

function detenerLineas() {
  lineasActive = false;
}

function guardarCanvas() {
  saveCanvas('miCanvas_' + year() + '-' + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second(), 'png');
}

function styleButton(btn, bgColor) {
  // Aplica estilos: fondo según la paleta, fuente más grande, bordes redondeados y mayor padding.
  btn.style('background-color', bgColor);
  btn.style('color', fondo);
  btn.style('font-size', '18px');
  btn.style('border', 'none');
  btn.style('border-radius', '15px');
  btn.style('padding', '10px 20px');
  btn.style('cursor', 'pointer');
}
