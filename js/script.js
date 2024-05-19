document.getElementById('hitung').addEventListener('click', function() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
        document.getElementById('hasil').innerHTML = 'Mohon masukkan nilai yang valid.';
        return;
    }

    // Hitung luas segitiga
    const luas = 0.5 * alas * tinggi;

    // Hitung keliling segitiga
    const sisi1 = Math.sqrt(alas ** 2 + tinggi ** 2);
    const keliling = alas + tinggi + sisi1;

    document.getElementById('hasil').innerHTML = `Luas Segitiga: ${luas.toFixed(2)}<br>Keliling Segitiga: ${keliling.toFixed(2)}`;
});