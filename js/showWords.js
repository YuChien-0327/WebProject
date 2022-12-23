$(document).ready(function() {
    display(location.search);
    $("#submit").attr("disabled", true);
    $("#showEn").attr("disabled", true);
    $("#hideEn").click(function(){
        $("#hideEn").attr("disabled", true);
        $("#showEn").attr("disabled", false);
        $("#submit").attr("disabled", false);
        $("input").attr("disabled", false);
        $("input").val("");
        $("input").css("border", "3px solid rgb(229, 223, 255)");
    })
    $("#showEn").click(function(){
        $("#hideEn").attr("disabled", false);
        $("#showEn").attr("disabled", true);
        $("#submit").attr("disabled", true);
        document.getElementById("show").innerHTML = "";
        display(location.search);
    })
    $("#submit").click(function(){
        let yes = confirm('是否確認提交檔案');
        if (yes) {
            check();
            location.reload()
        } else {
        }
    })
});


function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function display(search){
    let vars = getUrlVars();
    console.log(vars["year"]);
    if(vars["year"]!='your'){
        $.ajax({
            url: "http://localhost/workSpace/web_project/php/showWords.php",
            type: "POST",
            data: { "year": vars["year"]}, 
        })
        .done(function(data){
            console.log(data);
            let obj = JSON.parse(data);
            let tbody = document.getElementById("show");
            for(i = 0; i < 60; i++){
                let tr = document.createElement("tr");
                let input = document.createElement("input");
                input.value = obj[0][i];
                input.type = "text";
                input.disabled = "true";
                let th1 = document.createElement("th");
                let th2 = document.createElement("th");
                let th3 = document.createElement("th");
                th1.appendChild(input);
                th2.innerHTML = obj[1][i];
                th3.innerHTML = obj[2][i];
                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);
                tbody.appendChild(tr);
            }
        })
    }
    else{
        $.ajax({
            url: "http://localhost/workSpace/web_project/php/yourWords.php",
            type: "POST",
        })
        .done(function(data){
            console.log(data);
            let obj = JSON.parse(data);
            let length = obj[3];
            let tbody = document.getElementById("show");
            for(i = 0; i < length; i++){
                let tr = document.createElement("tr");
                let input = document.createElement("input");
                input.value = obj[0][i];
                input.type = "text";
                input.disabled = "true";
                let th1 = document.createElement("th");
                let th2 = document.createElement("th");
                let th3 = document.createElement("th");
                th1.appendChild(input);
                th2.innerHTML = obj[1][i];
                th3.innerHTML = obj[2][i];
                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);
                tbody.appendChild(tr);
            }
        })
    }

    
}

function check(){
    let str = location.search.split("?")[1];
    str = str.split("=");
    let year = str[2];
    let arr = [];
    if(year == "your"){
        year = 200;
    }
    console.log(year);
    $("input").each(function(){ 
        arr.push($(this).val());
    })
    jsonArr = JSON.stringify(arr);
    console.log(jsonArr);
    $.ajax({
        url : "http://localhost/workSpace/web_project/php/check.php",
        type : "POST",
        data : {"year" : year, "data" : jsonArr},
    })
    .done(function(data){
        console.log(data);
    })
}