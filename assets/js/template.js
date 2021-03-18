// ================ Pemanggilan Fungsi ================== //
checkSession();
getTemplateWithActiveLink();
footerTemplate();

// ==================== Fungsi ====================== //
function checkSession() {
    const storedSession = localStorage.getItem("session");
    if (storedSession === null) {
        window.location = "../login.html";
    } else {
        console.log(storedSession);
    }
}

function logout() {
    localStorage.clear();
}

function getTemplateWithActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    // console.log(page);
    let actLinkDashboard = '',
        actLinkKatalog = '',
        actLinkDonasi = '',
        actLinkRiwayat = '',
        actLinkSewa = '',
        actLinkProfil = '';

    if (page === 'catalog.html') {
        actLinkKatalog = 'active';
    } else if (page === 'dashboard.html') {
        actLinkDashboard = 'active';
    } else if (page === 'donasi.html') {
        actLinkDonasi = 'active';
    } else if (page === 'history.html') {
        actLinkRiwayat = 'active';
    } else if (page === 'sewa.html') {
        actLinkSewa = 'active';
    } else if (page === 'profil.html') {
        actLinkProfil = 'active';
    }

    headerTemplate(actLinkDashboard, actLinkKatalog, actLinkSewa, actLinkRiwayat, actLinkDonasi, actLinkProfil);
    sidebarTemplate(actLinkDashboard, actLinkKatalog, actLinkSewa, actLinkRiwayat, actLinkDonasi, actLinkProfil);
}

function headerTemplate(dasboard, katalog, sewa, riwayat, donasi, profil) {
    let print = `
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="../peminjam/dashboard.html" class="nav-link ${dasboard}">Beranda</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="../peminjam/catalog.html" class="nav-link ${katalog}">Katalog</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="../peminjam/sewa.html" class="nav-link ${sewa}">Sewa</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="../peminjam/history.html" class="nav-link ${riwayat}">Riwayat</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="../peminjam/donasi.html" class="nav-link ${donasi}">Donasi</a>
                    </li>
                </ul>

               
                
                <!-- SEARCH FORM -->
                <form class="form-inline mr-0">
                    <div class="input-group input-group-sm">
                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                        <div class="input-group-append">
                            <button class="btn btn-navbar" type="submit">
                                <i class="nav-icon fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="../peminjam/profil.html" class="nav-link ${profil}">
                        <img src="../dist/img/user3-128x128.jpg" class="nav-icon img-circle elevation-2" style="width:30px; height:30px">
                    </a>
                </li>
                    <!-- Log Out Button -->
                    <li class="nav-item">
                        <a href="../login.html" class="nav-link" type="button" onclick="logout()">
                            <i class="nav-icon fas fa-sign-out-alt"></i>
                        </a>
                    </li>
                </ul>
            `;
    const navbar = document.getElementById("navbar-page");
    navbar.innerHTML = print;
}

function sidebarTemplate(dasboard, katalog, sewa, riwayat, donasi, profil) {
    let print = `
            <!-- Brand Logo -->
            <a href="./dashboard.html" class="brand-link">
                <!-- <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> -->
                <i class="nav-icon fas fa-book fa-1x"></i>
                <span class="brand-text font-weight-light">  E-Library</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->
                        <li class="nav-header">PENGGUNA</li>
                        <li class="nav-item">
                            <a href="../peminjam/profil.html" class="nav-link ${profil}">
                                <img src="../dist/img/user3-128x128.jpg" class="nav-icon img-circle elevation-2" style="width:25px; height:25px">
                                <p>Elizabeth Pierce</p>
                            </a>
                        </li>
                        <li class="nav-header">DASHBOARD</li>
                        <li class="nav-item">
                            <a href="../peminjam/dashboard.html" class="nav-link ${dasboard}">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li class="nav-header">KATALOG</li>
                        <li class="nav-item">
                            <a href="../peminjam/catalog.html" class="nav-link ${katalog}">
                                <i class="nav-icon fas fa-swatchbook"></i>
                                <p>Katalog</p>
                            </a>
                        </li>
                        <li class="nav-header">SEWA</li>
                        <li class="nav-item">
                            <a href="../peminjam/sewa.html" class="nav-link ${sewa}">
                                <i class="nav-icon fas fa-book-open"></i>
                                <p>Sewa Buku</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="../peminjam/history.html" class="nav-link ${riwayat}">
                                <i class="nav-icon fas fa-exclamation-circle"></i>
                                <p>Riwayat Sewa</p>
                            </a>
                        </li>
                        <li class="nav-header">Donasi</li>
                        <li class="nav-item">
                            <a href="../peminjam/donasi.html" class="nav-link ${donasi}">
                                <i class="nav-icon fas fa-donate"></i>
                                <p>Donasi</p>
                            </a>
                        </li>
                        <li class="nav-header">LOGOUT</li>
                        <li class="nav-item">
                            <a href="../login.html" type="button" onclick="logout()" class="nav-link">
                                <i class="nav-icon fas fa-sign-out-alt"></i>
                                <p>Logout</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        `;
    const sidebar = document.getElementById("sidebar-page");
    sidebar.innerHTML = print;
}

function footerTemplate() {
    let print = `<strong>Copyright 2021 <a href="http://adminlte.io ">KreasiTech</a>.</strong> All rights reserved.`;

    const footer = document.getElementById("footer-page");
    footer.innerHTML = print;
}