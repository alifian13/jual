// Mendapatkan data dari data.json dan menampilkannya di halaman
fetch('https://raw.githubusercontent.com/alifian13/jual/refs/heads/main/data.json')
    .then(response => response.json())
    .then(data => {
        const linkContainer = document.getElementById('link-container');
        
        data.forEach(item => {
            // Membuat elemen tautan
            const linkItem = document.createElement('a');
            linkItem.className = 'block w-full py-3 px-4 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition';
            linkItem.href = item.link;
            linkItem.target = '_blank'; // Membuka tautan di tab baru
            linkItem.textContent = item.nama;

            // Menambahkan deskripsi di bawah tautan
            const linkDescription = document.createElement('p');
            linkDescription.className = 'text-sm text-gray-200 mt-2';
            linkDescription.textContent = item.deskripsi;

            // Menambahkan elemen ke container
            linkItem.appendChild(linkDescription);
            linkContainer.appendChild(linkItem);
        });
    })
    .catch(error => console.error('Gagal memuat data:', error));
