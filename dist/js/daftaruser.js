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
  document.getElementById("buttonEditUser").onclick = function () {
    editUser();
    modal('hide');
  };
  document.getElementById("buttonTopUp").onclick = function () {
    topupUser();
    modal('hide');
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
      swal("Success", "Berhasil Menambahkan Saldo sejumlah "+namaTopup, "success");
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
      swal("Success", "Berhasil Mengedit Buku", "success");
      
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
          swal("Success", "Berhasil Menghapus Data "+json[id].nama, "success");
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
        swal("Success", "Berhasil Mereset Password "+json[id].nama, "success");
      }
    });
        
  })
  // handling error
  .catch((err) => console.log(err));
}