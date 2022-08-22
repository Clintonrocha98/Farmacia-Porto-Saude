import {voltar_menu} from './nav-pag.js';
const btn_add_cliente = document.querySelector('.add-cliente')
const btn_add_remedio = document.querySelector('.add-remedio')

export const cadastro_cliente = document.querySelector('.cad-cliente')
export const cadastro_medicamento = document.querySelector('.cad-remedio')

const add_cliente = document.querySelector('.add-cliente')
const add_remedio = document.querySelector('.add-remedio')
var flag = false

let cliente = []
export let remedio = []

let cont = 0
export let cont2 = 0

btn_add_cliente.addEventListener('click',()=>{
    let nome = document.querySelector('.nome-cliente').value
    let cpf = document.querySelector('.cpf-cliente').value

    if(nome.length & cpf.length){
        cliente[cont] = [nome,cpf]
        cont++
        flag=true
        document.querySelector('.nome-cliente').value = ''
        document.querySelector('.cpf-cliente').value = ''
    }

})

btn_add_remedio.addEventListener('click',()=>{
    
    let codigo = document.querySelector('.cod-remedio').value
    let nome_remedio = document.querySelector('.nome-remedio').value
    let qtd = document.querySelector('.quantidade-remedio').value
    let preco = document.querySelector('.preco-remedio').value
    let descricao = document.querySelector('.descricao-remedio').value
    
    if(codigo.length & nome_remedio.length 
        & qtd.length & preco.length
        & descricao.length){
        remedio[cont2] = 
        [
            codigo,
            nome_remedio,
            Number(qtd),
            preco,
            descricao
        ]
        
        cont2++

        flag = true

        document.querySelector('.cod-remedio').value= ''
        document.querySelector('.nome-remedio').value= ''
        document.querySelector('.quantidade-remedio').value= ''
        document.querySelector('.preco-remedio').value= ''
        document.querySelector('.descricao-remedio').value= ''
    }
    
})

add_cliente.addEventListener('click',()=>{
    if(flag){
        voltar_menu(cadastro_cliente)
    }
    
})
add_remedio.addEventListener('click',()=>{
    if(flag){
        voltar_menu(cadastro_medicamento)
    }
})


    

