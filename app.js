window.onload = function(){
    let searchBtn = document.querySelector("#search-btn")

    searchBtn.addEventListener("click", () => {
        fetch("http://localhost:8888/info2180-lab4/superheroes.php?q=")
            .then(response => {
                if(response.ok){
                    return response.text()
                }
                else{
                    throw new Error("An error has occured")
                }
            })
            .then(data => {
                alert(data)
            })
            .catch(err => {
                console.log(err)
            })
    })
}