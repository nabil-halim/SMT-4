<?php

require_once "koneksi.php";

$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['alamat'];
$telp = $dataPelanggan['telp'];

if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {

    $sql = "INSERT INTO tblpelanggan (idpelanggan,pelanggan,alamat,telp) VALUES('','$pelanggan','$alamat','$telp')";

    if ($result = mysqli_query($con, $sql)) {
        echo "Data sudah disimpan";
    } else {
        echo "Data gagal disimpan";
    }
} else {
    echo "Data Kosong";
}
