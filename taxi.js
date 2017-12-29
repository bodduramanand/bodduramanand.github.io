// Price calculation

function myBook() {
    var iKms = document.getElementById('kms');

    var newKms = iKms.value;

    var disPrice = document.getElementById('price');
 
        if (newKms >= 0 && newKms <= 4) {
            var newPrice = 40;
        } 

        else if (newKms >= 5 && newKms <= 10) {
            var newPrice = 12 * iKms.value;
        }

        else if (newKms >= 11 && newKms <= 15) {
            var newPrice = 13 * iKms.value;
        }

        else if (newKms >= 16 && newKms <= 20) {
            var newPrice = 14 * iKms.value;
        }

        else if (newKms >= 21 && newKms <= 30) {
            var newPrice = 16 * iKms.value;
        }

        else if (newKms >= 31 && newKms <= 40) {
            var newPrice = 18 * iKms.value;
        }

        else if (newKms >= 41) {
            var noPrice = disPrice.innerHTML("Your location is out of our range, sorry!");
        }

        else {
            var nodefined = disPrice.innerHTML("Please enter valid information!");
        }


          var newFrom = document.getElementById('fromlocation').value;
    var newTo = document.getElementById('tolocation').value;
disPrice.innerHTML = "Your approximate fare from "+ newFrom + " to "+ newTo +" is Rs. " + newPrice;
 }  



