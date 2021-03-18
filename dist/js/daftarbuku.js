fetchdata();
tekan();
function fetchdata(){
  fetch("../../dist/js/buku.json")
  .then((response) => response.json())
  .then((json) => {
      console.log("json",json)
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
        <td class="text-center"><img src="${element.sampul}" height=150 width=100></img></td>
        <td class="text-center">${element.kode}</td>
        <td class="text-center">${element.judul}</td>
        <td class="text-center">${element.kategori}</td>
        <td class="text-center">${element.genre}</td>
        <td class="text-center">Rp ${numberWithCommas(element.harga)}</td>
        <td class="text-center">${element.jumlah}</td>
        <td class="text-center">${element.lokasi}</td>
        <td class="text-center">
        <button class="btn btn-success btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#editModal" onclick="editData('${element.id-1}')" title="Edit"><i class="fa fa-edit"></i></button>
        <button class="btn btn-danger btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#deleteModal" onclick="deleteData('${element.id-1}')" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>

        </td>
      </tr>
    `;

  });

  const bodyTable = document.getElementById("body-table");
  bodyTable.innerHTML = output;
}
function tekan(){
  document.getElementById("buttonTambahBuku").onclick = function () {
    addBuku();
  };
}
function addBuku(){
  const formBuku = document.getElementById("addbuku-form");

  var kodeBuku = document.getElementById('kodeBuku').value;
  var judulBuku = document.getElementById('judulBuku').value;
  var pengarangBuku = document.getElementById('pengarangBuku').value;
  var penerbitBuku = document.getElementById('penerbitBuku').value;
  var datepicker = document.getElementById('datepicker').value;
  var kategoriBuku = document.getElementById('kategoriBuku').value;
  var genreBuku = document.getElementById('genreBuku').value;
  var isbnBuku = document.getElementById('isbnBuku').value;
  var halamanBuku = document.getElementById('halamanBuku').value;
  var jumlahBuku = document.getElementById('jumlahBuku').value;
  var lokasiBuku = document.getElementById('lokasiBuku').value;
  var deskripsiBuku = document.getElementById('deskripsiBuku').value;
  var usernameBuku = document.getElementById('usernameBuku').value;
  var sampulBuku = document.getElementById('sampulBuku').value;

  kodebuku(kodeBuku);
  judulbuku(judulBuku);
  pengarangbuku(pengarangBuku);
  penerbitbuku(penerbitBuku);
  datePicker(datepicker);
  kategoribuku(kategoriBuku);
  genrebuku(genreBuku);
  isbnbuku(isbnBuku);
  halamanbuku(halamanBuku);
  jumlahbuku(jumlahBuku);
  lokasibuku(lokasiBuku);
  deskripsibuku(deskripsiBuku);
  sampulbuku(sampulBuku);

}
function judulbuku(judulBuku){
  var labelJudul = document.getElementById('labelJudul');
  if (judulBuku == "" ){
    
    labelJudul.innerHTML = "Judul Buku tidak boleh kosong!";
    labelJudul.style.color = "red";
    return false;
  }else{
    labelJudul.innerHTML = "Sesuai!";
    labelJudul.style.color = "green";
    return true;
  }
}
function pengarangbuku(pengarangBuku){
  var labelPengarang = document.getElementById('labelPengarang');
  if (pengarangBuku == "" ){
    
    labelPengarang.innerHTML = "Pengarang Buku tidak boleh kosong!";
    labelPengarang.style.color = "red";
    return false;
  }else{
    labelPengarang.innerHTML = "Sesuai!";
    labelPengarang.style.color = "green";
    return true;
  }
}
function penerbitbuku(penerbitBuku){
  var labelPenerbit = document.getElementById('labelPenerbit');

  if (penerbitBuku == "" ){
    
    labelPenerbit.innerHTML = "Penerbit Buku tidak boleh kosong!";
    labelPenerbit.style.color = "red";
    return false;
  }else{
    labelPenerbit.innerHTML = "Sesuai!";
    labelPenerbit.style.color = "green";
    return true;
  }
}
function datePicker(datepicker){
  var labelTanggal = document.getElementById('labelTanggal');

  if (datepicker == "" ){
    
    labelTanggal.innerHTML = "Tanggal tidak boleh kosong!";
    labelTanggal.style.color = "red";
    return false;
  }else{
    labelTanggal.innerHTML = "Sesuai!";
    labelTanggal.style.color = "green";
    return true;
  }
}
function kategoribuku(kategoriBuku){
  var labelKategori = document.getElementById('labelKategori');

  if (kategoriBuku == "Pilih Salah Satu" ){
    
    labelKategori.innerHTML = "Kategori tidak boleh kosong!";
    labelKategori.style.color = "red";
    return false;
  }else{
    labelKategori.innerHTML = "Sesuai!";
    labelKategori.style.color = "green";
    return true;
  }
}
function genrebuku(genreBuku){
  var labelGenre = document.getElementById('labelGenre');

  if (genreBuku == "Pilih Salah Satu" ){
    
    labelGenre.innerHTML = "Genre tidak boleh kosong!";
    labelGenre.style.color = "red";
    return false;
  }else{
    labelGenre.innerHTML = "Sesuai!";
    labelGenre.style.color = "green";
    return true;
  }
}

function isbnbuku(isbnBuku){
  var labelIsbn = document.getElementById('labelISBN');

  if (isbnBuku === "" ){
    
    labelIsbn.innerHTML = "ISBN tidak boleh kosong!";
    labelIsbn.style.color = "red";
    return false;
  }else{
    labelIsbn.innerHTML = "Sesuai!";
    labelIsbn.style.color = "green";
    return true;
  }
}
function halamanbuku(halamanBuku){
  var labelHalaman = document.getElementById('labelHalaman');

  if (halamanBuku == "" ){
    
    labelHalaman.innerHTML = "Halaman tidak boleh kosong!";
    labelHalaman.style.color = "red";
    return false;
  }else{
    labelHalaman.innerHTML = "Sesuai!";
    labelHalaman.style.color = "green";
    return true;
  }
}
function lokasibuku(lokasiBuku){
  var labelLokasi = document.getElementById('labelLokasi');

  if (lokasiBuku == "" ){
    
    labelLokasi.innerHTML = "Lokasi tidak boleh kosong!";
    labelLokasi.style.color = "red";
    return false;
  }else{
    labelLokasi.innerHTML = "Sesuai!";
    labelLokasi.style.color = "green";
    return true;
  }
}
function jumlahbuku(jumlahBuku){
  var labelJumlah = document.getElementById('labelJumlah');


  if (jumlahBuku == "" ){
    
    labelJumlah.innerHTML = "Jumlah tidak boleh kosong!";
    labelJumlah.style.color = "red";
    return false;
  }else{
    labelJumlah.innerHTML = "Sesuai!";
    labelJumlah.style.color = "green";
    return true;
  }
}
function deskripsibuku(deskripsiBuku){
  var labelDeskripsi = document.getElementById('labelDeskripsi');

  if (deskripsiBuku == "" ){
    
    labelDeskripsi.innerHTML = "Jumlah tidak boleh kosong!";
    labelDeskripsi.style.color = "red";
    return false;
  }else{
    labelDeskripsi.innerHTML = "Sesuai!";
    labelDeskripsi.style.color = "green";
    return true;
  }
}
function sampulbuku(sampulBuku){
  var labelSampul = document.getElementById('labelSampul');

  if (sampulBuku == "" ){
    
    labelSampul.innerHTML = "Jumlah tidak boleh kosong!";
    labelSampul.style.color = "red";
    return false;
  }else{
    labelSampul.innerHTML = "Sesuai!";
    labelSampul.style.color = "green";
    return true;
  }
}
function kodebuku(kodeBuku){
  var labelBuku = document.getElementById('labelBuku');


  if (kodeBuku == "" ){
    
    labelBuku.innerHTML = "Kode Buku tidak boleh kosong!";
    labelBuku.style.color = "red";
    return false;
  }else{
    labelBuku.innerHTML = "Sesuai!";
    labelBuku.style.color = "green";
    return true;
  }

}
function editData(id) {
  fetch("../../dist/js/buku.json")
  .then((response) => response.json())
  .then((json) => {
    document.getElementById('judul').value=json[id].judul;
    document.getElementById('kategori').value=json[id].kategori;
    document.getElementById('genre').value=json[id].genre;
    document.getElementById('harga').value=json[id].harga;
    document.getElementById('jumlah').value=json[id].jumlah;
    document.getElementById('lokasi').value=json[id].lokasi;
  })
  // handling error
  .catch((err) => console.log(err));
}
function deleteData(id){
    fetch("../../dist/js/buku.json")
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
          swal("Success", "Berhasil Menghapus Data "+json[id].judul, "success");
        }
      });
          
    })
    // handling error
    .catch((err) => console.log(err));
}
