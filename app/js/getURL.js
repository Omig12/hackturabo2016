function getURL (){

    var parts = document.getElementById("cantidad");
    var name = document.getElementById("name");
    var results = document.getElementById("url-results");
    var text = 'https://qonsensus.website/' + parts + '-' + name;

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

    var dotsize = 5;  // size of box drawn on canvas
  var padding = 10; // (white area around your QRCode)
  var black = "rgb(0,0,0)";
  var white = "rgb(255,255,255)";
  var QRCodeVersion = 15; // 1-40 see http://www.denso-wave.com/qrcode/qrgene2-e.html

    var canvas=document.createElement('canvas');
    var qrCanvasContext = canvas.getContext('2d');
  try {
    // QR Code Error Correction Capability
    // Higher levels improves error correction capability while decreasing the amount of data QR Code size.
    // QRErrorCorrectLevel.L (5%) QRErrorCorrectLevel.M (15%) QRErrorCorrectLevel.Q (25%) QRErrorCorrectLevel.H (30%)
    // eg. L can survive approx 5% damage...etc.
    var qr = new QRCode(QRCodeVersion, QRErrorCorrectLevel.L);
    qr.addData(text);
    qr.make();
   }
  catch(err) {
        var errorChild = document.createElement("p");
    var errorMSG = document.createTextNode("QR Code FAIL! " + err);
    errorChild.appendChild(errorMSG);
    return errorChild;
  }

  var qrsize = qr.getModuleCount();
    canvas.setAttribute('height',(qrsize * dotsize) + padding);
    canvas.setAttribute('width',(qrsize * dotsize) + padding);
    var shiftForPadding = padding/2;
    if (canvas.getContext){
        for (var r = 0; r < qrsize; r++) {
            for (var c = 0; c < qrsize; c++) {
                if (qr.isDark(r, c))
                    qrCanvasContext.fillStyle = black;
                else
                    qrCanvasContext.fillStyle = white;
                qrCanvasContext.fillRect ((c*dotsize) +shiftForPadding,(r*dotsize) + shiftForPadding,dotsize,dotsize);   // x, y, w, h
            }
        }
    }

    var imgElement = document.createElement("img");
    imgElement.src = canvas.toDataURL("image/png");

    return imgElement;

    makepage(parts, name);

}
