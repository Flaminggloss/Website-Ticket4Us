function kasir() { // fungsi untuk hitung total

	// 1. ambil nilai quantity, ubah ke angka, default 0
	let a = parseFloat(document.getElementById("qty").value) || 0;

	// 2. ambil nilai harga, ubah ke angka, default 0
	let b = parseFloat(document.getElementById("harga").value) || 0;

	// 3. hitung total = qty * harga
	let hasil = a * b;

   	// 4. tampilkan total ke span dengan id "hasil"
   	document.getElementById("hasil").innerText = hasil;
}
