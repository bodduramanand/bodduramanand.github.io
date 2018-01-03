
// Reset Button

function resetForm() {
document.getElementById("disform").reset();
document.getElementById("price").innerHTML = null;
}

// News Letter

function newsLetter() {
    var eMail = document.getElementById('emailnow');
    var newEmail = eMail.value;

    if (newEmail == null) {
        window.alert("Plese enter your email.");
    } else {
        window.alert("Subscribed.");
    }
}



