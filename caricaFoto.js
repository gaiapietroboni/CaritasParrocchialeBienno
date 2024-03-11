if((type == "contenuto")||(type == "luogo")||(type == "luogoLista"))
{
    // Codice JavaScript per iniettare HTML in un luogo specifico
    var immaginiDiv = document.querySelector('.immagini');
    immaginiDiv.innerHTML += '<img id="foto" src="" alt="Foto">';

    // Visualizza la foto
    document.getElementById('foto').src = `${directory}/foto.jpg`; 
}


