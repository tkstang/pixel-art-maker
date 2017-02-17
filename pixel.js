let cssColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen","Black"];

let clicked = false;
let brushColor = "#F2F2F2";
document.body.style.backgroundColor = "#cccccc";

let container = document.createElement('div');
container.className = "container";
document.body.append(container)

let title = document.createElement('div');
title.className = "title";
title.innerText = "Pixel Art Maker";
container.append(title)

let instructions = document.createElement('div');
instructions.className = "instructions";
instructions.innerText = "Click a Color to Select - Double Click on Canvas to Deselect";
container.append(instructions)

let canvas = document.createElement('div');
canvas.className = "canvas";
container.append(canvas)

let palette = document.createElement('div');
palette.className = "palette";

for (var i = 0; i < 1225; i++){
  let pixel = document.createElement('div');
  pixel.className = "pixel";
  pixel.setAttribute("id", `div${i}`);
  pixel.addEventListener("click", function() {
    this.style.backgroundColor = brushColor;
    clicked = true;
  });
  pixel.addEventListener("mouseenter", function() {
    if (clicked){
      this.style.backgroundColor = brushColor;
    }
  });
  pixel.addEventListener("dblclick", function() {
    clicked = false;
  });
canvas.append(pixel)
}

for (var j = 0; j < 148; j++) {
  let paint = document.createElement('div');
  let currColor = cssColors[j];
  paint.className = "paint";
  paint.style.backgroundColor = cssColors[j];
  paint.setAttribute("id", `paint{j}`);
  paint.addEventListener("click", function() {
  brushColor = currColor;
  });
palette.append(paint)
}

document.body.append(palette)
