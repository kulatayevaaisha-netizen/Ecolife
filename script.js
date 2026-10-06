// Жобаны көру батырмасы

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});



// Сәлемдесу батырмасы

const helloBtn = document.getElementById("helloBtn");

const message = document.getElementById("message");


helloBtn.addEventListener("click", function () {

    message.textContent =
        "Сәлем! JavaScript дұрыс жұмыс істеп тұр! 😊";

    message.style.color = "#543794";

    message.style.fontWeight = "bold";

});