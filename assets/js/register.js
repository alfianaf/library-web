// =========== FORM VALIDATION ================= //

document.getElementById("reg-button").onclick = function() {
    formValidation()
};

function formValidation() {
    var nik = document.getElementById("nik").value;
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var telp = document.getElementById("telp").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    const form = document.getElementById("reg-form");

    nikChecker(nik);
    fullnameChecker(fullname);
    emailChecker(email);
    telpChecker(telp);
    passwordChecker(password);
    confirmPasswordChecker(password, cpassword);

    if (nikChecker(nik) === true &&
        fullnameChecker(fullname) === true &&
        emailChecker(email) === true &&
        telpChecker(telp) === true &&
        passwordChecker(password) === true &&
        confirmPasswordChecker(password, cpassword) === true) {
        Swal.fire({
                icon: 'success',
                title: 'BERHASIL!!!',
                text: 'Akun Anda berhasil didaftarkan ...'
            })
            .then(() => {
                window.location = '../login.html';
            });
        form.reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'GAGAL!!!',
            text: 'Silahkan cek kembali kelengkapan formulir registrasi ...'
        });
    }
}

function nikChecker(nik) {
    var nikHelp = document.getElementById("nikHelp");
    if (nik == "") {
        nikHelp.innerHTML = "NIK tidak boleh kosong!"
        nikHelp.style.color = "red";
        return false;
    } else if (nik.length < 16) {
        nikHelp.innerHTML = "NIK tidak valid!"
        nikHelp.style.color = "red";
        return false;
    } 
    // else if (isNaN(nik) === true) {
    //     nikHelp.innerHTML = "NIK harus angka!"
    //     nikHelp.style.color = "red";
    //     return false;} 
    else {
        nikHelp.innerHTML = "Sesuai!"
        nikHelp.style.color = "green";
        return true;
    }
}

function fullnameChecker(fullname) {
    var fullnameHelp = document.getElementById("fullnameHelp");
    if (fullname == "") {
        fullnameHelp.innerHTML = "Nama tidak boleh kosong!"
        fullnameHelp.style.color = "red";
        return false;
    } else {
        fullnameHelp.innerHTML = "Sesuai!"
        fullnameHelp.style.color = "green";
        return true;
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

function telpChecker(telp) {
    var telpHelp = document.getElementById("telpHelp");
    if (telp == "") {
        telpHelp.innerHTML = "Telepon tidak boleh kosong!"
        telpHelp.style.color = "red";
        return false;
    } 
    // else if (isNaN(telp) === true) {
    //     telpHelp.innerHTML = "Telepon harus angka!"
    //     telpHelp.style.color = "red";
    //     return false;} 
    else {
        telpHelp.innerHTML = "Sesuai!"
        telpHelp.style.color = "green";
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

function confirmPasswordChecker(password, cpassword) {
    var passwordHelp = document.getElementById("cpasswordHelp");
    if (cpassword === "") {
        passwordHelp.innerHTML = "Konfirmasi Password tidak boleh kosong!"
        passwordHelp.style.color = "red";
        return false;
    } else if (password !== cpassword) {
        passwordHelp.innerHTML = "Konfirmasi Password tidak sesuai!"
        passwordHelp.style.color = "red";
        return false;
    } else {
        passwordHelp.innerHTML = "Sesuai!"
        passwordHelp.style.color = "green";
        return true;
    }
}