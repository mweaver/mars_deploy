let textbox = document.getElementById('texthere');

document.getElementById('mybutton').addEventListener('click', buttonHandler);

function buttonHandler() {
    console.log('clicked me!');

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById('texthere').innerHTML = xhttp.responseText;
        }
    };
    xhttp.open('GET', '/users', true);
    xhttp.send();
}
