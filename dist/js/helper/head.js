var path = window.location.pathname;
var page = path.split("/").pop();

function footer() {
    let ee = `
<div>
<strong>Copyright 2021 <a href="http://adminlte.io ">KreasiTech</a>.</strong> All rights reserved.
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 1.0
    </div>
</div>
`;
    const footertag = document.getElementById("footerkonten");
    footertag.innerHTML = ee;
}



function href() {
    document.location.href("/");
}

function sidebar(index) {
    if (page == "daftaruser.html") {
        active1 = ``;
        active2 = `active`;
        active4 = ``;

        active7 = ``;
    } else if (page == "index.html") {
        active1 = `active`;
        active2 = ``;
        active4 = ``;

        active7 = ``;
    } else if (page == "daftarbuku.html") {
        active1 = ``;
        active2 = ``;
        active4 = `active`;
        active7 = ``;
    } else if (page == "daftarpinjaman.html") {
        active1 = ``;
        active2 = ``;
        active4 = ``;
        active7 = `active`;
    }

    let sidebar = `
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
            <li class="nav-item ">
              <a href="index.html" class="nav-link ${active1}">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li class="nav-header">USER</li>
            <li class="nav-item">
              <a href="daftaruser.html" class="nav-link ${active2}">
                <i class="far fa-circle nav-icon"></i>
                <p>Daftar User</p>
              </a>
            </li>
            
            <li class="nav-header">BUKU</li>
            <li class="nav-item">
              <a href="daftarbuku.html" class="nav-link ${active4}">
                <i class="far fa-circle nav-icon"></i>
                <p>Daftar Buku</p>
              </a>
            </li>
            
                
            <li class="nav-item">
            <a href="daftarpinjaman.html" class="nav-link ${active7}">
              <i class="far fa-circle nav-icon"></i>
              <p>Pengembalian Buku</p>
            </a>
          </li>    
          </ul>
        </nav>`;
    const sidebartag = document.getElementById("sidebarkonten");
    sidebartag.innerHTML = sidebar;
}
sidebar();
footer();