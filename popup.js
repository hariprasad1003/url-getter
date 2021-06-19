// console.log("Ready!")

document.getElementById("get_url_button").addEventListener("click", get_url);

function get_url(){

    let url;

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        url = tabs[0].url;
        // console.log(url);    
    });

    chrome.storage.local.set({key: url}, function() {
        console.log('URL is stored ' + url);
    });
}

document.getElementById("get_all_stored_urls").addEventListener("click", get_all_stored_urls);

function get_all_stored_urls(){
    chrome.storage.local.get(['key'], function(result) {
        // var all_urls = Object.keys();
        console.log(result.key);
        // console.log(all_urls);
    });
}

