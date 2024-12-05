//Jose Romani
function getInput(){
    let username = document.getElementById('username').value;
    document.getElementById('heading-three').innerText = "Jose: " + username;
    document.getElementById('div1').style.backgroundColor = "Red";
}

document.getElementById('btn1').addEventListener('click', getInput)

