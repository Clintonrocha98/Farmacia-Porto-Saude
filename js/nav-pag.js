import {cadastro_cliente,cadastro_medicamento} from './cadastro-cliente-remedio.js';

const btn_1 = document.querySelector('.btn-1')
const btn_2 = document.querySelector('.btn-2')
// const btn_3 = document.querySelector('.btn-3')
// const btn_4 = document.querySelector('.btn-4')
// const btn_5 = document.querySelector('.btn-5')

const btn_voltar1 = document.querySelector('.btn-voltar1')
const btn_voltar2 = document.querySelector('.btn-voltar2')
const btn_voltar3 = document.querySelector('.btn-voltar3')

const menu = document.querySelector('.menu')

const op_cad_menu = document.querySelector('.choose-registration')
const op_cad_cliente = document.querySelector('.Cliente')
const op_cad_medicamento = document.querySelector('.Medicamento')
const pag_vender = document.querySelector('.pag-venda')

function add_remove_menu(){
    if(menu.classList[1] == "on"){
        menu.classList.remove('on')
        menu.classList.add('off')
    }
    else{
        menu.classList.add('on')
        menu.classList.remove('off')
    }
    
}
function op_cadastro(){
    if(op_cad_menu.classList[1] == "off"){
        op_cad_menu.classList.add('on')
        op_cad_menu.classList.remove('off')
    }
    else{
        op_cad_menu.classList.add('off')
        op_cad_menu.classList.remove('on')
    }
}
function vender(){
    if(pag_vender.classList[1] == "off"){
        pag_vender.classList.add('on')
        pag_vender.classList.remove('off')
    }
    else{
        pag_vender.classList.add('off')
        pag_vender.classList.remove('on')
    }
}

btn_1.addEventListener('click',()=>{
    add_remove_menu()
    
    op_cadastro()
})

btn_2.addEventListener('click',()=>{
    add_remove_menu()
    
    vender()
})
op_cad_cliente.addEventListener('click',()=>{

    cadastro_cliente.classList.remove('off')
    cadastro_cliente.classList.add('on')

    op_cadastro()
})

op_cad_medicamento.addEventListener('click',()=>{

    cadastro_medicamento.classList.remove('off')
    cadastro_medicamento.classList.add('on')

    op_cadastro()
    
})

export function voltar_menu(a){
    a.classList.remove('on')
    a.classList.add('off')
    
    add_remove_menu()
}

btn_voltar1.addEventListener('click',()=>{
    voltar_menu(cadastro_cliente)
})

btn_voltar2.addEventListener('click',()=>{
    voltar_menu(cadastro_medicamento)
})
btn_voltar3.addEventListener('click',()=>{
    vender()
    add_remove_menu()
})

