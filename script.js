
let pedidoComida;

function selecionarComida(classeComida){
    const ComidaJaSelecionada = document.querySelector('.container_comida .item_selecionado');
    const Aparecercheck = document.querySelector('.container_comida .escondido');

    if ( ComidaJaSelecionada !== null ){
        ComidaJaSelecionada.classList.remove('item_selecionado');
    }


    if ( Aparecercheck !== null){
        Aparecercheck.classList.remove('escondido');    
    }
    console.log(Aparecercheck);

    classeComida.classList.add('item_selecionado');
    

    /*pedidoComida = classeItem;

    habilitaBotaoContinuar();*/

}


function selecionarBebidas(classeBebida){
    const BebidaJaSelecionada = document.querySelector('.container_bebida .item_selecionado');

    if ( BebidaJaSelecionada !== null){
        BebidaJaSelecionada.classList.remove('item_selecionado');    
    }

    classeBebida.classList.add('item_selecionado');
    classeBebida.classList.remove('escondido');

}

function selecionarSobremesa(classeSobremesa){
    const SobremesaJaSelecionada = document.querySelector('.container_sobremesa .item_selecionado');

    if ( SobremesaJaSelecionada !== null){
        SobremesaJaSelecionada.classList.remove('item_selecionado');    
    }

    classeSobremesa.classList.add('item_selecionado');
    classeSobremesa.classList.remove('escondido');
}