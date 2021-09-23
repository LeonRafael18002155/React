if("serviceWorker" in navigator){
    //registramos el service worker
    navigator.serviceWorker.register("./sw.js");
}