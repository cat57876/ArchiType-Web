//Jose R.
let fName = "Jose";
let passWord = "Romani";
document.getElementById('form1').addEventListener('submit', function(event){
    if(document.getElementById('firstName').value == fName && passWord == document.getElementById('password').value){
        console.log('Success');
    }else{
        event.preventDefault();
    }
})
