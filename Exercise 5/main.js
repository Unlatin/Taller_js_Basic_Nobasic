let div1 = document.getElementById('div1')
let boton = document.getElementById('boton')
let div2 = document.querySelector('.div-1')

const div = ()=>{
    div1.innerHTML += '<div class="div-1 col-2"></div>'
}

boton.onclick = function(){
    div()
}