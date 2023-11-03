const h5 = document.getElementById('label');
const input = document.getElementById('input');
const labelPassword = document.getElementById('labelPassword');
const inputPassword = document.getElementById('inputPassword');

input.addEventListener('focus', function() {
    h5.style.transform = "translateY(-10px)";
    h5.style.color =  "#F50057";
});

input.addEventListener('blur', function() {
    if (input.value.trim() !== '') {
        h5.style.transform = "translateY(-10px)";
    } else {
        h5.style.transform = "translateY(0)";
        h5.style.color = "#979797";
    }
});

inputPassword.addEventListener('focus', ()=>{ 
    labelPassword.style.transform = "translateY(-10px)";
    labelPassword.style.color =  "#F50057";
})

inputPassword.addEventListener('blur', function() {
    if (inputPassword.value.trim() !== '') {
        labelPassword.style.transform = "translateY(-10px)";
        
    } else {
        labelPassword.style.transform = "translateY(0)";
        labelPassword.style.color = "#979797";
    }
})