$(document).ready(function(){
    $("#translate").click(function(){translate();});
    $("#add").click(function(){add();});
    $("#clear").click(function(){clear();});
});


function translate(){

    var enText = $("#en_word").val();
    var zhText = $("#zh_word").val();
    var sourceText;
    var sourceLang;
    var targetLang;

    console.log(enText + " " + zhText);

    if(enText == ""){
        sourceText = zhText;
        targetLang = "en";
        sourceLang = "zh-TW";
    }else if(zhText == ""){
        sourceText = enText;
        sourceLang = "en";
        targetLang = "zh-TW";
    }
  
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
  
    $.getJSON(url, function(data) {
        if(enText == ""){
            $("#en_word").val(data[0][0][0]);
        }else if(zhText == ""){
            $("#zh_word").val(data[0][0][0]);
        }
    });

}
function add(){

}
function clear(){
    $("#en_word").val("");
    $("#zh_word").val("");
}