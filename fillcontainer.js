let imageContainer = $('#image-container');
var imageDataArray = imageContainer.data("order").split(" ");
let locationArray = location.pathname.split('/');
let parentName = locationArray.slice(-2)[0] || locationArray.slice(-3)[0];
let inserted_html;

for(let i in imageDataArray){
    if (['jpg','png','webp'].includes(imageDataArray[i])) {
        inserted_html = '<img loading="lazy" src="'+parentName+'-'+i+'.'+imageDataArray[i]+'" />';
    } else if (['mp4','mov'].includes(imageDataArray[i])) {
        inserted_html = '<video autoplay muted loop>'+'<source src="'+parentName+'-'+i+'.'+imageDataArray[i]+'" type="video/'+imageDataArray[i]+'"> </video>';
    }
    imageContainer[0].insertAdjacentHTML('beforeend',inserted_html);
}