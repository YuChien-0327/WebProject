$(document).ready(function() {
    display(location.search);
});

function display(search){
    let year = search.split("?")[1];
    console.log("讀取" + year + "的資料");
    /*$.ajax({
        url: '',
        type: "",
        data: { "year": year }, 
    })*/
}