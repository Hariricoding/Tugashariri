const tombolCart = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cart-count");
const totalHarga = document.getElementById("total-harga");

let jumlah = 0;
let total = 0;

tombolCart.forEach(function (btn) {
  btn.addEventListener("click", function () {
    jumlah++;
    cartCount.textContent = jumlah;

    let harga = parseInt(btn.getAttribute("data-harga"));
    total += harga;

    totalHarga.textContent = total.toLocaleString("id-ID");

    alert("Produk berhasil ditambahkan!");
  });
});

const searchInput = document.querySelector("input[type='search']");
const produk = document.querySelectorAll(".col-md-4");

searchInput.addEventListener("keyup", function () {
  let keyword = searchInput.value.toLowerCase();

  produk.forEach(function (card) {
    let nama = card.innerText.toLowerCase();

    if (nama.includes(keyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
