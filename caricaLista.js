if((type == "lista") || (type == "luogoLista"))
{
  if(type == "lista")
  {
      // Codice JavaScript per iniettare HTML in un luogo specifico
    var descriptionDiv = document.querySelector('.description');
    descriptionDiv.innerHTML += '<ul id="lista"></ul>';
  }
  else{
          // Codice JavaScript per iniettare HTML in un luogo specifico
          var listaDiv = document.querySelector('.list');
          listaDiv.innerHTML += '<ul id="lista"></ul>';
  }


  // Effettua una richiesta AJAX per controllare l'esistenza del file
  var xhr = new XMLHttpRequest();
  xhr.open('HEAD', `${directory}/lista.txt`, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              // Il file esiste, carica il contenuto nella lista
              caricaLista();
          } else {
              // Il file non esiste, mostra un messaggio di errore o prendi altre azioni necessarie
              console.error('Il file lista.txt non esiste.');
          }
      }
  };
  xhr.send();

}


function caricaLista() {
  // Effettua una richiesta per ottenere il contenuto del file lista.txt
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `${directory}/lista.txt`, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Carica il contenuto del file nella lista
          document.getElementById('lista').innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}