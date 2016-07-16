var firstNameInput = document.getElementById('firstname');
document.addEventListener('submit', function () {
    event.preventDefault();
    console.log(firstNameInput.value);
});

var lastNameInput = document.getElementById('lastname');
document.addEventListener('submit', function () {
    event.preventDefault();
    console.log(lastNameInput.value);
});

var emailInput = document.getElementById('email');
document.addEventListener('submit', function () {
    event.preventDefault();
    console.log(emailInput.value);
});

var messageInput = document.getElementById('message');
document.addEventListener('submit', function () {
    event.preventDefault();
    console.log(messageInput.value);
});
