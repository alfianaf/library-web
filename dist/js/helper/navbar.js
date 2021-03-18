var path = window.location.pathname;
var page = path.split("/").pop();



function head(){
  let actLinkDashboard = '',actLinkDaftarUser = '',actLinkDaftarBuku = '',actLinkPengembalianBuku = '';

    if (page === 'index.html') {
      actLinkDashboard = 'active';
    } else if (page === 'daftaruser.html') {
      actLinkDaftarUser = 'active';
    } else if (page === 'daftarbuku.html') {
      actLinkDaftarBuku = 'active';
    } else if (page === 'daftarpinjaman.html') {
      actLinkPengembalianBuku = 'active';
    }
    let output = `
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="index.html" class="nav-link ${actLinkDashboard}">Beranda</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="daftaruser.html" class="nav-link ${actLinkDaftarUser}">Daftar User</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="daftarbuku.html" class="nav-link ${actLinkDaftarBuku}">Daftar Buku</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="daftarpinjaman.html" class="nav-link ${actLinkPengembalianBuku}">Pengembalian Buku</a>
        </li>

    </ul>

      <!-- SEARCH FORM -->
      <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-navbar" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Messages Dropdown Menu -->
        
        <li class="nav-item">
          <a class="nav-link" href="../login.html" onclick="logout()">
              <i class="fas fa-sign-out-alt"></i>
          </a>
      </li>
      </ul>

    `;
  const aa = document.getElementById("navigasi");
  aa.innerHTML = output;

}
function logout(){
  localStorage.clear();
}
head();