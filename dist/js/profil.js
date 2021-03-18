// =============== Pemanggilan Fungsi ===================== //
// button untuk edit profil
document.getElementById("edit-profil-btn").onclick = function() {
    formValidationForEditProfil()
};

// button untuk ganti password
document.getElementById("res-pass-btn").onclick = function() {
    formValidationForChangePassword()
};

//  ====================== Fungsi ========================== //
// fungsi validasi dari form edit profil
function formValidationForEditProfil() {
    var fullname = document.getElementById("fullname").value;
    var gender = document.getElementById("gender").value;
    var tempat = document.getElementById("tempat-lahir").value;
    var tanggal = document.getElementById("tanggal-lahir").value;
    var alamat = document.getElementById("alamat").value;
    var telp = document.getElementById("telp").value;
    const form = document.getElementById("edit-profil-form");

    fullnameChecker(fullname);
    genderChecker(gender);
    tempatLahirChecker(tempat);
    tanggalLahirChecker(tanggal);
    addressChecker(alamat);
    telpChecker(telp);

    if (fullnameChecker(fullname) === true &&
        genderChecker(gender) === true &&
        tempatLahirChecker(tempat) === true &&
        tanggalLahirChecker(tanggal) === true &&
        addressChecker(alamat) === true &&
        telpChecker(telp) === true) {
        Swal.fire({
                icon: 'success',
                title: 'SUKSES!!!',
                text: 'Data berhasil diubah ...'
            })
            .then(() => {
                window.location = '../admin/profil.html';
            });
        form.reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'GAGAL!!!',
            text: 'Silahkan cek kembali kelengkapan formulir ...'
        });
    }
}

// fungsi untuk validasi ganti password
function formValidationForChangePassword() {
    var password = document.getElementById("password").value;
    var newpassword = document.getElementById("password-baru").value;
    var newcpassword = document.getElementById("cpassword-baru").value;
    const form = document.getElementById("ganti-password-form");

    passwordChecker(password);
    newPasswordChecker(newpassword);
    newConfirmPasswordChecker(newcpassword);

    if (passwordChecker(password) === true &&
        newPasswordChecker(newpassword) === true &&
        newConfirmPasswordChecker(newcpassword, newcpassword) === true) {
        Swal.fire({
                icon: 'success',
                title: 'SUKSES!!!',
                text: 'Kata sandi berhasil diubah ...'
            })
            .then(() => {
                window.location = '../peminjam/profil.html';
            });
        form.reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'GAGAL!!!',
            text: 'Silahkan cek kembali kelengkapan formulir ...'
        });
    }
}

function fullnameChecker(fullname) {
    var fullnameHelp = document.getElementById("fullnameHelp");
    if (fullname === "") {
        fullnameHelp.innerHTML = "Nama tidak boleh kosong!"
        fullnameHelp.style.color = "red";
        return false;
    } else {
        fullnameHelp.innerHTML = "Sesuai!"
        fullnameHelp.style.color = "green";
        return true;
    }
}

function genderChecker(gender) {
    var genderHelp = document.getElementById("genderHelp");
    if (gender === "") {
        genderHelp.innerHTML = "Jenis kelamin tidak boleh kosong!"
        genderHelp.style.color = "red";
        return false;
    } else {
        genderHelp.innerHTML = "Sesuai!"
        genderHelp.style.color = "green";
        return true;
    }
}

function tempatLahirChecker(tempat) {
    var tempatHelp = document.getElementById("tempatLahirHelp");
    if (tempat === "") {
        tempatHelp.innerHTML = "Tempat lahir tidak boleh kosong!"
        tempatHelp.style.color = "red";
        return false;
    } else {
        tempatHelp.innerHTML = "Sesuai!"
        tempatHelp.style.color = "green";
        return true;
    }
}

function tanggalLahirChecker(tanggal) {
    var tanggalHelp = document.getElementById("tanggalLahirHelp");
    if (tanggal === "") {
        tanggalHelp.innerHTML = "Tanggal lahir tidak boleh kosong!"
        tanggalHelp.style.color = "red";
        return false;
    } else {
        tanggalHelp.innerHTML = "Sesuai!"
        tanggalHelp.style.color = "green";
        return true;
    }
}

function addressChecker(address) {
    var addressHelp = document.getElementById("alamatHelp");
    if (address === "") {
        addressHelp.innerHTML = "Alamat tidak boleh kosong!"
        addressHelp.style.color = "red";
        return false;
    } else {
        addressHelp.innerHTML = "Sesuai!"
        addressHelp.style.color = "green";
        return true;
    }
}

function telpChecker(telp) {
    var telpHelp = document.getElementById("telpHelp");
    if (telp == "") {
        telpHelp.innerHTML = "Telepon tidak boleh kosong!"
        telpHelp.style.color = "red";
        return false;
        // } else if (isNaN(telp) === true) {
        //     telpHelp.innerHTML = "Telepon harus angka!"
        //     telpHelp.style.color = "red";
        //     return false;
    } else {
        telpHelp.innerHTML = "Sesuai!"
        telpHelp.style.color = "green";
        return true;
    }
}

function passwordChecker(password) {
    var passwordHelp = document.getElementById("passwordHelp");
    if (password === "") {
        passwordHelp.innerHTML = "Kata sandi saat ini tidak boleh kosong!"
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

function newPasswordChecker(password) {
    var passwordHelp = document.getElementById("passwordBaruHelp");
    if (password === "") {
        passwordHelp.innerHTML = "Kata sandi baru tidak boleh kosong!"
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

function newConfirmPasswordChecker(password, cpassword) {
    var passwordHelp = document.getElementById("cpasswordBaruHelp");
    if (cpassword === "") {
        passwordHelp.innerHTML = "Konfirmasi kata sandi baru tidak boleh kosong!"
        passwordHelp.style.color = "red";
        return false;
    } else if (password !== cpassword) {
        passwordHelp.innerHTML = "Konfirmasi kata sandi tidak sesuai!"
        passwordHelp.style.color = "red";
        return false;
    } else {
        passwordHelp.innerHTML = "Sesuai!"
        passwordHelp.style.color = "green";
        return true;
    }
}