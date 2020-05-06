let a = [ "hello.html", "world.js", "readme.txt"];

let getExtension = (fileName) => {
    let start = fileName.indexOf(".");
    return console.log(fileName.slice(start));
}

a.forEach(getExtension);