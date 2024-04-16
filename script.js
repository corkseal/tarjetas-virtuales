$(document).ready(function() {
  console.log('Documento listo');

  // Obtener parámetro de la URL (?user=nombredeusuario)
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('user');
  console.log('Usuario:', username);

  // Obtener datos comunes de la empresa
  fetch('data/company.json')
    .then(response => response.json())
    .then(companyData => {
      console.log('Datos de la empresa:', companyData);
      
      // Obtener datos del usuario desde el archivo JSON
      fetch(`data/${username}.json`)
        .then(response => response.json())
        .then(userData => {
          console.log('Datos del usuario:', userData);
          
          const card = `
            <div class="background-image" style="background-image: url('${companyData.backgroundImageUrl}')"></div>
            <center><img src="${userData.profileImageUrl}" alt="Foto de ${userData.name}"></center>
            <div class="employee-info">
              <h2>${userData.name}</h2>
              <p>${userData.position}</p>
              <div class="btn-group" role="group">
                <a href="tel:${userData.phoneNumber}" class="btn btn-primary"><i class="fas fa-phone"></i></a>
                <a href="https://wa.me/${userData.whatsappNumber}" class="btn btn-success"><i class="fab fa-whatsapp"></i></a>
                <a href="mailto:${userData.email}" class="btn btn-info"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
            <div class="company-info">
              <p>${companyData.companyName}</p>
              <p>${companyData.companyPhoneNumber}</p>
              <p>${companyData.companyEmail}</p>
            </div>
          `;
          console.log('Tarjeta de empleado generada:', card);
          
          $('#employee-card').html(card);
        })
        .catch(error => console.error('Error al cargar los datos del usuario:', error));
    })
    .catch(error => console.error('Error al cargar los datos de la empresa:', error));
});
