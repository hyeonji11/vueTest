let num = [];


for(let i=0; i<100; i++) {
    num[i] = Math.floor(Math.random()*100 +1);
    //console.log(num[i]);
}

let num2 = num.filter((e) => {
    let a = [5, 6, 7, 8, 9];
    let n = e % 10;

        if(n == a[0]) {return false;}
        else if(n == a[1]) {return false;}
        else if(n == a[2]) {return false;}
        else if(n == a[3]) {return false;}
        else if(n == a[4]) {return false;}
        else {return true;}
    
});

console.log(num2);
