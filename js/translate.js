$(document).ready(function(){
    $("#translate").click(function(){translate();});
    $("#add").click(function(){add();});
    $("#clear").click(function(){clear();});
    $("#delete").click(function(){del();});
});

function del(){
    var enText = $("#en_word").val();
    $.ajax({
        url: "http://localhost/workSpace/web_project/php/delV.php",
        type: "POST",
        data: {"en" : enText},
    })
    .done(function(data){
        console.log(data);
        location.reload()
    })
}

function translate(){

    var enText = $("#en_word").val();
    var zhText = $("#zh_word").val();
    var sourceText;
    var sourceLang;
    var targetLang;

    console.log(enText + " " + zhText);

    if(enText == ""){ //中翻英
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
    console.log("add");
    var enText = $("#en_word").val();
    var zhText = $("#zh_word").val();
    if(enText == "" || zhText == ""){ alert("請先翻譯完成後再加入列表"); }
    else{
        $.ajax({
            url: "http://localhost/workSpace/web_project/php/addV.php",
            type: "POST",
            data: {"en" : enText, "zh" : zhText},
        })
        .done(function(data){
            console.log(data);
            location.reload()
        })
    }
}

function clear(){
    $("#en_word").val("");
    $("#zh_word").val("");
}