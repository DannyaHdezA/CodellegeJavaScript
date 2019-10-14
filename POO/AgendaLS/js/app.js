const listaTweets = document.getElementById('lista-tweets');
let tweetToDelete = '';

EventListener();

function EventListener() {

    document.addEventListener('DOMContentLoaded', LocalSrorageReady);
    document.querySelector('#formulario').addEventListener('submit', addTweet);
    listaTweets.addEventListener('click', removeTweet);

}

let Tweet = new tweet();

function addTweet() {
    let contentNombre = document.getElementById('nombre').value.trim(); // trim quita los espacios
    let contentTelefono = document.getElementById('telefono').value.trim(); // trim quita los espacios
    Tweet.addTweet(contentNombre, contentTelefono);


    document.getElementById('nombre').value = ''; // limpia la casilla
    document.getElementById('telefono').value = ''; // limpia la casilla
}

function removeTweet(event) {
    // console.log('click');
    event.preventDefault();

    if (event.target.tagName === 'SPAN') {
        tweetToDelete = event.target.parentElement.parentElement.textContent.slice(0, -1);
        console.log(tweetToDelete);
        // desea eliminar....
        Swal.fire({
            title: 'Advertencia',
            text: `Desea eliminar el contacto: "${tweetToDelete}"`,
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'

        }).then((result) => {
            if (result.value) { // eliminado
                event.target.parentElement.parentElement.remove();
                Tweet.removeTweetsLS(tweetToDelete);

                Swal.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Contacto Eliminado',
                    showConfirmButton: false,
                    timer: 700
                })

            }
        })


    }
}

function LocalSrorageReady() {
    let tweets = Tweet.getLocalStorage();

    tweets.forEach(function(tweet) {
        Tweet.createTweet(tweet)

    });

}