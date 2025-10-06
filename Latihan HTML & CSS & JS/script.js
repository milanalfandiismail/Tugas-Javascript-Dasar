console.log("Script Praktikum Dijalankan");

const elNama = document.getElementById("nama-mhs");
const elNilai = document.getElementById("nilai-mhs");
const elStatus = document.getElementById("status-kelulusan");

const inputNama = document.getElementById("input-nama");
const inputNilai = document.getElementById("input-nilai");

document.getElementById("submit-btn").addEventListener("click", function () {

  const namaMahasiswa = inputNama.value;
  let nilai = parseInt(inputNilai.value);

  elNama.textContent = namaMahasiswa;
  elNilai.textContent = nilai;

  let pesanStatus = "";
  let isLulus = false;

  if (nilai >= 75) {
    pesanStatus = "Selamat, Anda Dinyatakan LULUS! 🎉";
    isLulus = true;
  } else {
    pesanStatus = "Tetap Semangat, Anda Harus Mengulang. 😥";
    isLulus = false;
  }

  elStatus.textContent = pesanStatus;

  if (isLulus === true) {
    elStatus.style.color = "green";
    elStatus.style.fontWeight = "bold";
  } else {
    elStatus.style.color = "red";
    elStatus.style.fontWeight = "bold";
  }
});