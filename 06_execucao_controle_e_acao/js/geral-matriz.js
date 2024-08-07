// caixas expansiveis
$('.caixa-container button.btpluscaixa').click(function(){
    let caixa = $(this).prev()
    if(caixa.hasClass('aberta')){
        caixa.removeClass('aberta')
        $(this).css('background-image', 'url("../02_ISO_9000/img/bt_mais2.png")')
    } else {
        caixa.addClass('aberta')
        $(this).css('background-image', 'url("../02_ISO_9000/img/bt_menos2.png")')
    }
  })

 