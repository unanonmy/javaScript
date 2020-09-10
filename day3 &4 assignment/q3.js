let arr=[
    {
        name:"chiru",
        age:21,
        country:"USA",
        hobbies:["games"],
    },
    {
        name: "sai",
        age:22,
        country:"india",
        hobbies: ["music"],
    },
    {
        name: "kumar",
        age:30,
        country:"indonesia",
        hobbies: ["eating"],
    }
]

//to print objects
function print() {
    for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    

}
print()


//for objects whose age is lessthan 30
function print1()
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].age<30){
        console.log(arr[i]);}
    }    

}
print1()

// for object country india
function print2() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].country=="india") {
            console.log(arr[i]);
        }
    }

}
print2()