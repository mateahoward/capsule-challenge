
//Configuration
const outputText = 'Check your inbox for the download link';
const successButtonText = 'Sent';
let success = document.getElementById('submit');

function GetFormValues()
{
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;

    return [firstname, lastname, email];
}

function changeColour(){
    let formValues = GetFormValues();
    

    //check that every string in array is not empty
    const isEveryItemEmpty = formValues.every(IsNotEmptyString);

    if  (isEveryItemEmpty) {
        success.classList.add('sent');
        success.value = successButtonText;
        const message = document.createTextNode(outputText);
        const outputElement = document.getElementById('output');
        outputElement.appendChild(message);
    }
}

function IsNotEmptyString(s)
{
    return s !== "";
}

 //invoke button colour change and prevent from closing on submit
document.getElementById("ebook-form").addEventListener("submit", function(event){
    changeColour();
    event.preventDefault();
  });
