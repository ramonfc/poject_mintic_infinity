function welcome(){
    let form = document.getElementById("form");

    let data = new FormData(form);
    let email = data.get("email");
    let pass = data.get("password");
    alert(email);
}

function hola(){
    let email = document.getElementById("floatingInput");
    alert(email);
}