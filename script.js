let personal = true;
let pButton = document.getElementById("personal");
let ipButton = document.getElementById("professional");
let colWidth = (document.body.clientWidth-(16*7))/6;
var r = document.querySelector(':root');
r.style.setProperty('--column-width', colWidth+'px');

function personalToggle (){
    if (personal) {
        //document.body.style="font-family:Josef Rounded";

        pButton.style="text-decoration:underline";
        pButton.style="opacity:100%";

        ipButton.style="text-decoration:none";
        ipButton.style="opacity:40%";

        personal=!personal;
    } else {
        //document.body.style="font-family:sans-serif";

        pButton.style="text-decoration:none";
        pButton.style="opacity:40%";

        ipButton.style="text-decoration:underline";
        ipButton.style="opacity:100%";

        personal=!personal;
    }
}

function windowResized(){
    colWidth = (document.body.clientWidth-(16*7))/6;
    r.style.setProperty('--column-width', colWidth+'px');
}

//personalToggle ();

// function to let hover image follow mouse
var mouseX;
var mouseY;
$(document).mousemove( function(e) {
    mouseX = e.pageX; 
    mouseY = e.pageY;
    $('.hide').css({'top':(mouseY-200),'left':mouseX});
});  
/*
$(".classForHoverEffect").mouseover(function(){
  $('#DivToShow').css({'top':mouseY,'left':mouseX}).fadeIn('slow');
});*/