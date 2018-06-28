var i = document.querySelector("#image")
var t = document.querySelector("#title")


document.getElementById("button01").addEventListener("click", function(){
	if (image.width <= 300) {
	    image.width += 300;
	    // alert("Cat stretched!");
	} else if (image.width >= 300) {
	    image.width -= 300;
	    // alert("Cat unstretched!");
	};
});