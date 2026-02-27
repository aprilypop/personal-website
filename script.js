let personal = true;
let pButton = document.getElementById("personal");
let ipButton = document.getElementById("professional");
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

//personalToggle ();