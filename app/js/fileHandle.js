var shell = require('shelljs');

function makepage(num, name) {
    var path = "/var/www/hackturabo2016/app" + num + "-" + name + ".html";
    mkdir('p', path);

    echo('/var/www/hackturabo2016/app/.placeHolder.html').to(path);

}
