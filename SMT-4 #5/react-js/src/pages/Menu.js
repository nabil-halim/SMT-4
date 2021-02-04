import { useState } from 'react';
import Tabel from './Tabel';

function Menu() {
  const title = "Daftar Menu Restoran";
    const [menus,setMenu] = useState(
        [
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
        ]
    );
    return (
      <div className="App">
        <Tabel menu={menus} title = {title} />
      </div>
    );
  }
  
  export default Menu;
  