
// 在画布上绘制表情
function generateSticker () {
    
    var theCanvas = document.getElementById("stickerWord"); 
        
	//计算文字长度   
    var theText = document.getElementById("inputBox").value;

    var textSize = document.getElementById("getTextSize");
    textSize.style="white-space: pre;";
    textSize.innerHTML = theText;

    // 确定画布尺寸
    theCanvas.width = 50+textSize.clientWidth;
    theCanvas.height = 120;

    var textBlock = theCanvas.getContext("2d");
    
    // 绘制圆角矩形背景
    textBlock.fillStyle="#000000";  //背景色
    textBlock.fillRect(0,0,theCanvas.width, theCanvas.height);
    fillRoundRect(textBlock, 0, 0, theCanvas.width, 60, 30, "#FFFFFF");
    
    // 组合方式
    textBlock.globalCompositeOperation = "source-over";
    
    // 写文字
    textBlock.font = "32px Pingfang";
    textBlock.fillStyle = '#010101';
    textBlock.fillText(theText, 25, 40);

    // canvas直接转gif
    var encoder = new GIFEncoder();
    encoder.start();
    encoder.setTransparent(0x0000000);   //抠掉的颜色
    encoder.addFrame(textBlock);

    encoder.finish();

    document.getElementById('gifImg').src = 'data:image/gif;base64,'+encode64(encoder.stream().getData())

    document.getElementById("useInstruction").style.display = "block";

}



function fillRoundRect(cxt,x,y,width,height,radius,/*optional*/fillColor){  
    //圆的直径必然要小于矩形的宽高          
    if(2*radius>width || 2*radius>height){return false;}  
      
    cxt.save();  
    cxt.translate(x,y);  
    //绘制圆角矩形的各个边  
    drawRoundRectPath(cxt,width,height,radius);  
    cxt.fillStyle=fillColor||"#000";//若是给定了值就用给定的值否则给予默认值  
    cxt.fill();  
    cxt.restore();  
}  
  
  
/**该方法用来绘制圆角矩形 
*@param cxt:canvas的上下文环境 
*@param x:左上角x轴坐标 
*@param y:左上角y轴坐标 
*@param width:矩形的宽度 
*@param height:矩形的高度 
*@param radius:圆的半径 
*@param lineWidth:线条粗细 
*@param strokeColor:线条颜色 
**/  
function strokeRoundRect(cxt,x,y,width,height,radius,/*optional*/lineWidth,/*optional*/strokeColor){  
    //圆的直径必然要小于矩形的宽高          
    if(2*radius>width || 2*radius>height){return false;}  
      
    cxt.save();  
    cxt.translate(x,y);  
    //绘制圆角矩形的各个边  
    drawRoundRectPath(cxt,width,height,radius);  
    cxt.lineWidth = lineWidth||2;//若是给定了值就用给定的值否则给予默认值2  
    cxt.strokeStyle=strokeColor||"#000";  
    cxt.stroke();  
    cxt.restore();  
}  
  
function drawRoundRectPath(cxt,width,height,radius){  
    cxt.beginPath(0);  
    //从右下角顺时针绘制，弧度从0到1/2PI  
    cxt.arc(width-radius,height-radius,radius,0,Math.PI/2);  
  
    //矩形下边线  
    cxt.lineTo(radius,height);  
  
    //左下角圆弧，弧度从1/2PI到PI  
    cxt.arc(radius,height-radius,radius,Math.PI/2,Math.PI);  
  
    //矩形左边线  
    cxt.lineTo(0,radius);  
  
    //左上角圆弧，弧度从PI到3/2PI  
    cxt.arc(radius,radius,radius,Math.PI,Math.PI*3/2);  
  
    //上边线  
    cxt.lineTo(width-radius,0);  
  
    //右上角圆弧  
    cxt.arc(width-radius,radius,radius,Math.PI*3/2,Math.PI*2);  
  
    //右边线  
    cxt.lineTo(width,height-radius);  
    cxt.closePath();  
}  




















