/* prende il file mappa.txt, contenuto nella sottocartella
passata come parametro, lo legge e usa il testo al suo 
interno come src dell'iframe */

if((type == "luogo") || (type == "luogoLista"))
{
  // Codice JavaScript per iniettare HTML in un luogo specifico
  var contattiDiv = document.querySelector('.contatti');
  var mapDiv = document.querySelector('.map');
  contattiDiv.innerHTML += '<h1>Indirizzo e orari</h1> <p id="indirizzoOrari"></p>';
  mapDiv.innerHTML += '<iframe id="mappa" src=""></iframe>';

  var iframe = document.getElementById("mappa");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var mappaUrl = this.responseText;
          iframe.src = mappaUrl;
      }
  };
  xhttp.open("GET", `${directory}/mappa.txt`, true);
  xhttp.send();


  // Carica il contenuto del file indirizzoOrari.txt
  fetch(`${directory}/indirizzoOrari.txt`)
  .then(response => response.text())
  .then(indirizzoOrari => {

  // Inserisce il testo nel paragrafo con id "indirizzoOrari"
    document.getElementById('indirizzoOrari').innerHTML = indirizzoOrari;
  });
}


