window.onload = writeMessage;
function writeMessage() {
	document.getElementById("helloMessage").innerHTML = "Hello world!";
}

var ans = prompt("are you sure you want to do that","");

if (ans) {
	alert("you said " + ans);
}
else {
	alert("you refuse");
}