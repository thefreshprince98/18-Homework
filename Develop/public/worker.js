const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/index.js",
    "/db.js",
    "/style.css"];

    const CACHE_NAME = 'static-cache-v13';
    const DATA_CACHE_NAME = 'data-cache-v8';

    //Install 
    self.addEventListener('install', evt => {
        evt.waitUntil(
            caches.open(CACHE_NAME).then(cache =>{
                console.log('Your files were pre-cached successfully');
                return cache.addAll(FILES_TO_CACHE);
            })
        );
        self.skipWaiting();
    });