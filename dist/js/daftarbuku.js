fetchdata();

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
