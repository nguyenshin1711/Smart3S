document.querySelector(".nav-icon").addEventListener("click", function(){
    document.querySelector(".nav-option").style.display = "block";

    setTimeout(function(){
        document.querySelector(".nav-option").style.display = "none";
    },5000);
});


// modal

document.querySelector(".btn-signUp").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".modale").classList.add("opened");
});

document.querySelector(".closemodale").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".modale").classList.remove("opened");
});

document.getElementById("btn_ingresar").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".modale").classList.remove("opened");
});

