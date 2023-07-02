/* SCRIPT PARA "CONSUMIR" LA API REST DE MARVEL */
function showCharacterImage(characterName, imageUrl) {
  var characterGridElement = document.getElementById('character-grid');
  var characterCardElement = document.createElement('div');
  characterCardElement.className = 'character-card';

  var modifiedCharacterName = characterName;
  if (characterName === "Captain America (Ultimate)") {
    modifiedCharacterName = "Captain America";
  } else if (characterName === "Spider-Man (Miles Morales)") {
    modifiedCharacterName = "Spider-Man";
  }

  var characterNameElement = document.createElement('p');
  characterNameElement.className = 'character-name';
  characterNameElement.textContent = modifiedCharacterName;

  var characterImageElement = document.createElement('img');
  characterImageElement.src = imageUrl;
  characterImageElement.className = 'character-image';

  characterCardElement.appendChild(characterNameElement);
  characterCardElement.appendChild(characterImageElement);
  characterGridElement.appendChild(characterCardElement);
}

// Se carga la lista de personajes al cargarse la página
window.onload = function() {
  var characters = [
    "Captain America (Ultimate)",
    "Spider-Man (Miles Morales)",
    "Hulk",
    "Apocalypse",
    "Wolverine"
  ];

  characters.forEach(characterName => {
    var url = "https://gateway.marvel.com/v1/public/characters?name=" + encodeURIComponent(characterName) + "&ts=1000&apikey=3d91d760c0004d3e0c4bd803507e774a&hash=3f02036d5ce6ad6778e86b3c6f4322ad";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var character = data.data.results[0];

        if (character) {
          var imageUrl = character.thumbnail.path + "." + character.thumbnail.extension;
          showCharacterImage(characterName, imageUrl);
        }
      })
      .catch(error => console.log(error));
  });
};
// FIN del código ;)