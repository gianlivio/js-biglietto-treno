// richiesta numero di chilometri

let quantiKm = prompt("km:"); 
// km da stringa a numero
quantiKm = parseInt(quantiKm);//string
console.log(quantiKm, typeof quantiKm);

// richiesta età

let etàPass = prompt("età:"); //string
etàPass = parseInt(etàPass);
console.log(etàPass, typeof etàPass);

// prezzo del viaggio

let prezzoViaggio = quantiKm * 0.21;
console.log("tariffa intera: " + prezzoViaggio.toFixed(2) + "€")


// if/else

if(etàPass<18){
    let sconto20 = prezzoViaggio * 0.2; // variabile sconto, per mostrare la somma scontata
    console.log("-20%: " + sconto20.toFixed(2)); 
    prezzoViaggio = prezzoViaggio-sconto20;
      
} else if(etàPass>65){
    let sconto40 = prezzoViaggio * 0.4;
    console.log("-40%: " + sconto40.toFixed(2)); 
    prezzoViaggio = prezzoViaggio-sconto40;
} else{
    prezzoViaggio = prezzoViaggio;
    console.log(prezzoViaggio);
}

// OUTPUT

console.log("tot: " + prezzoViaggio.toFixed(2) + "€");