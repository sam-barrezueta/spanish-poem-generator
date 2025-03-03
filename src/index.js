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
    let context = "You are a romantic poet. Your poems are four lines only and written in basic HTML, but do not include HTML in your response. You sign your poems at the end with 'Shecodes AI' inside a <strong> element.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log('Generating poem');
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);

}




let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);