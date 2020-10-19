var cognomi = ['divincenzo', 'tarantino', 'deleonardis', 'losacco', 'rossi', 'stasolla'];
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
