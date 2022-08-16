let btn_1 = document.querySelector('.btn-1')
let btn_2 = document.querySelector('.btn-2')
let btn_3 = document.querySelector('.btn-3')
let btn_4 = document.querySelector('.btn-4')
let btn_5 = document.querySelector('.btn-5')

let btn_voltar1 = document.querySelector('.btn_voltar1')
let btn_voltar2 = document.querySelector('.btn_voltar2')

let menu = document.querySelector('.menu')

let op_cad_menu = document.querySelector('.choose-registration')
let op_cad_cliente = document.querySelector('.Cliente')
let op_cad_medicamento = document.querySelector('.Medicamento')

let cadastro_cliente = document.querySelector('.cad-cliente')
let cadastro_medicamento = document.querySelector('.cad-remedio')

btn_1.addEventListener('click',()=>{

    menu.classList.remove('on')
    menu.classList.add('off')

    op_cad_menu.classList.remove('off')
    op_cad_menu.classList.add('on')

})
op_cad_cliente.addEventListener('click',()=>{

    cadastro_cliente.classList.remove('off')
    cadastro_cliente.classList.add('on')

    op_cad_menu.classList.remove('on')
    op_cad_menu.classList.add('off')

})

op_cad_medicamento.addEventListener('click',()=>{

    cadastro_medicamento.classList.remove('off')
    cadastro_medicamento.classList.add('on')

    op_cad_menu.classList.remove('on')
    op_cad_menu.classList.add('off')
    
})

btn_voltar1.addEventListener('click',()=>{

    cadastro_cliente.classList.remove('on')
    cadastro_cliente.classList.add('off')
    
    menu.classList.remove('off')
    menu.classList.add('on')
})

btn_voltar2.addEventListener('click',()=>{

    cadastro_medicamento.classList.remove('on')
    cadastro_medicamento.classList.add('off')

    menu.classList.remove('off')
    menu.classList.add('on')
})