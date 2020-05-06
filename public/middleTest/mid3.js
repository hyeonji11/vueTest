let a1 = [];

for(let i=0; i<5; i=i+2) {
    a1[i/2] = [i, i+1];
}

let a2 = [];

let clone = (e) => {
    a2.push(e.slice(0));
    return true;
}
a1.every(clone);

a1[0][0] = 100;
console.log(a1);
console.log(a2);