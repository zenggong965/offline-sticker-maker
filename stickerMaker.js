// 在画布上绘制背景图片
	var c2=document.getElementById("stickerWord");
	var cxt2=c2.getContext("2d");
	var img2 = new Image();
	img2.src="images/stickerBg.png";
	cxt2.drawImage(img2,0,0);

	// 获取画布
    function getCanvas(id) {
        return document.getElementById(id);
    }
    
	// 在画布上写文字
    function writeText() {
        var theText = document.getElementById("inputBox").value;
        var theCanvas = getCanvas('stickerWord');
        var textBlock = theCanvas.getContext('2d');
        
		//计算文字长度，改变画布宽度
        theCanvas.width = 60*theText.length
        
        textBlock.font = 'bold 100px Yuanti SC';
        textBlock.fillStyle = '#000000';
        textBlock.fillText(theText, 0, 130);
    }

	// 清空画布
    function clearCanvas () {
    	var theCanvas = getCanvas('stickerWord');
    	var textBlock = theCanvas.getContext('2d');
    	textBlock.clearRect(0, 10, theCanvas.width, 160);
    }

    // 画布转图片base64编码
    function convertCanvasToImage(canvas) {
		var image = new Image();
		image.src = canvas.toDataURL("image/png");
		return image;
	}
	

	// 生成图片，插入节点
	function generateImg () {
			
		clearCanvas();
	 		
	 	writeText(); 

	 	var imgCanvas = convertCanvasToImage(stickerWord);

		var stickerImageBlock = document.getElementById('stickerImageBlock');

		var stickerImageBlockImg = document.createElement('img');

		stickerImageBlockImg.src = imgCanvas.src;
			
		var existedSticker=document.getElementById("stickerImageBlock")
			
		existedSticker.insertBefore(stickerImageBlockImg,existedSticker.childNodes[2]);

		var useInstruction = document.getElementById("useInstruction");
			
		useInstruction.style.display = "inline";

	}

	// 把canvas转成gif




	// 输入的时候改变输入框的宽度
	function changeWidth () {
		var inputValue=document.getElementById("inputBox").value;
		var inputElement=document.getElementById("inputBox");
		var widthWhileInput=inputValue.length*60;
		inputElement.style.width=widthWhileInput + "px";
	}

	// 测试函数，弹框
	function testAlertFunc () {
		alert("hello");
	}