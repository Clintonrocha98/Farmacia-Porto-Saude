import {remedio,cont2} from './cadastro-cliente-remedio.js';
const busca_remedio = document.querySelector('.venda-remedio').value
const busca_quantidade = document.querySelector('.venda-quantidade').value

const btn_add_carrinho = document.querySelector('.btn-add-carrinho')

function consulta(){
    for(let i=0;i<cont2;i++){
        if(remedio[i].includes(busca_remedio) & Number(busca_quantidade) <= remedio[i][2]){

        }

    }
}
btn_add_carrinho.addEventListener('click',()=>{
    consulta()
})
