let v = [];
let ch = prompt("enter the element you want to search:");
let n = prompt("enter the no.of array elements you want(length):");
while (n > 0) {
    let e = prompt("enter element:");
    v.push(e);
    n--;

}
v.forEach(function(e)
{
    if(e==ch)
    {console.log(`your desired element "${ch}" is found `);}
})

