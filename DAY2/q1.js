var ch=prompt("enter your character:")
var st=prompt("enter your string:");

if(st.search(ch)>=0){
    console.log(`character "${ch}" is found in you string "${st}"`);
}
else{
    console.log(`character "${ch}" is not found in you string "${st}"`);
}
