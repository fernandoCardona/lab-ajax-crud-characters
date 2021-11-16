 const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');
// const CharacterAllName = document.querySelector(".characters-container .name")
// const CharacterAllOccupation = document.querySelector(".characters-container .occupation")
// const CharacterAllCartoon = document.querySelector(".characters-container .cartoon")
// const CharacterAllweapon = document.querySelector(".characters-container .weapon")



window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (e) {
    e.preventDefault();

    charactersAPI.getFullList()
        .then(res => {
            const charactersUL = document.querySelector(".characters-container")
            console.log(res)

            let charactersInfo = ""
            res.data.reverse().forEach(character => {
                charactersInfo += `
                                  <div class="character-info"> 
                                    <div class="name"><strong>Character Name: </strong> ${character.name}</div>
                                    <div class="occupation"><strong>Character Occupation: </strong>${character.occupation}</div>
                                    <div class="cartoon"><strong>Is a Cartoon?: </strong>${character.cartoon}</div>
                                    <div class="weapon"><strong>Character Weapon: </strong>${character.weapon}</div>
                                  </div>
                                  `
              
            });
            

            charactersUL.innerHTML = charactersInfo
        })
        .catch(err => console.log(err))
    
        
  });

  document.getElementById('fetch-one').addEventListener('click', function (e) {
      e.preventDefault();

      let id = document.querySelector(".operation input").value
      //console.log(typeof id)
      
      charactersAPI.getOneRegister(id)
      .then(res => {
        const charactersUL = document.querySelector(".characters-container")
        // console.log(res)

        let charactersInfo = ""
        
            charactersInfo = `
                              <div class="character-info"> 
                              <div class="name"><strong>Character Name: </strong> ${res.data.name}</div>
                              <div class="occupation"><strong>Character Occupation: </strong>${res.data.occupation}</div>
                              <div class="cartoon"><strong>Is a Cartoon?: </strong>${res.data.cartoon}</div>
                              <div class="weapon"><strong>Character Weapon: </strong>${res.data.weapon}</div>
                            </div>
                              `
          
    

        charactersUL.innerHTML = charactersInfo
    })
    .catch(err => console.log(err))


  });

  document.getElementById('delete-one').addEventListener('click', function (e) {
      e.preventDefault();
      let id = document.querySelector(".delete input").value
      charactersAPI.deleteOneRegister(id)
      .then(res => {
        const charactersUL = document.querySelector(".characters-container")
        // console.log(res)

        let charactersInfo = ""
        
            charactersInfo = `
                              <div class="character-info"> 
                              <div class="name"><strong>Character Name: </strong> ${res.data.name}</div>
                              <div class="occupation"><strong>Character Occupation: </strong>${res.data.occupation}</div>
                              <div class="cartoon"><strong>Is a Cartoon?: </strong>${res.data.cartoon}</div>
                              <div class="weapon"><strong>Character Weapon: </strong>${res.data.weapon}</div>
                              </div>
                              `
          
    

        charactersUL.innerHTML = charactersInfo
        document.querySelector(".delete input").value = ''
    })
    .catch(err => console.log(err))
     
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (e) {
      e.preventDefault();
      let id = document.querySelector(".delete input").value
      charactersAPI.updateOneRegister(id)
      .then(res => {
        const charactersUL = document.querySelectorAll(".character-form input")
        // console.log(res)

        let charactersInfo = ""
        
            charactersInfo = `
                              <div class="character-info"> 
                              <div class="name"><strong>Character Name: </strong> ${res.data.name}</div>
                              <div class="occupation"><strong>Character Occupation: </strong>${res.data.occupation}</div>
                              <div class="cartoon"><strong>Is a Cartoon?: </strong>${res.data.cartoon}</div>
                              <div class="weapon"><strong>Character Weapon: </strong>${res.data.weapon}</div>
                              </div>
                              `
          
    

        charactersUL.innerHTML = charactersInfo
        document.querySelector(".delete input").value = ''
    })
    .catch(err => console.log(err))

  });

  document.getElementById('new-character-form').addEventListener('submit', function (e) {
      e.preventDefault();


  });




});
