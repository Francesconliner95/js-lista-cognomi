var cognomi = ['Divincenzo', 'Tarantino', 'Deleonardis', 'Losacco', 'Rossi', 'Stasolla'];
var posizione;
var n=true;

do{
    var cognome = prompt('Inserisci il tuo cognome:');
    n=cognomi.includes(cognome);
    if(!isNaN(cognome)){
        alert('Inserisci solo caratteri!');
    }
    if(n==true){
        alert('Cognome già presente, inseriscine un altro!');
    }
}while(!isNaN(cognome) || n==true)

cognome=cognome.toLowerCase(); //Rendo tutta la stinga minuscola

cognome=cognome.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));   //Rende la prima lettera maiuscola

cognomi.push(cognome);

cognomi.sort();

console.log('Lista in ordine alfabetico:');
for(i=0; i<cognomi.length; i++){
    console.log(cognomi[i]);
    if(cognomi[i]==cognome){
        posizione=i+1;
    }
}

console.log('Il tuo cognome si trova nella posizione n: ' + (posizione));
alert('Il tuo cognome si trova nella posizione n: ' + (posizione));
