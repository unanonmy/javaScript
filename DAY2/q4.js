let v = [];

let n = prompt("enter the no.of array elements you want(length):");
while (n > 0) {
    let e = prompt("enter element:");
    v.push(e);
    n--;
}
console.log(`the array elements that contains "a" are :`)
v.forEach(function(e)
{
for(let i=0;i<e.length;i++)
{
    if(e[i]=="a")
    {
        console.log(e);
    }
}
})