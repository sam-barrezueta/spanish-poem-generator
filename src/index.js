function displayPoem(response) {
    console.log(response.data.answer);


    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


function generatePoem(event) {
    event.preventDefault();

    let poemTopic = document.querySelector("#poem-topic");
    let apiKey = "5477t35ad40f43989809bfo4a0ef16c2";
    let prompt = `Generate a Spanish  poem about ${poemTopic.value}`;
    let context = "You are a romantic poet. Your poems are four lines only, written in basic HTML, but do not include HTML in your response. The four lines of the poem are wrapped in a <p> element, and each line separated by <br> element. You sign your poems at the end with 'Shecodes AI' inside a <strong> element.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `Generating Spanish poem about ${poemTopic.value}...`;

    console.log('Generating poem');
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);

}




let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);