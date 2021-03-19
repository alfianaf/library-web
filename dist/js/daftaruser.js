fetchdata();
tekan();


function fetchdata(){
  fetch("../../dist/js/user.json")
  .then((response) => response.json())
  .then((json) => {
      console.log("json",json)
    user(json);
  })
  // handling error
  .catch((err) => console.log(err));

}

function user(dataUser) {
  let output = "";

  dataUser.forEach((element) => {
    output += `
      <tr>
        <td class="text-center">${element.id}</td>
        <td class="text-center">${element.nama}</td>
        <td class="text-center">${element.kelamin}</td>
        <td class="text-center">${element.tempat}, ${element.tanggal_lahir}</td>
        <td class="text-center">${element.alamat}</td>
        <td class="text-center">
        
        <button class="btn btn-success btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#editModal" onclick="editData('${element.id-1}')" title="Edit"><i class="fa fa-edit"></i></button>
        <button class="btn btn-danger btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#deleteModal" onclick="deleteData('${element.id-1}')" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
        <button class="btn btn-info btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#topupModal" onclick="topupData('${element.id-1}')" data-placement="top" title="Topup"><i class="fa fa-money-bill-wave"></i></button>
        <button class="btn btn-warning btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#resetModal" onclick="resetData('${element.id-1}')" data-placement="top" title="Reset"><i class="fa fa-key"></i></button>

        </td>
      </tr>
    `;

  });

  const bodyTable = document.getElementById("body-table");
  bodyTable.innerHTML = output;
}
function tekan() {
  document.getElementById("buttonAddUser").onclick = function () {
    addUser();
  };
  document.getElementById("buttonEditUser").onclick = function () {
    editUser();
  };
  document.getElementById("buttonTopUp").onclick = function () {
    topupUser();
  };
}
function topupUser(){
  var namaTopup = document.getElementById("namatopup").value;
  var nominalTopup = document.getElementById("nominaltopup").value;

  namatopup(namaTopup);
  nominaltopup(nominalTopup);

  if (
    namatopup(namaTopup) == true &&
    nominaltopup(nominalTopup) == true

    ){
      swal("Success", "Berhasil Menambahkan Saldo sejumlah "+namaTopup, "success").then(() => {
        window.location = '../admin/daftaruser.html';
    });
    }
}
function namatopup(namaTopup){
  var labelnamaTopup = document.getElementById("labelnamaTopup");
  if (namaTopup == "") {
    labelnamaTopup.innerHTML = "Nama tidak boleh kosong!";
    labelnamaTopup.style.color = "red";
    return false;
  } else {
    labelnamaTopup.innerHTML = "Sesuai!";
    labelnamaTopup.style.color = "green";
    return true;
  }
}
function nominaltopup(nominalTopup){
  var labelnominalTopup = document.getElementById("labelnominalTopup");
  if (nominalTopup == "") {
    labelnominalTopup.innerHTML = "Nominal tidak boleh kosong!";
    labelnominalTopup.style.color = "red";
    return false;
  } else {
    labelnominalTopup.innerHTML = "Sesuai!";
    labelnominalTopup.style.color = "green";
    return true;
  }
}
function addUser(){
  // const formAddUser = document.getElementById("addUserForm");
  var nikUserAdd = document.getElementById("nikUserAdd").value;
  var namaUserAdd = document.getElementById("namaUserAdd").value;
  var kelaminuserAdd = document.getElementById("kelaminuserAdd").value;
  var tempatUserAdd = document.getElementById("tempatUserAdd").value;
  var tanggal_lahiruserAdd = document.getElementById("tanggal_lahiruserAdd").value;
  var alamatUserAdd = document.getElementById("alamatUserAdd").value;
  var fotoUserAdd = document.getElementById("fotoUserAdd").value;
  nikAdd(nikUserAdd);
  namaAdd(namaUserAdd);
  kelaminAdd(kelaminuserAdd);
  tempatAdd(tempatUserAdd);
  tanggal_lahirAdd(tanggal_lahiruserAdd);
  alamatAdd(alamatUserAdd);
  fotoAdd(fotoUserAdd);
  if (nikAdd(nikUserAdd)== true &&
  namaAdd(namaUserAdd) == true &&
  kelaminAdd(kelaminuserAdd) == true &&
  tempatAdd(tempatUserAdd) == true &&
  tanggal_lahirAdd(tanggal_lahiruserAdd) == true &&
  alamatAdd(alamatUserAdd) == true &&
  fotoAdd(fotoUserAdd)
    ){
      swal("Success", "Berhasil Menambahkan User", "success").then(() => {
        window.location = '../admin/daftaruser.html';
    });
      
    }
}
function fotoAdd(fotoUserAdd){
  var labelFileAdd = document.getElementById("labelFileAdd");
  if (fotoUserAdd == "") {
    labelFileAdd.innerHTML = "Foto tidak boleh kosong!";
    labelFileAdd.style.color = "red";
    return false;
  } else {
    labelFileAdd.innerHTML = "Sesuai!";
    labelFileAdd.style.color = "green";
    return true;
  }
}
function alamatAdd(alamatUserAdd){
  var labelAlamatAdd = document.getElementById("labelAlamatAdd");
  if (alamatUserAdd == "") {
    labelAlamatAdd.innerHTML = "Alamat tidak boleh kosong!";
    labelAlamatAdd.style.color = "red";
    return false;
  } else {
    labelAlamatAdd.innerHTML = "Sesuai!";
    labelAlamatAdd.style.color = "green";
    return true;
  }
}
function tanggal_lahirAdd(tanggal_lahiruserAdd){
  var labelTanggalAdd = document.getElementById("labelTanggalAdd");
  if (tanggal_lahiruserAdd == "") {
    labelTanggalAdd.innerHTML = "Tanggal Lahir tidak boleh kosong!";
    labelTanggalAdd.style.color = "red";
    return false;
  } else {
    labelTanggalAdd.innerHTML = "Sesuai!";
    labelTanggalAdd.style.color = "green";
    return true;
  }
}
function tempatAdd(tempatUserAdd){
  var labelTempatAdd = document.getElementById("labelTempatAdd");
  if (tempatUserAdd == "") {
    labelTempatAdd.innerHTML = "Tempat Lahir tidak boleh kosong!";
    labelTempatAdd.style.color = "red";
    return false;
  } else {
    labelTempatAdd.innerHTML = "Sesuai!";
    labelTempatAdd.style.color = "green";
    return true;
  }
}
function kelaminAdd(kelaminuserAdd){
  var labelKelaminAdd = document.getElementById("labelKelaminAdd");
  if (kelaminuserAdd == "Pilih Salah Satu") {
    labelKelaminAdd.innerHTML = "Jenis Kelamin tidak boleh kosong!";
    labelKelaminAdd.style.color = "red";
    return false;
  } else {
    labelKelaminAdd.innerHTML = "Sesuai!";
    labelKelaminAdd.style.color = "green";
    return true;
  }
}
function namaAdd(namaUserAdd){
  var labelNamaAdd = document.getElementById("labelNamaAdd");
  if (namaUserAdd == "") {
    labelNamaAdd.innerHTML = "Nama tidak boleh kosong!";
    labelNamaAdd.style.color = "red";
    return false;
  } else {
    labelNamaAdd.innerHTML = "Sesuai!";
    labelNamaAdd.style.color = "green";
    return true;
  }
}
function nikAdd(nikUserAdd){
  var labelNikAdd = document.getElementById("labelNikAdd");
  if (nikUserAdd == "") {
    labelNikAdd.innerHTML = "NIK tidak boleh kosong!";
    labelNikAdd.style.color = "red";
    return false;
  } else {
    labelNikAdd.innerHTML = "Sesuai!";
    labelNikAdd.style.color = "green";
    return true;
  }
}
function editUser(){
  const formEditUser = document.getElementById("editUserForm");
  var namaEdit = document.getElementById("nama").value;
  var kelaminEdit = document.getElementById("kelamin").value;
  var tempatEdit = document.getElementById("tempat").value;
  var tanggal_lahirEdit = document.getElementById("tanggal_lahir").value;
  var alamatEdit = document.getElementById("alamat").value;
  namaedit(namaEdit);
  kelaminedit(kelaminEdit);
  tempatedit(tempatEdit);
  tanggal_lahiredit(tanggal_lahirEdit);
  alamatedit(alamatEdit);
  if (
    namaedit(namaEdit) == true &&
    kelaminedit(kelaminEdit) == true &&
    tempatedit(tempatEdit) == true &&
    tanggal_lahiredit(tanggal_lahirEdit) == true &&
    alamatedit(alamatEdit) == true
    ){
      swal("Success", "Berhasil Mengedit Buku", "success").then(() => {
        window.location = '../admin/daftaruser.html';
    });
      
    }
}
function namaedit(namaEdit){
  var labelNamaEdit = document.getElementById("labelNamaEdit");
  if (namaEdit == "") {
    labelNamaEdit.innerHTML = "Nama tidak boleh kosong!";
    labelNamaEdit.style.color = "red";
    return false;
  } else {
    labelNamaEdit.innerHTML = "Sesuai!";
    labelNamaEdit.style.color = "green";
    return true;
  }
}
function kelaminedit(kelaminEdit){
  var labelKelaminEdit = document.getElementById("labelKelaminEdit");
  if (kelaminEdit == "Pilih Salah Satu") {
    labelKelaminEdit.innerHTML = "Jenis Kelamin tidak boleh kosong!";
    labelKelaminEdit.style.color = "red";
    return false;
  } else {
    labelKelaminEdit.innerHTML = "Sesuai!";
    labelKelaminEdit.style.color = "green";
    return true;
  }
}
function tempatedit(tempatEdit){
  var labelTempatLahirEdit = document.getElementById("labelTempatLahirEdit");
  if (tempatEdit == "") {
    labelTempatLahirEdit.innerHTML = "Tempat Lahir tidak boleh kosong!";
    labelTempatLahirEdit.style.color = "red";
    return false;
  } else {
    labelTempatLahirEdit.innerHTML = "Sesuai!";
    labelTempatLahirEdit.style.color = "green";
    return true;
  }
}
function tanggal_lahiredit(tanggal_lahirEdit){
  var labelTanggalLahirEdit = document.getElementById("labelTanggalLahirEdit");
  if (tanggal_lahirEdit == "") {
    labelTanggalLahirEdit.innerHTML = "Tanggal Lahir tidak boleh kosong!";
    labelTanggalLahirEdit.style.color = "red";
    return false;
  } else {
    labelTanggalLahirEdit.innerHTML = "Sesuai!";
    labelTanggalLahirEdit.style.color = "green";
    return true;
  }
}
function alamatedit(alamatEdit){
  var labelAlamatEdit = document.getElementById("labelAlamatEdit");
  if (alamatEdit == "") {
    labelAlamatEdit.innerHTML = "Alamat tidak boleh kosong!";
    labelAlamatEdit.style.color = "red";
    return false;
  } else {
    labelAlamatEdit.innerHTML = "Sesuai!";
    labelAlamatEdit.style.color = "green";
    return true;
  }
}
function addData(){
  
}
function topupData(id) {
  fetch("../../dist/js/user.json")
  .then((response) => response.json())
  .then((json) => {
    document.getElementById('namatopup').value=json[id].nama;
  })
  // handling error
  .catch((err) => console.log(err));
}
function editData(id) {
  fetch("../../dist/js/user.json")
  .then((response) => response.json())
  .then((json) => {
    document.getElementById('nama').value=json[id].nama;
    document.getElementById('kelamin').value=json[id].kelamin;
    document.getElementById('tempat').value=json[id].tempat;
    document.getElementById('tanggal_lahir').value=json[id].tanggal_lahir;
    document.getElementById('alamat').value=json[id].alamat;
  })
  // handling error
  .catch((err) => console.log(err));
}
function deleteData(id){
    fetch("../../dist/js/user.json")
    .then((response) => response.json())
    .then((json) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover the data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Success", "Berhasil Menghapus Data "+json[id].nama, "success").then(() => {
            window.location = '../admin/daftaruser.html';
        });
        }
      });
          
    })
    // handling error
    .catch((err) => console.log(err));
}
function resetData(id){
  fetch("../../dist/js/user.json")
  .then((response) => response.json())
  .then((json) => {
    swal({
      title: "Are you sure?",
      text: "Password akan direset ke pengaturan default!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Success", "Berhasil Mereset Password "+json[id].nama, "success").then(() => {
          window.location = '../admin/daftaruser.html';
      });
      }
    });
        
  })
  // handling error
  .catch((err) => console.log(err));
}