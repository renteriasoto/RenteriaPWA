//Cargar Service Worker
if ('serviceWorker' in navigator) {
    console.log("Puedes usar el Service Worker");

    //Configuracion del SW
    navigator.serviceWorker.register('./sw.js')
        .then(res => console.log('SW cargado correctamente', res))
        .catch(err => console.log('service Worker no se ha podido registrar', err));
} else {
    console.log("No se puede usar el Service Worker")
}