const daftarPegawai = ['andi', 'budi', 'siti', 'kevin'];

function login() {
  const nama = document.getElementById("nama").value.toLowerCase();
  const error = document.getElementById("error");

  if (daftarPegawai.includes(nama)) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("welcome-container").style.display = "block";
    document.getElementById("welcome-msg").textContent = "Selamat datang, " + nama.charAt(0).toUpperCase() + nama.slice(1) + "!";
    error.textContent = "";
  } else {
    error.textContent = "Nama tidak ditemukan.";
  }
}

function logout() {
  document.getElementById("login-container").style.display = "block";
  document.getElementById("welcome-container").style.display = "none";
  document.getElementById("nama").value = "";
}