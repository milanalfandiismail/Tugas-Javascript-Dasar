// Fungsi ubah teks & warna dengan menggunakan getElemenById()
function ubahDenganId() {
    const paragrafId = document.getElementById("teks-id");
    paragrafId.textContent = "Teks ini diubah dengan getElementById()";
    paragrafId.style.color = "green";
    paragrafId.style.fontWeight = "bold";
    console.log("berhasil diubah dengan getElementById()");
}

// Fungsi ubah teks & warna menggunakan getQuerySelector()
function ubahDenganQuery() {
    const paragrafClass = document.querySelector(".teks-class");
    paragrafClass.textContent = "Teks ini diubah dengan querySelector()";
    paragrafClass.style.color = "blue";
    paragrafClass.style.fontstyle = "italic";
    console.log("Berhasil diubah dengan querySelector()");
}
