const form = document.getElementById('submit')

function validateForm(){
    if(form.checkValidity()){
        alert("Form Submitted Successfully!")
    }
    else{
        älert("Please Fill out your form properly")
    }
}

function breadcrumbFunc(value) {
    const pot_images_div = document.getElementById("pot_images_div");
    const wall_mounted_images_div = document.getElementById("wall_mounted_images_div");
    const pot_hanger_images_div = document.getElementById("pot_hanger_images_div");
    const railing_brackets_images_div = document.getElementById("railing_brackets_images_div");

    if(value === 0){
        pot_images_div.style.display ='flex';
        wall_mounted_images_div.style.display = "flex";
        pot_hanger_images_div.style.display = "flex";
        railing_brackets_images_div.style.display = "flex";
    }
    else if(value === 1) {
        pot_images_div.style.display = "flex";
        wall_mounted_images_div.style.display ="none";
        pot_hanger_images_div.style.display = "none";
        railing_brackets_images_div.style.display = "none";
    }
    else if(value === 2) {
        pot_images_div.style.display = "none";
        wall_mounted_images_div.style.display ="flex";
        pot_hanger_images_div.style.display = "none";
        railing_brackets_images_div.style.display = "none";
    }
    else if(value === 3) {
        pot_images_div.style.display = "none";
        wall_mounted_images_div.style.display ="none";
        pot_hanger_images_div.style.display = "flex";
        railing_brackets_images_div.style.display = "none";
    }
    else if(value === 4) {
        pot_images_div.style.display = "none";
        wall_mounted_images_div.style.display ="none";
        pot_hanger_images_div.style.display = "none";
        railing_brackets_images_div.style.display = "flex";
    }
}