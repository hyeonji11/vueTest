let num = [];

for(let i=0; i<100; i++) {
    num[i] = Math.floor(Math.random()*100 +1);
    //console.log(num[i]);
}

function callback(a, b, i) {
    if(i == 1) {
        if(a%2 == 0) {
            a = 1;
        } else {
            a = 0;
        }
    }
    if(b%2 == 0) {
        b = a+1;
        return b;
    } else {
        return a;
    }
}

console.log(num.reduce(callback));