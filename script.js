//searchinput
//searchbtn

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers:{
            'X-RapidAPI-Key' : 'cd9509eb10msh10599f82e982c91p1dfeeejsn04053bb9a6a1',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word, options)
        .then(response => response.json())
        .then ((response) => {

        console.log(response)
        wordheading.innerHTML = response.word;
        definition.innerHTML=response.definition.replace("1","<br>1").replace("2","<br>2").replace("3","<br>3").replace("4","<br>4").replace("5","<br>5");
        })

       .catch(err => console.error(err));
}

    searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})
