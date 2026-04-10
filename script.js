let personal = true;
let pButton = document.getElementById("personal");
let ipButton = document.getElementById("professional");
let colWidth = (document.body.clientWidth-(16*7))/6;
var r = document.querySelector(':root');
let colourHL = $(".colour-hl");
let siteColour = ['#FF4500','#FFC300','#51DA4C','#00E8FC','#1F41FF','#FF36AD'];
let linkCurrent;

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
    scrollOffset = $(document).scrollTop()
    mouseX2 = e.clientX;
    mouseY2 = e.clientY-imgHeightDig < 0 ? e.clientY : e.clientY-imgHeightDig;
    $('.hide').css({'top':(mouseY2),'left':mouseX2});
});  

$('#navbarstuffs').load('/navbarstuffs.html');
$('.award').load('/awards.html');
$('.right-bar').load('/right-bar.html');
$('.header-nav').load('/header-nav.html');

$(document).ready(function(){
    //alert("a[href*='" + location.pathname + "']");
    let tempObj = $("a[href='" + location.pathname + "']");
    tempObj.addClass("current-page");
    $(window).scroll(function() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollPosition === 0) {
            console.log("You are at the very top of the page.");
            $('.text-fade-toggle').removeClass('text-fade');
        } else {
            $('.text-fade-toggle').addClass('text-fade');
        }
        //$('.text-fade').css("opacity","20%")
        //console.log($('.text-fade'));
    });

    $('a[href=""]').addClass("link-empty");;

    var favLink = $("#favicon"),
        i = 0,
        changeFaviconRepeat = setInterval(changeFavicon, 250);
    
    function changeFavicon () {
        favLink.attr("href", "/favicons/ad-fav-"+i+".png")
        i++;
        if (i == 11) {
            i=0;
        }
    }
});
/*
$cont = $('#check-out');
parts = $.map($cont.text().split(''), function(v){
    return $('<span/>', {text:v});
});
$cont.empty().append(parts);

$(document).ready(function() {
	$('span').on('mouseover', function() {
  	console.log($(this).text() + ': ' + JSON.stringify($(this).offset()))
  })
})*/