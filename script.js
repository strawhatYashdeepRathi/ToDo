var penditems = document.querySelector("#pending");
var compitems = document.querySelector("#completed");

const api_url = "https://jsonplaceholder.typicode.com/todos";
async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    for(var i = 0; i<data.length; i++){
        if (data[i].completed == false ){
            var pen_list = document.createElement("li");
            pen_list.innerHTML = data[i].title;
            console.log(pen_list.innerHTML);
            penditems.appendChild(pen_list);
        }
        else{
            var comp_list = document.createElement("li");
            comp_list.innerHTML = data[i].title;
            compitems.appendChild(comp_list);
        }
    }
}
getapi(api_url);