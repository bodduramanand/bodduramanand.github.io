// Price calculation

function myBook() {
    var iKms = document.getElementById('kms');
    var newKms = iKms.value;
    var disPrice = document.getElementById('price');

        if (newKms <= null) {
            alert("Please enter valid information.");
        } 

        else if (newKms >= 41) {
            disPrice.innerHTML = "Your location and distance is out of our range, sorry!";
        } 

        else if (newKms >= 1 && newKms <= 4) {
            var newPrice = 40;
            var newFrom = document.getElementById('fromlocation').value;
          var newTo = document.getElementById('tolocation').value;  
        disPrice.innerHTML = "Your approximate fare from "+ newFrom + " to "+ newTo +" is Rs. " + newPrice;
        }

        else if (newKms >= 5 && newKms <= 10) {
            var newPrice = 12 * iKms.value;
            var newFrom = document.getElementById('fromlocation').value;
          var newTo = document.getElementById('tolocation').value;  
        disPrice.innerHTML = "Your approximate fare from "+ newFrom + " to "+ newTo +" is Rs. " + newPrice;
        }

        else if (newKms >= 11 && newKms <= 15) {
            var newPrice = 13 * iKms.value;
            var newFrom = document.getElementById('fromlocation').value;
          var newTo = document.getElementById('tolocation').value;  
        disPrice.innerHTML = "Your approximate fare from "+ newFrom + " to "+ newTo +" is Rs. " + newPrice;
        }

        else if (newKms >= 16 && newKms <= 20) {
            var newPrice = 14 * iKms.value;
            var newFrom = document.getElementById('fromlocation').value;
          var newTo = document.getElementById('tolocation').value;  
        disPrice.innerHTML = "Your approximate fare from "+ newFrom + " to "+ newTo +" is Rs. " + newPrice;
        }

        else if (newKms >= 21 && newKms <= 30) {
            var newPrice = 16 * iKms.value;
            var newFrom = document.getElementById('fromlocation').value;
          var newTo = document.getElementById('tolocation').value;  
        disPrice.innerHTML = "Your approximate fare from "+ newFrom + " to "+ newTo +" is Rs. " + newPrice;
        }

        else if (newKms >= 31 && newKms <= 40) {
            var newPrice = 18 * iKms.value;
            var newFrom = document.getElementById('fromlocation').value;
          var newTo = document.getElementById('tolocation').value;  
        disPrice.innerHTML = "Your approximate fare from "+ newFrom + " to "+ newTo +" is Rs. " + newPrice;
        }

}

// Reset Button

function resetForm() {
document.getElementById("disform").reset();
document.getElementById("price").innerHTML = null;
}

// News Letter

function newsLetter() {
    var eMail = document.getElementById('emailnow');
    var newEmail = eMail.value;

    document.getElementById("emailnow").innerHTML = "Subscribed";
}