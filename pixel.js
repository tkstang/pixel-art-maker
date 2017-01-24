let cssColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen","Black"];

let brushColor = "#F2F2F2";
document.body.style.backgroundColor = "#cccccc";

let container = document.createElement('div');
container.style.display = "block";
container.style.backgroundColor = "#e0e0e0";
container.style.border = "1px";
container.style.borderStyle = "solid";
container.style.borderRadius = "15px";
container.style.borderColor = "#999999";
container.style.float = "top";
container.style.marginRight = "auto";
container.style.marginLeft = "auto";
container.style.marginTop = "30px";
container.style.marginBottom = "0px";
container.style.paddingTop = "0px";
container.style.height = "860px";
container.style.width = "700px";

document.body.append(container)

let title = document.createElement('div');
title.innerText = "Pixel Art Maker";
title.style.fontSize = "54px";
title.style.color = "#999999";
title.style.fontWeight = "bold";
title.style.fontVariant = "small-caps";
title.style.textAlign = "center";
title.style.display = "block";
title.style.position = "absolute";
title.style.top = "50px";
title.style.left = "25%";
title.style.right = "25%";
title.style.marginRight = "auto";
title.style.marginLeft = "auto";
title.style.marginTop = "0px";
title.style.height = "60px";
title.style.width = "450px";

container.append(title)

let instructions = document.createElement('div');
instructions.innerText = "Click a Color to Select - Double Click on Canvas to Deselect";
instructions.style.fontSize = "14px";
instructions.style.color = "#999999";
instructions.style.fontWeight = "bold";
instructions.style.fontVariant = "small-caps";
instructions.style.textAlign = "center";
instructions.style.display = "block";
instructions.style.position = "absolute";
instructions.style.top = "865px";
instructions.style.left = "25%";
instructions.style.right = "25%";
instructions.style.marginRight = "auto";
instructions.style.marginLeft = "auto";
instructions.style.marginTop = "0px";
instructions.style.height = "60px";
instructions.style.width = "450px";

container.append(instructions)

let canvas = document.createElement('div');
canvas.style.display = "block";
canvas.style.backgroundColor = "#f2f2f2";
canvas.style.border = "1px";
canvas.style.borderStyle = "solid";
canvas.style.borderColor = "#c0c0c0";
canvas.style.float = "top";
canvas.style.marginRight = "auto";
canvas.style.marginLeft = "auto";
canvas.style.marginTop = "100px";
canvas.style.marginBottom = "0px";
canvas.style.height = "595px";
canvas.style.width = "595px";

container.append(canvas)

let clicked = false;

for (var i = 0; i < 1225; i++){
  let pixel = document.createElement('div');
  pixel.style.border = "1px";
  pixel.style.float = "left";
  pixel.style.borderStyle = "solid";
  pixel.style.borderColor = "#e8e8e8";
  pixel.style.height = "15px";
  pixel.style.width = "15px";
  pixel.style.display = "block";
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

let palette = document.createElement('div');
palette.style.display = "block";
palette.style.position = "absolute";
palette.style.top = "750px";
palette.style.left = "25%";
palette.style.right = "25%";
palette.style.marginRight = "auto";
palette.style.marginLeft = "auto";
palette.style.marginTop = "2px";
palette.style.height = "148px";
palette.style.width = "450px";


for (var j = 0; j < 148; j++) {
  let paint = document.createElement('div');
  let currColor = cssColors[j];
  paint.style.borderRadius = "50%";
  paint.style.border = "1px";
  paint.style.borderStyle = "solid";
  paint.style.borderColor = "#999999";
  paint.style.float = "left";
  paint.style.backgroundColor = cssColors[j];
  paint.style.height = "16px";
  paint.style.width = "16px";
  paint.style.display = "block";
  paint.setAttribute("id", `paint{j}`);
  paint.addEventListener("click", function() {
  brushColor = currColor;
  });
palette.append(paint)
}

document.body.append(palette)
