function changeSocialMediaLinks(texto){
    /* const name = document.getElementById("userName").
    textContent = "Rocketseat"; */

    /* podemos fazer o mesmo que o código acima, escrevendo a seguinte linha de código, 
    porém só é possível fazer dessa forma quando se utiliza getElementById */

    // userName.textContent = "Rocketseat";

    /* Este laço irá percorrer todos os elementos li dentro do elemento pai(ul), 
    identificado pelo id socialLinks e a cada iteração atribuir o valor da class 
    que identifica o elemento li a variável li e mostrar na tela com um alert */

    for(let li of socialLinks.children){
      const social = li.getAttribute("class");

      /* A linha de código seguinte irá buscar dentro do elemento pai li, o primeiro 
      elemento filho e acessar o valor da propriedade href */

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
      
    }

  }

  const LinksSocialMedia = {
    github: "ronaldo-devlearning",
    youtube: "rocketseat",
    facebook: "rocketseat",
    instagram: "rocketseat",
    twitter: "rocketseat"
  };

  changeSocialMediaLinks();

  function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name,
        //userBio.textContent = data.bio,
        userLink.href = data.html_url, 
        //userImage.src = data.avatar_url,
        userLogin.textContent = data.login
      })
  }

  getGithubProfileInfos();