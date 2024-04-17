// Obtener el parámetro 'user' de la URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('user');

// URL del archivo JSON del usuario
const userDataUrl = `./data/${username}.json`;

// Función para cargar los datos del usuario desde el archivo JSON
async function loadUserData() {
    try {
        // Obtener los datos del usuario desde el archivo JSON
        const response = await fetch(userDataUrl);
        if (!response.ok) {
            throw new Error('Usuario no encontrado');
        }
        const userData = await response.json();

        // Actualizar el contenido del card con los datos del usuario
        document.getElementById('userName').textContent = userData.name;
        document.querySelector('.card__text p').textContent = userData.position;
        document.querySelector('.card__image').setAttribute('src', userData.profileImageUrl);
        document.getElementById('phoneNumberLink').setAttribute('href', `tel:${userData.phoneNumber}`);
        document.getElementById('emailLink').setAttribute('href', `mailto:${userData.email}`);
    } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
        // Mostrar mensaje de usuario no encontrado
        document.getElementById('userCard').innerHTML = `<p>Usuario no encontrado</p><p><a href="mailto:info@corkandseal.com">info@corkandseal.com</a></p>`;
    }
}

// Cargar los datos del usuario al cargar la página
window.onload = loadUserData;
