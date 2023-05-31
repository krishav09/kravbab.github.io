let establishedDate = new Date("November 30, 2022").getTime();

function startTimer() {
    let currentDate = new Date().getTime();
    let timeDiff = currentDate - establishedDate;

    let months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    let remainingDays = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("months").innerHTML = (months.toString().padStart(2, "0"));
    document.getElementById("days").innerHTML = remainingDays.toString().padStart(2, "0");
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
}

setInterval(startTimer, 1000);

let check = document.getElementById('check');
let qtn = document.getElementById('qtn');


check.addEventListener('click', function () {

    var nammme = document.getElementById('namme').value;
    if (nammme === 'babisha') {
        qtn.innerHTML = "I mean, What i call you?";
    }
    else if (nammme === 'Babisha') {
        qtn.innerHTML = "I mean, What i call you?";
    }
    else if (nammme === 'bab') {
        qtn.innerHTML = "No, What i call you Bitch?";
    }
    else if (nammme === "bubu") {
        qtn.innerHTML= "ahahahhahah, i love you bubu!!! umwhaaaaaaaa"
        
    }
    else{
        qtn.innerHTML = 'Asshole, I am asking for my girlfriend name';
    }

    
})