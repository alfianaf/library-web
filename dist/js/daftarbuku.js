fetchdata();
tekan();


function fetchdata() {
  fetch("../../dist/js/buku.json")
    .then((response) => response.json())
    .then((json) => {
      console.log("json", json);
      user(json);
    })
    // handling error
    .catch((err) => console.log(err));
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function user(dataUser) {
  let output = "";

  dataUser.forEach((element) => {
    output += `
      <tr>
        <td class="text-center">${element.id}</td>
        <td class="text-center"><img src="${
          element.sampul
        }" height=150 width=100></img></td>
        <td class="text-center">${element.kode}</td>
        <td class="text-center">${element.judul}</td>
        <td class="text-center">${element.kategori}</td>
        <td class="text-center">${element.genre}</td>
        <td class="text-center">Rp ${numberWithCommas(element.harga)}</td>
        <td class="text-center">${element.jumlah}</td>
        <td class="text-center">${element.lokasi}</td>
        <td class="text-center">
        <button class="btn btn-success btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#editModal" onclick="editData('${
          element.id - 1
        }')" title="Edit"><i class="fa fa-edit"></i></button>
        <button class="btn btn-danger btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#deleteModal" onclick="deleteData('${
          element.id - 1
        }')" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>

        </td>
      </tr>
    `;
  });

  const bodyTable = document.getElementById("body-table");
  bodyTable.innerHTML = output;
}
function tekan() {
  document.getElementById("buttonTambahBuku").onclick = function () {
    addBuku();
  };
  document.getElementById("buttonEditBuku").onclick = function () {
    editBuku();
    modal('hide');
  };
  document.getElementById("buttonSewaBuku").onclick = function () {
    sewaBuku();
    modal('hide');
  };
}
function editBuku(){
  const formBuku = document.getElementById("addbuku-form");
  const modalEdit = document.getElementById("editModal");
  var judulBuku = document.getElementById("judulBuku").value;
  var kategoriBuku = document.getElementById("kategoriBuku").value;
  var genreBuku = document.getElementById("genreBuku").value;
  var jumlahBuku = document.getElementById("jumlahBuku").value;
  var lokasiBuku = document.getElementById("lokasiBuku").value;
  judulbuku(judulBuku);
  kategoribuku(kategoriBuku);
  genrebuku(genreBuku);
  jumlahbuku(jumlahBuku);
  lokasibuku(lokasiBuku);
  if (
    jumlahbuku(jumlahBuku) == true &&
    judulbuku(judulBuku) == true &&
    genrebuku(genreBuku) == true &&
    kategoribuku(kategoriBuku) == true &&
    lokasibuku(lokasiBuku) == true
    ){
      swal("Success", "Berhasil Mengedit Buku", "success").then(() => {
        window.location = '../admin/daftarbuku.html';
    });
      formBuku.reset();
      
    }
}
function addBuku() {
  const formBuku = document.getElementById("addbuku-form");

  var kodeBuku = document.getElementById("kodeBuku").value;
  var judulBuku = document.getElementById("judulBuku").value;
  var pengarangBuku = document.getElementById("pengarangBuku").value;
  var penerbitBuku = document.getElementById("penerbitBuku").value;
  var datepicker = document.getElementById("datepicker").value;
  var kategoriBuku1 = document.getElementById("kategoriBuku1").value;
  var genreBuku1 = document.getElementById("genreBuku1").value;
  var isbnBuku = document.getElementById("isbnBuku").value;
  var halamanBuku = document.getElementById("halamanBuku").value;
  var jumlahBuku1 = document.getElementById("jumlahBuku1").value;
  var lokasiBuku1 = document.getElementById("lokasiBuku1").value;
  var deskripsiBuku1 = document.getElementById("deskripsiBuku1").value;
  var sampulBuku = document.getElementById("sampulBuku").value;
  var hargaBuku1 = document.getElementById("hargaBuku1").value;

  kodebuku(kodeBuku);
  judulbuku1(judulBuku);
  pengarangbuku(pengarangBuku);
  penerbitbuku(penerbitBuku);
  datePicker(datepicker);
  kategoribuku1(kategoriBuku1);
  genrebuku1(genreBuku1);
  isbnbuku(isbnBuku);
  halamanbuku(halamanBuku);
  jumlahbuku1(jumlahBuku1);
  lokasibuku1(lokasiBuku1);
  deskripsibuku1(deskripsiBuku1);
  sampulbuku(sampulBuku);
  hargabuku1(hargaBuku1);

  if (
    kodebuku(kodeBuku) == true &&
    judulbuku1(judulBuku) == true &&
    pengarangbuku(pengarangBuku) == true &&
    penerbitbuku(penerbitBuku) == true &&
    datePicker(datepicker) == true &&
    kategoribuku1(kategoriBuku1) == true &&
    genrebuku1(genreBuku1) == true &&
    isbnbuku(isbnBuku) == true &&
    halamanbuku(halamanBuku) == true &&
    jumlahbuku1(jumlahBuku1) == true &&
    lokasibuku1(lokasiBuku1) == true &&
    deskripsibuku1(deskripsiBuku1) == true &&
    sampulbuku(sampulBuku) == true &&
    hargabuku1(hargaBuku1) == true
  ) {
    swal("Success", "Berhasil Menambahkan Buku", "success").then(() => {
      window.location = '../admin/daftarbuku.html';
  });
    formBuku.reset();
  }
}
function hargabuku1(hargaBuku1) {
  var labelHarga1 = document.getElementById("labelHarga1");
  if (hargaBuku1 == "") {
    labelHarga1.innerHTML = "Harga Buku tidak boleh kosong!";
    labelHarga1.style.color = "red";
    return false;
  } else {
    labelHarga1.innerHTML = "Sesuai!";
    labelHarga1.style.color = "green";
    return true;
  }
}
function hargabuku(hargaBuku) {
  var labelHarga = document.getElementById("labelHarga");
  if (hargaBuku == "") {
    labelHarga.innerHTML = "Harga Buku tidak boleh kosong!";
    labelHarga.style.color = "red";
    return false;
  } else {
    labelHarga.innerHTML = "Sesuai!";
    labelHarga.style.color = "green";
    return true;
  }
}
function judulbuku1(judulBuku) {
  var labelJudul = document.getElementById("labelJudul1");
  if (judulBuku == "") {
    labelJudul.innerHTML = "Judul Buku tidak boleh kosong!";
    labelJudul.style.color = "red";
    return false;
  } else {
    labelJudul.innerHTML = "Sesuai!";
    labelJudul.style.color = "green";
    return true;
  }
}
function judulbuku(judulBuku) {
  var labelJudul = document.getElementById("labelJudul");
  if (judulBuku == "") {
    labelJudul.innerHTML = "Judul Buku tidak boleh kosong!";
    labelJudul.style.color = "red";
    return false;
  } else {
    labelJudul.innerHTML = "Sesuai!";
    labelJudul.style.color = "green";
    return true;
  }
}
function pengarangbuku(pengarangBuku) {
  var labelPengarang = document.getElementById("labelPengarang");
  if (pengarangBuku == "") {
    labelPengarang.innerHTML = "Pengarang Buku tidak boleh kosong!";
    labelPengarang.style.color = "red";
    return false;
  } else {
    labelPengarang.innerHTML = "Sesuai!";
    labelPengarang.style.color = "green";
    return true;
  }
}
function penerbitbuku(penerbitBuku) {
  var labelPenerbit = document.getElementById("labelPenerbit");

  if (penerbitBuku == "") {
    labelPenerbit.innerHTML = "Penerbit Buku tidak boleh kosong!";
    labelPenerbit.style.color = "red";
    return false;
  } else {
    labelPenerbit.innerHTML = "Sesuai!";
    labelPenerbit.style.color = "green";
    return true;
  }
}
function datePicker(datepicker) {
  var labelTanggal = document.getElementById("labelTanggal");

  if (datepicker == "") {
    labelTanggal.innerHTML = "Tanggal tidak boleh kosong!";
    labelTanggal.style.color = "red";
    return false;
  } else {
    labelTanggal.innerHTML = "Sesuai!";
    labelTanggal.style.color = "green";
    return true;
  }
}
function kategoribuku1(kategoriBuku1) {
  var labelKategori = document.getElementById("labelKategori1");

  if (kategoriBuku1 == "Pilih Salah Satu") {
    labelKategori.innerHTML = "Kategori tidak boleh kosong!";
    labelKategori.style.color = "red";
    return false;
  } else {
    labelKategori.innerHTML = "Sesuai!";
    labelKategori.style.color = "green";
    return true;
  }
}
function kategoribuku(kategoriBuku) {
  var labelKategori = document.getElementById("labelKategori");

  if (kategoriBuku == "Pilih Salah Satu") {
    labelKategori.innerHTML = "Kategori tidak boleh kosong!";
    labelKategori.style.color = "red";
    return false;
  } else {
    labelKategori.innerHTML = "Sesuai!";
    labelKategori.style.color = "green";
    return true;
  }
}
function genrebuku1(genreBuku1) {
  var labelGenre1 = document.getElementById("labelGenre1");

  if (genreBuku1 == "Pilih Salah Satu") {
    labelGenre1.innerHTML = "Genre tidak boleh kosong!";
    labelGenre1.style.color = "red";
    return false;
  } else {
    labelGenre1.innerHTML = "Sesuai!";
    labelGenre1.style.color = "green";
    return true;
  }
}
function genrebuku(genreBuku) {
  var labelGenre = document.getElementById("labelGenre");

  if (genreBuku == "Pilih Salah Satu") {
    labelGenre.innerHTML = "Genre tidak boleh kosong!";
    labelGenre.style.color = "red";
    return false;
  } else {
    labelGenre.innerHTML = "Sesuai!";
    labelGenre.style.color = "green";
    return true;
  }
}

function isbnbuku(isbnBuku) {
  var labelIsbn = document.getElementById("labelISBN");

  if (isbnBuku === "") {
    labelIsbn.innerHTML = "ISBN tidak boleh kosong!";
    labelIsbn.style.color = "red";
    return false;
  } else {
    labelIsbn.innerHTML = "Sesuai!";
    labelIsbn.style.color = "green";
    return true;
  }
}
function halamanbuku(halamanBuku) {
  var labelHalaman = document.getElementById("labelHalaman");

  if (halamanBuku == "") {
    labelHalaman.innerHTML = "Halaman tidak boleh kosong!";
    labelHalaman.style.color = "red";
    return false;
  } else {
    labelHalaman.innerHTML = "Sesuai!";
    labelHalaman.style.color = "green";
    return true;
  }
}
function lokasibuku1(lokasiBuku1) {
  var labelLokasi1 = document.getElementById("labelLokasi1");

  if (lokasiBuku1 == "") {
    labelLokasi1.innerHTML = "Lokasi tidak boleh kosong!";
    labelLokasi1.style.color = "red";
    return false;
  } else {
    labelLokasi1.innerHTML = "Sesuai!";
    labelLokasi1.style.color = "green";
    return true;
  }
}
function lokasibuku(lokasiBuku) {
  var labelLokasi = document.getElementById("labelLokasi");

  if (lokasiBuku == "") {
    labelLokasi.innerHTML = "Lokasi tidak boleh kosong!";
    labelLokasi.style.color = "red";
    return false;
  } else {
    labelLokasi.innerHTML = "Sesuai!";
    labelLokasi.style.color = "green";
    return true;
  }
}
function jumlahbuku1(jumlahBuku1) {
  var labelJumlah1 = document.getElementById("labelJumlah1");

  if (jumlahBuku1 == "") {
    labelJumlah1.innerHTML = "Jumlah tidak boleh kosong!";
    labelJumlah1.style.color = "red";
    return false;
  } else {
    labelJumlah1.innerHTML = "Sesuai!";
    labelJumlah1.style.color = "green";
    return true;
  }
}
function jumlahbuku(jumlahBuku) {
  var labelJumlah = document.getElementById("labelJumlah");

  if (jumlahBuku == "") {
    labelJumlah.innerHTML = "Jumlah tidak boleh kosong!";
    labelJumlah.style.color = "red";
    return false;
  } else {
    labelJumlah.innerHTML = "Sesuai!";
    labelJumlah.style.color = "green";
    return true;
  }
}
function deskripsibuku1(deskripsiBuku1) {
  var labelDeskripsi1 = document.getElementById("labelDeskripsi1");

  if (deskripsiBuku1 == "") {
    labelDeskripsi1.innerHTML = "Deskripsi tidak boleh kosong!";
    labelDeskripsi1.style.color = "red";
    return false;
  } else {
    labelDeskripsi1.innerHTML = "Sesuai!";
    labelDeskripsi1.style.color = "green";
    return true;
  }
}
function sampulbuku(sampulBuku) {
  var labelSampul = document.getElementById("labelSampul");

  if (sampulBuku == "") {
    labelSampul.innerHTML = "Sampul tidak boleh kosong!";
    labelSampul.style.color = "red";
    return false;
  } else {
    labelSampul.innerHTML = "Sesuai!";
    labelSampul.style.color = "green";
    return true;
  }
}
function kodebuku(kodeBuku) {
  var labelKode = document.getElementById("labelKode");

  if (kodeBuku == "") {
    labelKode.innerHTML = "Kode Buku tidak boleh kosong!";
    labelKode.style.color = "red";
    return false;
  } else {
    labelKode.innerHTML = "Sesuai!";
    labelKode.style.color = "green";
    return true;
  }
}
function sewaBuku(){
  const formSewa = document.getElementById("formSewa");
  
  var kodeBuku1 = document.getElementById("kodeBuku1").value;
  var durasi = document.getElementById("durasi").value;
  var jumlahsewabuku = document.getElementById("jumlahsewabuku").value;
  var penyewa = document.getElementById("penyewa").value;
  kodesewa(kodeBuku1);
  penyewabuku(penyewa);
  durasisewa(durasi);
  jumlahsewa(jumlahsewabuku);
  if (
    kodesewa(kodeBuku1) == true &&
    penyewabuku(penyewa) == true &&
    durasisewa(durasi) == true &&
    jumlahsewa(jumlahBuku) == true)
    {
      swal("Success", "Berhasil Menambahkan Buku", "success").then(() => {
        window.location = '../admin/daftarbuku.html';
    });
      formSewa.reset();
    }
}
function penyewabuku(penyewa){
  var labelsewa = document.getElementById("labelsewa");

  if (penyewa == "") {
    labelsewa.innerHTML = "penyewa tidak boleh kosong!";
    labelsewa.style.color = "red";
    return false;
  } else {
    labelsewa.innerHTML = "Sesuai!";
    labelsewa.style.color = "green";
    return true;
  }
}
function kodesewa(kodeBuku1) {
  var labelKode = document.getElementById("labelKode1");

  if (kodeBuku1 == "") {
    labelKode.innerHTML = "Kode Buku tidak boleh kosong!";
    labelKode.style.color = "red";
    return false;
  } else {
    labelKode.innerHTML = "Sesuai!";
    labelKode.style.color = "green";
    return true;
  }
}
function durasisewa(durasi){
  var labelDurasi = document.getElementById("labelDurasi");

  if (durasi == "Pilih Salah Satu") {
    labelDurasi.innerHTML = "Durasi tidak boleh kosong!";
    labelDurasi.style.color = "red";
    return false;
  } else {
    labelDurasi.innerHTML = "Sesuai!";
    labelDurasi.style.color = "green";
    return true;
  }
}
function jumlahsewa(jumlahsewabuku){
  var labeljumlahsewa = document.getElementById("labeljumlahsewa");

  if (jumlahsewabuku == "") {
    labeljumlahsewa.innerHTML = "Jumlah tidak boleh kosong!";
    labeljumlahsewa.style.color = "red";
    return false;
  } else {
    labeljumlahsewa.innerHTML = "Sesuai!";
    labeljumlahsewa.style.color = "green";
    return true;
  }
}
function editData(id) {
  fetch("../../dist/js/buku.json")
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("judulBuku").value = json[id].judul;
      document.getElementById("kategoriBuku").value = json[id].kategori;
      document.getElementById("genreBuku").value = json[id].genre;
      document.getElementById("hargaBuku").value = json[id].harga;
      document.getElementById("jumlahBuku").value = json[id].jumlah;
      document.getElementById("lokasiBuku").value = json[id].lokasi;
    })
    // handling error
    .catch((err) => console.log(err));
}
function deleteData(id) {
  fetch("../../dist/js/buku.json")
    .then((response) => response.json())
    .then((json) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover the data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal(
            "Success",
            "Berhasil Menghapus Data " + json[id].judul,
            "success"
          );
        }
      });
    })
    // handling error
    .catch((err) => console.log(err));
}
