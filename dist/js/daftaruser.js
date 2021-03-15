fetchdata();

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
        </td>
      </tr>
    `;

  });

  const bodyTable = document.getElementById("body-table");
  bodyTable.innerHTML = output;
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
