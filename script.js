function login() {
  const nama = document.getElementById("nama").value.trim().toLowerCase();
  if (pegawaiList.includes(nama)) {
    localStorage.setItem("pegawai", nama);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Nama tidak ditemukan.";
  }
}

function loadDashboard() {
  const nama = localStorage.getItem("pegawai");
  if (!nama) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("namaPegawai").innerText = nama.charAt(0).toUpperCase() + nama.slice(1);
  const links = linkData[nama] || [];
  const list = document.getElementById("linkList");

  if (links.length === 0) {
    list.innerHTML = "<li>Tidak ada link untuk Anda.</li>";
  } else {
    links.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.innerText = link.name;
      a.target = "_blank";
      li.appendChild(a);
      list.appendChild(li);
    });
  }
}

function logout() {
  localStorage.removeItem("pegawai");
  window.location.href = "index.html";
}

if (window.location.pathname.includes("dashboard.html")) {
  window.onload = loadDashboard;
}
