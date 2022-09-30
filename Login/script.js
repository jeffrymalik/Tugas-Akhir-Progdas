// usernamenya ni
var user = "admin"
// pwnya ni 
var pass = "login"


function Log(){

    var usname = document.getElementById('us').value
    var pwrd = document.getElementById('pw').value

    if(usname == user && pwrd == pass){
        
        alert('success')
        // page.html di ganti jadi link yg mau dituju
        window.open("page.html")

    }else{

        alert('wrong password/username')
    }
}