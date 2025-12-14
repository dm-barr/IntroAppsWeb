const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

ctx.font = "40px Arial";
ctx.fillStyle = "black";

ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 6;
ctx.shadowColor = "gray";

ctx.fillText("Canvas HTML5", 50, 100);
