$(document).ready(function() {
    let name = location.search.split("?")[1];
    document.getElementById("navbarDropdown").innerHTML = "Hello " + name;

    $("#logout").click(function(){
        $.post("php/logout.php", null, function(data, status) {
            alert("以登出，請重新登入");
            location.href = "http://localhost/workSpace/web_project/login.html";

        });
    })
});