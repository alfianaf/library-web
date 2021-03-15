let output = `
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="../index2.html" class="nav-link">Beranda</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="./catalog.html" class="nav-link active">Katalog</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="./keranjang.html" class="nav-link">Sewa</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Pembayaran</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Donasi</a>
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
          <a class="nav-link" href="#">
              <i class="fas fa-sign-out-alt"></i>
          </a>
      </li>
      </ul>

    `;
  const aa = document.getElementById("navigasi");
  aa.innerHTML = output;

