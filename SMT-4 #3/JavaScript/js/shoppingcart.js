let tblmenu = [
  {
    idmenu: 14,
    idkategori: 30,
    menu: "Ayam goreng",
    gambar: "ayam.jpeg",
    harga: 5000,
  },
  {
    idmenu: 8,
    idkategori: 33,
    menu: "Anggur",
    gambar: "anggur.jpeg",
    harga: 5000,
  },
  {
    idmenu: 13,
    idkategori: 30,
    menu: "Nasi",
    gambar: "nasi.jpeg",
    harga: 2000,
  },
  {
    idmenu: 10,
    idkategori: 33,
    menu: "Jeruk",
    gambar: "jeruk.jpeg",
    harga: 4000,
  },
  {
    idmenu: 15,
    idkategori: 30,
    menu: "Ikan bakar",
    gambar: "ikan.jpeg",
    harga: 15000,
  },
  {
    idmenu: 20,
    idkategori: 31,
    menu: "Es Jus",
    gambar: "esjus.jpeg",
    harga: 7000,
  },
];

let tampil = tblmenu.map((kolom) => {
  return `<div class="produk-content">
    <div class="image">
      <img src="img/${kolom.gambar}" />
    </div>
    <div class="titel">
      <h2>${kolom.menu}</h2>
    </div>
    <div class="deskripsi">
      
    </div>
    <div class="harga">
      <h2>${kolom.harga}</h2>
    </div>
    <div class="btn-beli">
          <button data-idmenu=${kolom.idmenu}>Beli</button>
        </div>
  </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll('.btn-beli > button');

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
          if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
            cart.push(a);
            console.log(cart);
          }
        })
    }
    
}

// console.log(cart);
