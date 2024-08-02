       
$(function () {
    $("body").prognroll();
});

$(".btn-tema_pagina").click(function () {
    console.log($(".btn-tema_pagina"))
    if ($("body").hasClass('bg-claro')) {
        console.log("sim");
        $("body").removeClass('bg-claro')
        $("body").addClass("bg-escuro");
    } else if ($("body").hasClass('bg-escuro')) {
        console.log("não");
        $("body").removeClass('bg-escuro')
        $("body").addClass("bg-claro")
    }
});
