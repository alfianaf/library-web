fetchdata();


function fetchdata() {
  fetch("../../dist/js/pinjaman.json")
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
        <td class="text-center">${element.kode}</td>
        <td class="text-center">${element.judul}</td>
        <td class="text-center">${element.user}</td>
        <td class="text-center">${element.tanggal_kadaluarsa}</td>
        <td class="text-center">Rp ${numberWithCommas(element.denda)}</td>
        <td class="text-center">${element.lokasi}</td>
        <td class="text-center">
        <button class="btn btn-info btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#deleteModal" onclick="deleteData('${
          element.id - 1
        }')" data-placement="top" title="Pengembalian"><i class="fa fa-exchange-alt"></i></button>
        </td>
      </tr>
    `;
  });

  const bodyTable = document.getElementById("body-table");
  bodyTable.innerHTML = output;
}

function deleteData(id) {
  fetch("../dist/js/pinjaman.json")
    .then((response) => response.json())
    .then((json) => {
      if (json[id].denda != 0) {
        swal({
          title: "Are you sure?",
          text:
            "Denda sejumlah " +
            json[id].denda +
            " akan dibebankan pada user " +
            json[id].user,
          icon: "warning",
          buttons: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal(
              "Success",
              "Silahkan meletakkan buku pada rak " + json[id].lokasi,
              "success"
            );
          }
        });
      } else {
        swal({
          title: "Are you sure?",
          icon: "warning",
          buttons: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal(
              "Success",
              "Silahkan meletakkan buku pada rak " + json[id].lokasi,
              "success"
            );
          }
        });
      }
    })
    // handling error
    .catch((err) => console.log(err));
}
