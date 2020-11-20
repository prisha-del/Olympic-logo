var canvas = document.getElementById("myCanvas");
ctx =canvas.getContext("2d");
color ="blue";
circle(200,200);
ctx.stroke();

var canvas_2 = document.getElementById("myCanvas_2");
ctx =canvas.getContext("2d");
color ="yellow";
circle(250,250);
ctx.stroke();

var canvas_3 = document.getElementById("myCanvas_3");
ctx =canvas.getContext("2d");
color ="black";
circle(300,200);
ctx.stroke();

var canvas_4 = document.getElementById("myCanvas_4");
ctx =canvas.getContext("2d");
color = "green";
circle(350,250);
ctx.stroke();

var canvas_5 = document.getElementById("myCanvas_5");
ctx =canvas.getContext("2d");
color ="red";
circle(400,200);
ctx.stroke();


function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth =5;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();            
}
