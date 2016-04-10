function getURL (){

    var parts = document.getElementById("cantidad");
    var name = document.getElementById("name");
    var results = document.getElementById("url-results");

    if (results.style.display == 'none') {
             results.style.display = '';
             history.pushState("", document.title, window.location.pathname);
             window.location.hash = '#url-results';
    }
    else {
             results.style.display = 'none';
             history.pushState("", document.title, window.location.pathname);
             window.location.hash = '#submit-btn'

    }

}
