
function validate(){
    
    let name = document.getElementById("name");
    let pass = document.getElementById("pass");
    
        if(name.value == pass.value){
            alert("Use different name");
            return false;
        }
    }