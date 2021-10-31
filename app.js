window.onload = function(){
    let searchBtn = document.querySelector("#search-btn");
    ProcessQuery();
    searchBtn.addEventListener("click", ProcessQuery, true);
}



function ProcessQuery(){
    let result = document.querySelector(".result");
    let input = document.querySelector("input");
    let query = input.value ? input.value : "";
    fetch(`http://localhost/info2180-lab4/superheroes.php?query=${query.trim()}`)
        .then(response => {
            if(response.ok){
                return response.text();
            }
            else{
                throw new Error(`An error has occured: ${response.status}`);
            }
        })
        .then(data => {
            result.innerHTML = data;
        })
        .catch(err => {
            console.log(err);
        })
}