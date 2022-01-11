canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="red";
width_of_line=3;
ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.rect(150,143,430,200);
ctx.lineWidth= 4;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.arc(250,210,40,0,2*Math.PI);
ctx.lineWidth= 5;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(350,210,40,0,2*Math.PI);
ctx.lineWidth= 5;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(450,210,40,0,2*Math.PI);
ctx.lineWidth= 5;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.arc(300,250,40,0,2*Math.PI);
ctx.lineWidth= 5;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(400,250,40,0,2*Math.PI);
ctx.lineWidth= 5;
ctx.stroke();




    
    