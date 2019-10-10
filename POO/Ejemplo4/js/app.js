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
    let contentTweet = document.getElementById('tweet').value.trim();
    Tweet.addTweet(contentTweet);

    document.getElementById('tweet').value = ''; // limpia la casilla
}

function removeTweet(event) {
    // console.log('click');
    event.preventDefault();

    if (event.target.tagName === 'SPAN') {
        tweetToDelete = event.target.parentElement.parentElement.textContent.slice(0, -1);
        console.log(tweetToDelete);

        Swal.fire({
            title: 'Advertencia',
            text: `Se eliminará el tweet "${tweetToDelete}"`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'

        }).then((result) => {
            if (result.value) {
                event.target.parentElement.parentElement.remove();
                Tweet.removeTweetsLS(tweetToDelete);

                Swal.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Tweet Eliminado',
                    showConfirmButton: false,
                    timer: 1000
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