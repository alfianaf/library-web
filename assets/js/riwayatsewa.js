// =============== PEMANGGILAN FUNGSI ================== //
// -- mengambil data katalog
getAllHistories();

// ================= FUNGSI ======================== //
function getAllHistories() {
    fetch('../assets/data/riwayatsewa.json')
        .then(function(response) {
            return response.json()
        })
        .then(function(histories) {
            showHistories(histories);
        })
}

function showHistories(histories) {
    let print = '';
    for (let i = 0; i < histories.length; i++) {
        print += `
            <tr>
                <td>${i+1}</td>
                <td>${histories[i].kode}</td>
                <td class="text-justify">
                    <a type="button" data-toggle="modal" data-target="#book-detail${i}">${histories[i].judul}</a>
                    <div class="modal fade" id="book-detail${i}" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div class="row">
                                        <div class="col-12 col-sm-4 mt-3">
                                            <img src="${histories[i].sampul}" alt="" class="catalogue-img-modal">
                                        </div>
                                        <div class="col-12 col-sm-8 mt-3">
                                            <h3>${histories[i].judul}</h3>
                                            <p class="text-secondary font-italic">Category | Genre
                                                <br> Didonasikan Oleh: - </p>
                                            <hr>
                                            <div class="row">
                                                <div class="col-12 col-md-8">
                                                    <p> <i class="fas fa-user fa-sm"></i> ${histories[i].pengarang}</p>
                                                    <p><i class="fas fa-calendar-alt fa-sm"></i> ${histories[i].tanggal_terbit}</p>
                                                    <p><i class="fas fa-building fa-sm"></i> ${histories[i].penerbit}</p>
                                                    <p> <i class="fas fa-barcode fa-sm"></i> ${histories[i].isbn} </p>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <p> <i class="fas fa-file fa-sm"></i> Halaman: ${histories[i].halaman} </p>
                                                    <p> <i class="fas fa-map-marker-alt fa-sm"></i> Lokasi: ${histories[i].lokasi} </p>
                                                    <p> <i class="fas fa-book-open fa-sm"></i> Tersedia: ${histories[i].jumlah} buah</p>
                                                    <p> <i class="fas fa-coins fa-sm"></i> ${histories[i].harga},-/minggu </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-12 mt-4 mb-3">
                                            <h5><b>Deskripsi:</b> </h5>
                                            <p class="text-justify" style="line-height: normal;">${histories[i].deskripsi}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>${histories[i].tgl_pinjam}</td>
                <td>${histories[i].tgl_kembali}</td>
                <td class="text-right">Rp ${histories[i].denda},-</td>
                <td><span class="badge badge-secondary"> ${histories[i].status}</span></td>
            </tr>
        `;
    }

    // console.log("isi print:", print);
    const historiesTable = document.getElementById("riwayat-sewa-table");
    historiesTable.innerHTML = print;
}

function showHistories2(histories) {
    var bodyTable = document.getElementById("riwayat-sewa-table");
    // console.log(histories.length)
    for (let i = 0; i < histories.length; i++) {
        // buat baris
        var row = document.createElement("tr");
        row.setAttribute("id", ("baris-" + i))
        bodyTable.appendChild(row);
        // buat kolom dan isinya
        var colNo = document.createElement("td");
        var nomor = document.createTextNode(i);
        colNo.appendChild(nomor);

        var colKode = document.createElement("td");
        var kode = document.createTextNode(histories[i].kode);
        colKode.appendChild(kode);

        var colJudul = document.createElement("td");
        var judul = document.createTextNode(histories[i].judul);
        colJudul.appendChild(judul);


        var colPinjam = document.createElement("td");
        var tglPinjam = document.createTextNode(histories[i].tgl_pinjam);
        colPinjam.appendChild(tglPinjam);

        var colKembali = document.createElement("td");
        var tglkembali = document.createTextNode(histories[i].tgl_kembali);
        colKembali.appendChild(tglkembali);

        var colDenda = document.createElement("td");
        var denda = document.createTextNode("Rp " + histories[i].denda + ",-");
        colDenda.appendChild(denda);

        var span = document.createElement("span");
        span.setAttribute("class", "badge badge-secondary");
        var isi = document.createTextNode(histories[i].status)
        span.appendChild(isi);

        var colstatus = document.createElement("td");
        var status = document.createTextNode(histories[i].status);
        colstatus.appendChild(status);
        //gabungkan ke row
        document.getElementById("baris-" + i).appendChild(colNo);
        document.getElementById("baris-" + i).appendChild(colKode);
        document.getElementById("baris-" + i).appendChild(colJudul);
        document.getElementById("baris-" + i).appendChild(colPinjam);
        document.getElementById("baris-" + i).appendChild(colKembali);
        document.getElementById("baris-" + i).appendChild(colDenda);
        document.getElementById("baris-" + i).appendChild(colstatus);

    }
}