function setToBiggerSize() {
    document.getElementById("input-area").style.fontSize = "24pt";
}

function updateTextStyle() {
	var inputArea = document.getElementById("input-area");
	if (document.getElementById("fancy").checked) {
		inputArea.style.fontWeight = "bold";
		inputArea.style.color = "blue";
		inputArea.style.textDecoration = "underline";
	} else {
		inputArea.style.fontWeight = "normal";
		inputArea.style.color = "black";
		inputArea.style.textDecoration = "none";
	}
}

function moo() {
    var textArea = document.getElementById("input-area");
	var text = textArea.value.toUpperCase();
	textArea.value = text.split(".").join("-Moo.");
}