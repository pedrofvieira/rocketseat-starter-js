var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function exibeRepos(){
    listElement.innerHTML = '';
    var inputText = inputElement.value;
    if (inputText.length ===0)
        return;

    axios.get('https://api.github.com/users/'+inputText+'/repos')
        .then(function(response){
            if (response.data.length === 0){
                alert('O repositório não existe');
                return;
            }

            for (repo of response.data){
                var itemElement = document.createElement('li');
                var itemText = document.createTextNode(repo.name);
        
                itemElement.appendChild(itemText);
                listElement.appendChild(itemElement);
            }
        })
        .catch(function(error){
            alert('O repositório não existe');
        });

    inputElement.value = '';
}

buttonElement.onclick = exibeRepos;
