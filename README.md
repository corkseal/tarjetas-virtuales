<!--### DATOS DE LA EMPRESA
1. Edita el archivo [company.json](data/company.json) con los datos de la empresa.
```json
{
    "backgroundImageUrl": "", -- Foto de fondo
    "companyName": "", -- Nombre de la empresa
    "companyPhoneNumber": "", -- Teléfono de la empresa
    "companyEmail": "" -- Email (por ejemplo, info@tuempresa.mail)
  }
```-->

### AÑADIR UN NUEVO USUARIO
1. Copia el contenido de [template.txt](data/template.txt).
```json
{
    "name": "", -- Nombre y apellido
    "position": "", -- Cargo en la empresa (por ejemplo, Comercial)
    "profileImageUrl": "", -- Foto del empleado
    "phoneNumber": "", -- Número de teléfono
    "email": "" -- Email corporativo
  }
  
```
2. Crea un nuevo archivo en el directorio [`data`](data), el nombre del archivo será el usuario con el que se accederá a la tarjeta virtual.
3. Pega el contenido que has copiado y edita la información según los datos del usuario.
4. Podrás acceder a la tarjeta usando ``https://{tu dominio}/index.html/?user={usuario}``.

### ELIMINAR UN USUARIO
1. Bastará con eliminar el archivo correspondiente a ese usuario de la ruta [`data`](data).
