var nomorAcak1 = Math.floor(Math.random() * 6) + 1; // Dapetin Nomor Acak
var dadu = "images/dice" + nomorAcak1 + ".png"; // Buat alamat gambar dadu(images) kemudian simpan ke dalam Variabel
document.querySelectorAll("img")[0].setAttribute("src", dadu); // Manipulasi img element dan ubah src attribute

var nomorAcak2 = Math.floor(Math.random() * 6) + 1;
var dadu = "images/dice" + nomorAcak2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", dadu);

if (nomorAcak1 > nomorAcak2) {
  document.querySelector("h1").innerHTML = "🚩P1 Menang";
} else if (nomorAcak1 < nomorAcak2) {
  document.querySelector("h1").innerHTML = "🚩P2 Menang";
} else {
  document.querySelector("h1").innerHTML = "DRAW";
}
