let pazadas = new Promise(function (resolve, reject) {
let kompokaina = 2000;
 let santaupos = 1000;
    if (santaupos>kompokaina) {
        resolve ({
            brand: "MacBook",
            model: "Pro"
        });
        
    } else {
        reject ("Nepakanka pinigu reikia sutaupyti");
    }
    
}); pazadas.then(function(value)) {
    console.log("Pagaliau")
}