const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = ` 
    Hai ricevuto un messaggio da ${name.value}:<br><br>
    ${message.value} <br><br>
    Email: ${email.value}<br>
    Telefono: ${phone.value}<br>`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "caritas.sitoweb@gmail.com",
        Password : "C64696B6CBF673944D75406B83CAC0427512",
        To : 'caritas.sitoweb@gmail.com',
        From : "caritas.sitoweb@gmail.com",
        Subject : subject.value,
        Body : bodyMessage

    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Successo!",
                text: "Messaggio inviato correttamente",
                icon: "success"
              });
        }
      }
    );
}

function fieldsNotCompiled(){

  const items = document.querySelectorAll(".item");

  for(const item of items){
    if(item.value == "")
    {
      return true;
    }
  }
  return false;
}

function clearFields(){
  const items = document.querySelectorAll(".item");

  for(const item of items){
    item.value = "";
  }
}


form.addEventListener("submit", (e) => {

  e.preventDefault();

  if(fieldsNotCompiled())
  {
    Swal.fire({
      title: "Attenzione!",
      text: "Compila tutti i campi",
      icon: "error"
    });
  }
  else
  {
    sendEmail();
    clearFields();
  }
});
