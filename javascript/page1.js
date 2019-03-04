window.onload=
    function (){
        var anav = document.getElementById("nav");
        var X = anav;
    window.onscroll = function(){
        var D = X.offsetTop;
        var S = document.body.scrollTop;
        if(S>D) {
            X.className = "fixposition";
        }else {
            X.className = "reposition";
        }
    }
}
//button clicked
function sub_bt() {
    change_color();
    var a = fill_check();
    if(a == true){
        alert("Your message has been sent!")
    }
}
//change bg color
function change_color () {
    var input = document.forms["contactform"]["field"];
        for(var i = 0; i < input.length; i++) {
            if(input[i].value == "") {
                input[i].classList.add("empty");
            }else if(input[i].value !== ""){
                input[i].classList.remove("empty");
            }
        }
}
//check all filled
function fill_check () {
    var form = document.getElementsByClassName("empty");
        if(form.length == 0) {
            return true;
        }else{
            return false;
        }
}
//onchange
function input_check(id) {
    var x = document.getElementById(id).value;
    
    if(x == ""){
        document.getElementById(id).classList.add("empty");
    }else{
        document.getElementById(id).classList.remove("empty");
    }
}
//azure video
var myOptions = {
	"nativeControlsForTouch": false,
	controls: true,
	autoplay: true,
}
myPlayer = amp("azuremediaplayer", myOptions);
myPlayer.src([
        {
                "src": "//trailer-aueas.streaming.media.azure.net/a641d201-9b58-45ff-ab3a-cebd05d75cf5/forwebsite.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);
