let num = [];

for(let i=0; i<100; i++) {
    num[i] = Math.floor(Math.random()*100 +1);
    //console.log(num[i]);
}
num.sort();
console.log(num);