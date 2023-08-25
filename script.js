
function getConfirmation() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password-confirmation").value;

    console.log(password, confirmPassword);

    let errorMessage = document.getElementById("error-message");

    if (password.length != 0) {
        if (password === confirmPassword) {
            errorMessage.textContent = "Passwords match";
            errorMessage.style.backgroundColor = "#929619";
            return true;
        }
        else {
            errorMessage.textContent = "Passwords don't match";
            errorMessage.style.backgroundColor = "red";
            return false;
        }
    }
}