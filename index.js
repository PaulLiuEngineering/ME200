var n = 0;
$(document).ready(function() {
    $("area").mouseover(function (e) {
        var str = $(this).attr('coords').toString();
        console.log(str);
        // $(this).effect('highlight','swing','3000');
    });
});