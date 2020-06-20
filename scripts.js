function showImages(responseJson) {
    console.log(responseJson.message);
    $(".imageBox").append()
}

function getDogPhoto() {
    let userInput = $("#dogBreed").val()
    console.log(userInput);

    fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
        .then(response => response.json())
        .then(responseJson => {
            if (response.status === 200) {
                showImages(responseJson, userInput); 
            } else {
                throw new Error("img not found");
            }
        })
        .catch(error => alert(`an error has occured`))
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        getDogPhoto();
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});