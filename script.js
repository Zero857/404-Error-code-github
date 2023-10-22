function searchGitHub() {
    let query = document.getElementById('search').value;
    if(query) {
        window.location.href = `https://github.com/search?q=${query}`;
    }
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchGitHub();
    }
}

function searchGitHub() {
    let query = document.getElementById('zevit').value;
    if (query) {
        window.location.href = `https://github.com/search?q=${query}`;
    }
}
