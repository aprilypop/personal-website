let imageContainer = $('#image-container');
var imageDataArray = imageContainer.data("order").split(" ");
let locationArray = location.pathname.split('/');
let parentName = locationArray.slice(-2)[0] || locationArray.slice(-3)[0];
let inserted_html;
let vClass = '';

for(let i in imageDataArray){
    if (['jpgvertical','pngvertical','webpvertical', 'mp4vertical','movvertical'].includes(imageDataArray[i])) {
        vClass = 'class="vertical"'
        imageDataArray[i]=imageDataArray[i].slice(0,-8);
    } else {vClass='';}
    if (['jpg','png','webp'].includes(imageDataArray[i])) {
        inserted_html = '<img loading="lazy" '+vClass+' src="'+parentName+'-'+i+'.'+imageDataArray[i]+'" />';
    } else if (['mp4','mov'].includes(imageDataArray[i])) {
        inserted_html = '<video '+vClass+' autoplay muted loop>'+'<source src="'+parentName+'-'+i+'.'+imageDataArray[i]+'" type="video/'+imageDataArray[i]+'"> Your browser does not support the video tag. </video>';
    } else if (['txt'].includes(imageDataArray[i])) {
        inserted_html='<p class="ic-text" id="'+imageDataArray[i]+i+'"></p>';
        fetch(parentName+'-'+i+'.'+imageDataArray[i])
            .then((res) => res.text())
            .then(text => {
                /*inserted_html = '<p class="ic-text">'+text+'</p>'
                imageContainer[0].insertAdjacentHTML('beforeend',inserted_html);*/
                $('#'+imageDataArray[i]+i)[0].innerText=text;
            })
            .catch((e) => console.error(e));
    }
    imageContainer[0].insertAdjacentHTML('beforeend',inserted_html);
}