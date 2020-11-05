(function name(params) {
    let imx = new XMLHttpRequest();

    document.querySelector('#btnRodyti').onclick = function() {
        if (imx.readyState === 4) {
            let imgList = JSON.parse(imx.responseText);
            console.log(imgList)
            let newImages = document.querySelector('ul');
            for (let i= 0; i < imgList.length; i++) {
                let image = document.createElement('img')
                image.src = ('http://web-training.lt/img_api/img/' + imgList[i]);
                newImages.appendChild(image);
            }

        }

        document.querySelector('#btnRodyti').style.display='none';
    };
    imx.open('GET', 'http://web-training.lt/img_api/');
    imx.send();







    
})();