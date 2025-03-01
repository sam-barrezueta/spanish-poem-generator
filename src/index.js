function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
        strings: ["No hay nadie que, al dar un beso,"],
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);