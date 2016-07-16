document.addEventListener('click', function () {
    document.getElementById('hello').innerHTML = 'This is click ' + event.detail;
});
