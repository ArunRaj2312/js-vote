var age=parseInt(prompt("enter your age"));
if(age>=18){
    var permission=confirm("you got voter id")
    if(permission==true){
        console.log("you eligible");
    }
    else{
        console.log("not eligible");
    }
}
else{
    console.log("not eligible");
}