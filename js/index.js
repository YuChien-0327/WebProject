$(document).ready(function() {
    /*let name = location.search.split("?")[1];
    document.getElementById("navbarDropdown").innerHTML = "Hello " + name;*/
    let vars = getUrlVars();
    //console.log(vars);
    $("#navbarDropdown").html("Hello " + vars["user"]);
    setUrl();
    $("#logout").click(function(){
        $.post("php/logout.php", null, function(data, status) {
            alert("以登出，請重新登入");
            location.href = "http://localhost/workSpace/web_project/login.html";
        });
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

function setUrl(){
    let vars = getUrlVars();
    $("#home").attr("href", "http://localhost/workSpace/web_project/index.html?user="+vars["user"] + "&year=index");
    for(let i=109; i>=100; i--){
        $("#"+i).attr("href", "words.html?user="+vars["user"] + "&year=" + i);
    }
}