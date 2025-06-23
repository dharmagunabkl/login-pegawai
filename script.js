const pegawai = ['Rahmat Kevin Praditia', 'Andi', 'Sherly Yuniarsi', 'Nada Nur Sella', 'Septian Darma Putra Siagian'];

function login() {
    const nama = document.getElementById("nama").value.trim();
    const error = document.getElementById("error");
    if (pegawai.includes(nama)) {
        localStorage.setItem("nama", nama);
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Nama tidak ditemukan.";
    }
}
