
function login() {
    const nama = document.getElementById("nama").value.trim();
    if (daftarPegawai.includes(nama)) {
        window.location.href = "dashboard.html?nama=" + encodeURIComponent(nama);
    } else {
        alert("Nama tidak ditemukan dalam sistem.");
    }
}
