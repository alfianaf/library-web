// =========== FORM VALIDATION ================= //

document.getElementById("login-button").onclick = function() {
    loginValidation()
};

function loginValidation() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    const form = document.getElementById("login-form");

    emailChecker(email);
    passwordChecker(password);

    if (emailChecker(email) === true &&
        passwordChecker(password) === true) {
        Swal.fire({
                icon: 'success',
                title: 'BERHASIL!!!',
                text: 'Selamat datang di E-Library'
            })
            .then(() => {
                window.location = '../peminjam/catalog.html';
            });
        form.reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'GAGAL!!!',
            text: 'Silahkan cek kembali email dan password Anda ....'
        });
    }
}

function emailChecker(email) {
    var emailHelp = document.getElementById("emailHelp");
    if (email == "") {
        emailHelp.innerHTML = "Email tidak boleh kosong!"
        emailHelp.style.color = "red";
        return false;
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) == false) {
        emailHelp.innerHTML = "Email tidak valid!"
        emailHelp.style.color = "red";
        return false;
    } else {
        emailHelp.innerHTML = "Sesuai!"
        emailHelp.style.color = "green";
        return true;
    }
}

function passwordChecker(password) {
    var passwordHelp = document.getElementById("passwordHelp");
    if (password === "") {
        passwordHelp.innerHTML = "Password tidak boleh kosong!"
        passwordHelp.style.color = "red";
        return false;
    } else if (password.length < 8) {
        passwordHelp.innerHTML = "Minimal 8 karakter"
        passwordHelp.style.color = "red";
        return false;
    } else {
        passwordHelp.innerHTML = "Sesuai!"
        passwordHelp.style.color = "green";
        return true;
    }
}