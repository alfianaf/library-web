// =============== PEMANGGILAN FUNGSI ================== //
// -- mengambil data katalog
getAllBook();

// ================= FUNGSI ======================== //
function getAllBook() {
    fetch('../assets/data/buku.json')
        .then(function(response) {
            return response.json()
        })
        .then(function(books) {
            showBooks(books);
        })
}

function showBooks(books) {
    let print = '';
    for (let i = 0; i < books.length; i++) {
        print += `
            <div class="col-6 col-md-4 catalogue-book">
                <div class="card ">
                    <a type="button" data-toggle="modal" data-target="#book-detail${i}">
                        <img src="${books[i].sampul}" alt=" " class="card-img-top catalogue-img ">
                    </a>
                    <div class="card-body ">
                        <a type="button" data-toggle="modal" data-target="#book-detail${i}">
                            <h5>${books[i].judul}</h5>
                            <p>
                                <span class="font-italic font-weight-lighter">${books[i].kategori} | ${books[i].genre}</span>
                                <br> <span class="text-success"> Tersedia: 2 </span>
                                <br> <strong>Rp ${books[i].harga},-/minggu</strong> </p>
                        </a>
                    </div>
                </div>
                <div class="modal fade" id="book-detail${i}" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div class="row">
                                    <div class="col-12 col-sm-4 mt-3">
                                        <img src="${books[i].sampul}" alt="" class="catalogue-img-modal">
                                    </div>
                                    <div class="col-12 col-sm-8 mt-3">
                                        <h3>${books[i].judul}</h3>
                                        <p class="text-secondary font-italic">Category | Genre
                                            <br> Didonasikan Oleh: - </p>
                                        <hr>
                                        <div class="row">
                                            <div class="col-12 col-md-8">
                                                <p> <i class="fas fa-user fa-sm"></i> ${books[i].pengarang}</p>
                                                <p><i class="fas fa-calendar-alt fa-sm"></i> ${books[i].tanggal_terbit}</p>
                                                <p><i class="fas fa-building fa-sm"></i> ${books[i].penerbit}</p>
                                                <p> <i class="fas fa-barcode fa-sm"></i> ${books[i].isbn} </p>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <p> <i class="fas fa-file fa-sm"></i> Halaman: ${books[i].halaman} </p>
                                                <p> <i class="fas fa-map-marker-alt fa-sm"></i> Lokasi: ${books[i].lokasi} </p>
                                                <p> <i class="fas fa-book-open fa-sm"></i> Tersedia: ${books[i].jumlah} buah</p>
                                                <p> <i class="fas fa-coins fa-sm"></i> ${books[i].harga},-/minggu </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-12 mt-4 mb-3">
                                        <h5><b>Deskripsi:</b> </h5>
                                        <p class="text-justify" style="line-height: normal;">${books[i].deskripsi}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // console.log("isi print:", print);
    const bookCard = document.getElementById("show-all-books");
    bookCard.innerHTML = print;
}