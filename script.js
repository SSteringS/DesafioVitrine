$(document).ready(function(){

var speed = 4000;
     
var item_width = $('.first').outerWidth();


console.log(item_width);

    $(".backCarousel").click(function(){

        var posicao = parseFloat($('.vitrineProdutos').css('left'));
        var left_intend = parseFloat($('.vitrineProdutos').css('left')) + item_width;
       
        if (posicao != -17780.1){
        console.log(posicao);
        $('.vitrineProdutos').animate({'left':left_intend}, 100);
        posicao += left_intend;
        }
    }
    )

    $(".nextCarousel").click(function(){

        var posicao = parseFloat($('.vitrineProdutos').css('left'));
        var left_intend = parseFloat($('.vitrineProdutos').css('left')) + item_width;

        if (posicao != -19669.4){
        var rigth_intend = parseFloat($('.vitrineProdutos').css('left')) - item_width;
        $('.vitrineProdutos').animate({'left':rigth_intend}, 100);
        posicao -= left_intend;
        }}
        )
    
    $(".hproduct").hover(function(){

    $(this).css({backgroundColor : '#e5f1fb'})}, function(){$(this).css({backgroundColor : 'white'});
    })
})
