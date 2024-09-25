$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    })

//Criando um evento de click, onde ele irá verificar se o ícone está up ou não, e dependendo do resultado ele irá executar a ação de recolha ou exibição do menu nav.
$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})

//Criando evento para definir uma mascara para o campo de telefone
$('#telefone').mask('(00) 00000-0000')

//Criando uma função com uma regra que faz a validação de preenchimento dos dados
$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
        veiculo_interesse: {
            required: true
        },
    },
    //Realizando uma alteração na tradução de texto que aparece ao digitar o nome.
    messages: {
        nome: 'Por favor, insira o seu nome!'
    },
    submitHandler: function(form) {
        console.log(form)
    },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
})
//Criando um evento para no momento do clique em "Tenho interesse" valido para a aba de promoções e destaque
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        // "this" indica o parametro passado dentro do "function()", assim selecionamos o seu "pai" e procuramos pelo texto dentro do h3.
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        //Aplicando uma animação que faça o direcionamento para a classe contato no contéudo HTML
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})