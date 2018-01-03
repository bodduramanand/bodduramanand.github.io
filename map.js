// Google Maps 

function initMap() {

    var origin = document.getElementById('fromlocation');
    var destination = document.getElementById('tolocation');
    
    var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({  

        nowStart: origin,
        nowEnd: destination,
        travelmode: driving,
        unitSystem: kms,
        avoidHighways: false,
        avoidTolls: true,
     });

    function(response, status) {
        if (status !== 'OK') {
            alert("Error was: " + status);
        }

        else {
            var nowOrigin = response.origin;
            var nowDestination = response.destination;

            var outPut = document.getElementById('output');
            outPut.innerHTML = "Your approximate distance from " + nowOrigin + " to " + nowDestination + " is " + results.distance.text + " and duration is " + results.duration.text;
        }
    }
}
