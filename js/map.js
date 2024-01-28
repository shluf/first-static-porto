var map = L.map('map').setView([-7.767959, 110.378545], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-7.767959, 110.378545]).addTo(map)
    .bindPopup('Universitas Gadjah Mada')
    .openPopup();