$(document).ready(function() {
    display(location.search);
});

function display(search){
    let year = search.split("?")[1];
    console.log(year);
    $.ajax({
        url: "http://localhost/workSpace/web_project/php/showWords.php",
        type: "POST",
        data: { "year": year }, 
    })
    .done(function(data){
        let obj = JSON.parse(data);
        let tbody = document.getElementById("show");
        for(i = 0; i < 60; i++){
            let tr = document.createElement("tr");
            let th1 = document.createElement("th");
            let th2 = document.createElement("th");
            let th3 = document.createElement("th");
            th1.innerHTML = obj[0][i];
            th2.innerHTML = obj[1][i];
            th3.innerHTML = 0;
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tbody.appendChild(tr);
        }
    })
}