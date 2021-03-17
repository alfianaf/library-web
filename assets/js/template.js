// ================ Pemanggilan Fungsi ================== //
getTemplateWithActiveLink();
footerTemplate();

// ==================== Fungsi ====================== //
function getTemplateWithActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    console.log(page);
    let actLinkDashboard = '',
        actLinkKatalog = '',
        actLinkDonasi = '',
        actLinkRiwayat = '',
        actLinkSewa = '';

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
    }

    headerTemplate(actLinkDashboard, actLinkKatalog, actLinkSewa, actLinkRiwayat, actLinkDonasi);
    sidebarTemplate(actLinkDashboard, actLinkKatalog, actLinkSewa, actLinkRiwayat, actLinkDonasi);
}

function headerTemplate(dasboard, katalog, sewa, riwayat, donasi) {
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
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-comments"></i>
                            <span class="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <img src="../dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Brad Diesel
                                            <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">Call me whenever you can...</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <!-- Message End -->
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <img src="../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            John Pierce
                                            <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">I got your message bro</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <!-- Message End -->
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <img src="../dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Nora Silvester
                                            <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">The subject goes here</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <!-- Message End -->
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>
                    <!-- Notifications Dropdown Menu -->
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-bell"></i>
                            <span class="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span class="dropdown-item dropdown-header">15 Notifications</span>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-envelope mr-2"></i> 4 new messages
                                <span class="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-users mr-2"></i> 8 friend requests
                                <span class="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-file mr-2"></i> 3 new reports
                                <span class="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <!-- Log Out Button -->
                    <li class="nav-item">
                        <a class="nav-link" href="../login.html">
                            <i class="fas fa-sign-out-alt"></i>
                        </a>
                    </li>
                </ul>
            `;
    const navbar = document.getElementById("navbar-page");
    navbar.innerHTML = print;
}

function sidebarTemplate(dasboard, katalog, sewa, riwayat, donasi) {
    let print = `
            <!-- Brand Logo -->
            <a href="./dashboard.html" class="brand-link">
                <!-- <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> -->
                <i class="fas fa-book fa-1x"></i>
                <span class="brand-text font-weight-light">  E-Library</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
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
                            <a href="../login.html" class="nav-link">
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