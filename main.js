//main var
let theInput = document.querySelector(".get-repos input"),
    getButton = document.querySelector(".get-button"),
    reposData = document.querySelector(".show-data");

// on click

getButton.onclick = function(){
    getrebose()
}

//function fetch

function getrebose(){
    if(theInput.value==""){
        reposData.innerHTML ="<h1> enter your data</h1>"
    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

    .then((response) => response.json())

    .then((repositories) => {
        
      // Empty The Container
    reposData.innerHTML = '';
        //loop on my api
        repositories.forEach(repo => {

        //creat the main div
        let maindiv = document.createElement("div"),
        text= document.createTextNode(repo.name);
        maindiv.appendChild(text)

        let link = document.createElement("a"),
        textlink=document.createTextNode("visit");
        link.href=`https://github.com/${theInput.value}/${repo.name}`
        link.setAttribute ('target','_blank')
        link.appendChild(textlink)
        maindiv.appendChild(link)
        
        let starsSpan = document.createElement("span");

        let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

        starsSpan.appendChild(starsText);

        maindiv.appendChild(starsSpan);
        
        maindiv.className = 'repo-box';

        reposData.appendChild(maindiv)


        });

    })
}
}



