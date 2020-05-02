var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function exibeRepos(){
    listElement.innerHTML = '';
    var inputText = inputElement.value;
    if (inputText.length ===0)
        return;

    var loadingElement = document.createElement('li');
    var loadingText = document.createTextNode('Carregando...');
    loadingElement.appendChild(loadingText);
    listElement.appendChild(loadingElement);

    axios.get('https://api.github.com/users/'+inputText+'/repos')
        .then(function(response){
            listElement.innerHTML = '';
            if (response.data.length === 0){
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
            listElement.innerHTML = '';
            alert('O repositório não existe');
        });

    inputElement.value = '';
}

buttonElement.onclick = exibeRepos;
