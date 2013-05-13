$(document).ready(function(){
    $("#yourButtonId").on("click", function() {
        $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
    });
});