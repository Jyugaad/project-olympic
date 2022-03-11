canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle="gold";
ctx.lineWidth=5;
ctx.arc(210, 250, 40, 0, 2 *Math.PI);
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(260, 200, 40, 0, 2 *Math.PI);
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(310, 250, 40, 0, 2 *Math.PI);
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.stroke()
ctx.arc(360, 200, 40, 0, 2 *Math.PI);
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=5;
ctx.arc(410, 250, 40, 0, 2 *Math.PI);
ctx.stroke()