(function name(params) {
    let imx = new XMLHttpRequest();

    document.querySelector('#btnRodyti').onclick = function() {
        if (imx.readyState === 4) {
            if (imx.status === 200){ 
                let imgList = JSON.parse(imx.responseText);
                console.log(imgList)
                let newImages = document.querySelector('ul');
                for (let i= 0; i < imgList.length; i++) {
                    let imageLi = document.createElement('li');
                    let image = document.createElement('img')
                    image.src = ('http://web-training.lt/img_api/img/' + imgList[i]);
                    imageLi.appendChild(image);
                    newImages.appendChild(imageLi);
                    }
            }else{
                alert(imx.statusText);
            }

        }
        document.querySelector('#btnRodyti').style.display='none';
    }
    
    document.querySelector('#btnMix').onclick=function () {
        let gallery=document.querySelectorAll('img');
        console.log(gallery);
        let clear=document.querySelector('ul');
        clear.innerHTML = '';
        for (let i = 0; i < gallery.length; i++) {
            let j=Math.floor(Math.random()*i);
            let temp = gallery[i].src;
            gallery[i].src = gallery[j].src;
            gallery[j].src = temp;
        }
        console.log(gallery);
       
        let newImages=document.querySelector('ul');
        var g=gallery.length;
        while(g--){
            let image=document.createElement('img');
            image.src = gallery[g].src;
            newImages.appendChild(image);

        } 
    }
    imx.open('GET', 'http://web-training.lt/img_api/');
    imx.send();
    
})();