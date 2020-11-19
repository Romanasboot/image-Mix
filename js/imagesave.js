


document.querySelector('#btnSave').onclick=function(){
    let imagesAll=document.querySelectorAll('img');
    for (let i = 0; i < imagesAll.length; i++) {
        const galerySrc = imagesAll[i].src;
        
    }
    console.log(imagesAll);

    let galeryAll = JSON.stringify(imagesAll);
    console.log(galeryAll);


    galerySaved=localStorage.setItem('galeryList', galeryAll);

    console.log(galeryList);




}




var images = document.querySelectorAll(".theimage");
 
for (var i = 0; i < images.length; i++) {
    var image = images[i];
    alert(image.getAttribute(src));
}