let v = [];

let n = prompt("enter the no.of array elements you want(length):");
while (n > 0) {
    let e = prompt("enter element:");
    v.push(e);
    n--;
}
v.reverse();
console.log("The array elements in reverse order are :")
v.forEach(function (e) {
    console.log(e); 
})