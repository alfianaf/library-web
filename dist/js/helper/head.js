var path = window.location.pathname;
var page = path.split("/").pop();
checkSession();

function checkSession(){
    const storedSession = localStorage.getItem("session");
  if(storedSession===null){
    window.location = "../login.html";
  } else{
    console.log(storedSession);
  }
}

function footer() {
  let ee = `
<div>
<strong>Copyright 2021 <a href="http://adminlte.io ">KreasiTech</a>.</strong> All rights reserved.
</div>
`;
  const footertag = document.getElementById("footerkonten");
  footertag.innerHTML = ee;
}

function href() {
  document.location.href("/");
}

function sidebar() {
  let active1 = '',active2 = '',active4 = '',active7 = '',active8 = ``;

  if (page == "daftaruser.html") {
    active2 = `active`;
  } else if (page == "index.html") {
    active1 = `active`;
  } else if (page == "daftarbuku.html") {
    active4 = `active`;
  } else if (page == "daftarpinjaman.html") {
    active7 = `active`;
  } else if (page == "profil.html") {
    active8 = `active`;
  }

  let sidebar = `
    <!-- Sidebar user panel (optional) -->

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
               <li class="nav-header">PENGGUNA</li>
                        <li class="nav-item">
                            <a href="profil.html" class="nav-link ${active8}">
                                <img src="../dist/img/user2-160x160.jpg" class="nav-icon img-circle elevation-2" style="width:25px; height:25px">
                                <p>Alexander Pierce</p>
                            </a>
                        </li>
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
                <i class="far fa-user nav-icon"></i>
                <p>Daftar User</p>
              </a>
            </li>
            
            <li class="nav-header">BUKU</li>
            <li class="nav-item">
              <a href="daftarbuku.html" class="nav-link ${active4}">
                <i class="fas fa-swatchbook nav-icon"></i>
                <p>Daftar Buku</p>
              </a>
            </li>
            
                
            <li class="nav-item">
            <a href="daftarpinjaman.html" class="nav-link ${active7}">
              <i class="fas fa-exchange-alt nav-icon"></i>
              <p>Pengembalian Buku</p>
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
        </nav>`;
  const sidebartag = document.getElementById("sidebarkonten");
  sidebartag.innerHTML = sidebar;
}
sidebar();
footer();
