// Ambil Elemen
const tombol = document.getElementById("btn");
const teks = document.getElementById("teks");

// Event klik tombol
tombol.addEventListener("click", function () {
    teks.TextContent = "Teks berhasil diubah dengan Javascript!";
    teks.style.color = "green";
} 

)