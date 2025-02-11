const dataProduk = [
  {
    nama: "Donat kentang",
    harga: 3000,
    deskripsi: "Donat lembut berbahan dasar kentang murni",
    gambar: "img/produk/kueBasah/donat kentang.jpg",
  },
  {
    nama: "Donat abon",
    harga: 3000,
    deskripsi: "Donat gurih dengan topping abon sapi yang lezat.",
    gambar: "img/produk/kueBasah/donat abon.jpg",
  },
  {
    nama: "Lemper ayam",
    harga: 2750,
    deskripsi: "Ketan isi ayam suwir yang gurih. dan lezat",
    gambar: "img/produk/kueBasah/lemper ayam.jpg",
  },
  {
    nama: "Lemper goreng",
    harga: 2750,
    deskripsi: "Versi goreng dari lemper ayam, lebih renyah di luar.",
    gambar: "img/produk/kueBasah/lemper goreng.jpg",
  },
  {
    nama: "Apem",
    harga: 2000,
    deskripsi: "Kue berbahan tepung beras dengan rasa manis khas.",
    gambar: "img/produk/kueBasah/apem.jpg",
  },
  {
    nama: "Pukis",
    harga: 2000,
    deskripsi: "Kue panggang dengan tekstur lembut dan aroma khas.",
    gambar: "img/produk/kueBasah/pukis.jpg",
  },
  {
    nama: "Dadar gulung klapa",
    harga: 2000,
    deskripsi: "Dadar gulung isi kelapa manis atau pisang coklat.",
    gambar: "img/produk/kueBasah/dadar gulung.jpg",
  },
  {
    nama: "Gabin sayur/tape",
    harga: 2500,
    deskripsi: "Biskuit gabin dengan isian tape atau sayur yang gurih.",
    gambar: "img/produk/kueBasah/gabin.jpeg",
  },
  {
    nama: "Risol ragout",
    harga: 2500,
    deskripsi: "Risol dengan isi ragout ayam dan sayuran, dibalut tepung roti.",
    gambar: "img/produk/kueBasah/risol ragout.jpeg",
  },
  {
    nama: "Risol mayo",
    harga: 3000,
    deskripsi: "Risol berisi daging asap, telur, dan mayo yang creamy.",
    gambar: "img/produk/kueBasah/risol mayo.jpg",
  },
  {
    nama: "Pastel",
    harga: 2750,
    deskripsi: "Pastry goreng berisi sayuran dan telur dengan cita rasa gurih.",
    gambar: "img/produk/kueBasah/pastel.jpeg",
  },
  {
    nama: "Kue lumpur",
    harga: 2000,
    deskripsi: "Kue lembut berbahan kentang dengan aroma pandan yang khas.",
    gambar: "img/produk/kueBasah/lumpur.jpeg",
  },
  {
    nama: "Onde-onde",
    harga: 2750,
    deskripsi: "Bola ketan berisi kacang hijau dengan taburan wijen di luar.",
    gambar: "img/produk/kueBasah/onde onde.jpeg",
  },
  {
    nama: "Kue tok",
    harga: 2750,
    deskripsi: "Kue tradisional berisi kacang hijau, teksturnya kenyal.",
    gambar: "img/produk/kueBasah/kue tok.jpeg",
  },
  {
    nama: "Lapis bunga",
    harga: 2500,
    deskripsi: "Kue lapis warna-warni dengan tekstur lembut dan rasa manis.",
    gambar: "img/produk/kueBasah/lapis bunga.jpeg",
  },
  {
    nama: "Puding",
    harga: 2000,
    deskripsi: "Puding manis dengan tekstur lembut dan beragam rasa.",
    gambar: "img/produk/kueBasah/puding.jpg",
  },
  {
    nama: "Brownies / bolu",
    harga: 3000,
    deskripsi: "Kue coklat atau bolu yang lembut dan legit.",
    gambar: "img/produk/kueBasah/brownies.jpeg",
  },
  {
    nama: "Zebra",
    harga: 3000,
    deskripsi: "Bolu dengan motif belang hitam putih seperti zebra.",
    gambar: "img/produk/kueBasah/zebra.jpeg",
  },
  {
    nama: "Roti kukus",
    harga: 3000,
    deskripsi: "Roti empuk yang dikukus, cocok untuk teman minum teh.",
    gambar: "img/produk/kueBasah/roti kukus.jpeg",
  },
];

const sambalList = [
  {
    nama: "Sambal Cumi",
    deskripsi:
      "Sambal dengan potongan cumi yang gurih dan pedas, cocok untuk pecinta seafood.",
  },
  {
    nama: "Sambal Peda",
    deskripsi:
      "Sambal khas dengan ikan peda yang asin dan pedas, memberikan cita rasa khas Nusantara.",
  },
  {
    nama: "Sambal Teri",
    deskripsi:
      "Sambal dengan ikan teri renyah yang dipadukan dengan pedasnya cabai, pas untuk lauk nasi hangat.",
  },
];
const descSambal = document.querySelector(".desc");

// Pastikan elemen ditemukan sebelum lanjut
if (!descSambal) {
  console.error("Elemen .desc tidak ditemukan!");
} else {
  sambalList.forEach((item, i) => {
    let sambal = `<div class="carousel-item hidden flex flex-col gap-2">
      <h1 class="xl:text-6xl md:text-4xl sm:text-2xl text-xl font-semibold text-pink-500">
        ${item.nama}
      </h1>
      <p class="text-gray-600 xl:text-auto md:text-[14px] text-[12px] max-w-lg mx-auto my-4">
        ${item.deskripsi}
      </p>
      <div class="flex gap-2 items-center pesan-sambal">
        <button class="carousel-btn text-pink-500 sm:text-xl text-md border hover:bg-pink-500 hover:text-white prev-btn" data-index=${i}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button onclick="orderSambal('${item.nama}')" class=" bg-pink-500 xl:text-auto md:text-[14px] text-[13px] cursor-pointer text-white xl:w-[30%] md:w-[45%] sm:w-[60%] w-[40%] font-semibold rounded-full">
        Pesan
        </button>
        <button class="carousel-btn text-pink-500 sm:text-xl text-md border hover:bg-pink-500 hover:text-white next-btn" data-index=${i}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>`;

    descSambal.innerHTML += sambal;
  });

  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelectorAll(".prev-btn");
  const nextButton = document.querySelectorAll(".next-btn");

  let index = 0;
  let totalItems = items.length;

  function updateCarousel() {
    items.forEach((item) => item.classList.add("hidden")); // Sembunyikan semua
    items[index].classList.remove("hidden"); // Tampilkan item aktif
  }

  // Pastikan ada data sebelum memanggil updateCarousel
  if (totalItems > 0) {
    items[0].classList.remove("hidden"); // Tampilkan item pertama

    nextButton.forEach((nextButton) => {
      nextButton.addEventListener("click", (e) => {
        // Mengambil indeks dari data-index
        const currentIndex = parseInt(
          e.target.closest("button").getAttribute("data-index")
        );
        index = (currentIndex + 1) % totalItems; // Pergi ke item berikutnya
        updateCarousel();
      });
    });

    prevButton.forEach((prevButton) => {
      prevButton.addEventListener("click", (e) => {
        const currentIndex = parseInt(
          e.target.closest("button").getAttribute("data-index")
        );
        index = (currentIndex - 1 + totalItems) % totalItems; // Pergi ke item sebelumnya
        updateCarousel();
      });
    });
  } else {
    console.error("Tidak ada item dalam carousel!");
  }
}

const produkContainer = document.querySelector(".produk-items");
const loadMoreBtn = document.querySelector(".load-more button");
function getColumns() {
  if (window.innerWidth < 640) return 2; // Mobile: 1 kolom
  if (window.innerWidth < 800) return 4; // Tablet: 2 kolom
  if (window.innerWidth < 1024) return 8; // Laptop kecil: 3 kolom
  return 10; // Layar besar: 4 kolom
}

const itemsPerPage = 8;
let isShowingAll = false;

function generateProdukHTML(produkList) {
  return produkList
    .map(
      (item) => `
      <div class=" item flex flex-col produk sm:w-[230px] w-[170px] rounded-lg">
          <img src="${item.gambar}" loading="lazy" alt="${
        item.nama
      }" class="sm:w-[230px] sm:h-[180px] w-[170px] h-[140px] object-cover" />
          <h3 class="sm:text-md text-sm font-semibold my-2 text-start lazy">${
            item.nama
          }</h3>
          <p class="text-pink-500 font-bold text-start sm:text-sm text-[13px]">
            Rp ${item.harga.toLocaleString("id-ID")}
          </p>
          <p class=" text-start sm:text-[13px] text-[11px]">${
            item.deskripsi
          }</p>
          <button onclick="chatWA('${item.nama}', ${
        item.harga
      })" class="cssbuttons-io sm:text-sm text-[11px] font-semibold w-full">
            <span>
              Pesan Sekarang
            </span>
          </button>

      </div>
    `
    )
    .join("");
}

async function showAlert(
  type,
  pesan,
  judul = "",
  inputLabel = "",
  inputPlaceholder = ""
) {
  if (type === "error") {
    return Swal.fire({
      icon: "error",
      title: judul || "Terjadi Kesalahan!",
      text: pesan,
    });
  }

  if (type === "success") {
    return Swal.fire({
      icon: "success",
      title: judul || "Berhasil!",
      text: pesan,
    });
  }

  if (type === "info") {
    const { value: userInput } = await Swal.fire({
      title: judul || "Masukkan Data",
      input: "number",
      inputLabel: inputLabel,
      inputPlaceholder: inputPlaceholder,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value || isNaN(value) || value <= 0) {
          return "Masukkan jumlah yang valid!";
        }
      },
    });

    return userInput;
  }
}

async function chatWA(nama, harga) {
  if (!nama || !harga) {
    showAlert("error", "Nama atau harga produk tidak ditemukan!", "Kesalahan");
    return;
  }

  const nomorWA = "6281231157478";
  const jumlah = await showAlert(
    "info",
    "",
    "Masukkan Jumlah",
    "Jumlah Pesanan",
    "Masukkan jumlah yang ingin dipesan"
  );

  if (!jumlah) {
    return;
  }

  const pesan = `Halo Nac Snack,%0A%0ASaya ingin pesan%0A%0ANama : ${nama},%0AHarga Bijian : Rp ${harga.toLocaleString(
    "id-ID"
  )},%0AJumlah : ${jumlah}%0A%0ATerimakasih`;

  const url = `https://wa.me/${nomorWA}?text=${pesan}`;

  console.log("Membuka WhatsApp dengan URL:", url);

  window.open(url, "_blank");
}

async function orderSambal(nama) {
  if (!nama) {
    showAlert("error", "Nama atau harga produk tidak ditemukan!", "Kesalahan");
    return;
  }

  const nomorWA = "6281231157478";
  const jumlah = await showAlert(
    "info",
    "",
    "Masukkan Jumlah",
    "Jumlah Pesanan",
    "Masukkan jumlah yang ingin dipesan"
  );

  if (!jumlah) {
    return;
  }

  const pesan = `Halo Nac Snack,%0A%0ASaya ingin pesan%0A%0ANama : ${nama},%0AHarga Bijian : Menyesuaikan,%0AJumlah : ${jumlah}%0A%0ATerimakasih`;

  const url = `https://wa.me/${nomorWA}?text=${pesan}`;

  console.log("Membuka WhatsApp dengan URL:", url);

  window.open(url, "_blank");
}

function tampilkanProduk() {
  const produkTerpilih = isShowingAll
    ? dataProduk
    : dataProduk.slice(0, getColumns());
  produkContainer.innerHTML = generateProdukHTML(produkTerpilih);

  loadMoreBtn.textContent = isShowingAll ? "Sembunyikan" : "Lihat Selengkapnya";
}

loadMoreBtn.addEventListener("click", function () {
  isShowingAll = !isShowingAll;
  tampilkanProduk();
});

tampilkanProduk();

const images = [
  "img/produk/gallery/hantaran/hantaran (1).jpeg",
  "img/produk/gallery/hantaran/hantaran (1).jpg",
  "img/produk/gallery/hantaran/hantaran (2).jpeg",
  "img/produk/gallery/hantaran/hantaran (2).jpg",
  "img/produk/gallery/hantaran/hantaran (3).jpeg",
  "img/produk/gallery/hantaran/hantaran (3).jpg",
  "img/produk/gallery/hantaran/hantaran (4).jpeg",
];

const galleryContainer = document.querySelector(".gallery-items");

const products = [
  {
    url: "img/produk/gallery/hantaran/hantaran (1).jpg",
    category: "hantaran",
  },
  {
    url: "img/produk/gallery/hantaran/hantaran (1).jpeg",
    category: "hantaran",
  },
  {
    url: "img/produk/gallery/hantaran/hantaran (2).jpg",
    category: "hantaran",
  },
  {
    url: "img/produk/gallery/hantaran/hantaran (2).jpeg",
    category: "hantaran",
  },
  {
    url: "img/produk/gallery/hantaran/hantaran (3).jpg",
    category: "hantaran",
  },
  {
    url: "img/produk/gallery/hantaran/hantaran (3).jpeg",
    category: "hantaran",
  },
  {
    url: "img/produk/gallery/hantaran/hantaran (4).jpeg",
    category: "hantaran",
  },
  {
    url: "img/produk/gallery/kueKering/kueKering (1).jpg",
    category: "kueKering",
  },
  {
    url: "img/produk/gallery/kueKering/kueKering (1).png",
    category: "kueKering",
  },
  {
    url: "img/produk/gallery/kueKering/kueKering (2).jpg",
    category: "kueKering",
  },
  {
    url: "img/produk/gallery/kueKering/kueKering (3).jpg",
    category: "kueKering",
  },
  {
    url: "img/produk/gallery/makanan/makanan (1).jpeg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (1).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (2).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (3).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (4).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (5).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (6).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (7).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (8).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (9).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/makanan/makanan (10).jpg",
    category: "makanan",
  },
  {
    url: "img/produk/gallery/snack/Snack (1).jpg",
    category: "snack",
  },
  {
    url: "img/produk/gallery/snack/Snack (2).jpg",
    category: "snack",
  },
  {
    url: "img/produk/gallery/snack/Snack (3).jpg",
    category: "snack",
  },
  {
    url: "img/produk/gallery/snack/Snack (4).jpg",
    category: "snack",
  },
  {
    url: "img/produk/gallery/snack/Snack (5).jpg",
    category: "snack",
  },
  {
    url: "img/produk/gallery/snack/Snack (6).jpg",
    category: "snack",
  },
  {
    url: "img/produk/gallery/snack/Snack (7).jpg",
    category: "snack",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (10).jpeg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (10).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (11).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (11).jpeg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (12).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (12).jpeg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (13).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (14).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (15).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (16).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (17).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (18).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (19).jpg",
    category: "snackBox",
  },
  {
    url: "img/produk/gallery/snackBox/snackBox (20).jpg",
    category: "snackBox",
  },
];

// const galleryContainer = document.querySelector('.gallery-container');
const filterButtons = document.querySelectorAll(".filter-button");

// Tambahkan elemen ke galeri
products.forEach((produk) => {
  let containerImage = `
    <div class="gallery-item sm:w-[200px] overflow-hidden sm:h-[200px] w-[150px] h-[150px] object-cover" data-category="${produk.category}">
      <img class="w-full h-full rounded-lg" src="${produk.url}" alt="Gallery Image" />
    </div>
  `;
  galleryContainer.innerHTML += containerImage;
});

// Fungsi untuk memfilter item
function filterGallery(filter) {
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    const match =
      filter === "all" || item.getAttribute("data-category") === filter;
    item.classList.toggle("hidden", !match); // Menyembunyikan elemen yang tidak cocok
  });
}

// Set kategori default
const defaultCategory = "hantaran"; // Ubah ke kategori lain jika ingin
filterGallery(defaultCategory);

// Tambahkan filter untuk tombol
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Menghapus kelas 'active' dari semua tombol filter
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Menambahkan kelas 'active' pada tombol yang diklik
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");
    filterGallery(filter); // Panggil fungsi filter
  });
});
