
// nella pagina contenuto.html vengono caricati il contenuto del file .txt e la foto 
// che si trovano nella sottocartella con il nome corrispondente

    // Codice JavaScript per ottenere i parametri dall'URL
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');
    const directory = params.get('directory');
    const type = params.get('type');

    // Carica i nome e descrizione
    fetch(`${directory}/descrizione.txt`)
      .then(response => response.text())
      .then(descrizione => {
        document.getElementById('nome').textContent = nome;
        document.getElementById('descrizione').textContent = descrizione;
      });

     







