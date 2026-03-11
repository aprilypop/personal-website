let personal = true;
let pButton = document.getElementById("personal");
let ipButton = document.getElementById("professional");
let colWidth = (document.body.clientWidth-(16*7))/6;
var r = document.querySelector(':root');
let colourHL = $(".colour-hl");
let siteColour = ['#FF4500','#FFC300','#51DA4C','#00E8FC','#1F41FF','#FF36AD'];

r.style.setProperty('--column-width', colWidth+'px');

/*
function setTextStrokeRandom () {
    let i = Math.floor(Math.random() * siteColour.length);
    r.style.setProperty('--colour-hl', siteColour[i]);
    if (i==0 || i==4 || i==5) {
        r.style.setProperty('--colour-text', '#f5f5f5');
    } else {
        r.style.setProperty('--colour-text', '#black');
    }
}

colourHL.hover(function() {
  setTextStrokeRandom();
}, function() {
  //mouse off the item
});
*/

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
let mouseX2;
let mouseY2;
let imgHeightDig;

$(document).mousemove( function(e) {
    mouseX2 = e.pageX; 
    mouseY2 = e.pageY;
    $('.hide').css({'top':(mouseY2-imgHeightDig),'left':mouseX2});
});  
$('.project-link').hover(function() {
    imgHeightDig = this.nextElementSibling.height;
}, function() {
  //mouse off the item
});