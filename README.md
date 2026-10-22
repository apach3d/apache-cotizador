# Cotizador Apache 3D (con inicio de sesión y datos en la nube)

Archivos:
- `index.html` — página de inicio de sesión (Google).
- `cotizador.html` — la calculadora; se abre sola después de entrar.
- `firebase-config.js` — aquí pegas los datos de tu proyecto Firebase.
- `favicon.svg` — el ícono de la pestaña del navegador (el logo de Apache 3D).

## 1. Crear el proyecto en Firebase (gratis)
1. Entra a https://console.firebase.google.com con tu cuenta de Google y crea un proyecto (puedes desactivar Google Analytics).
2. En el proyecto: **Compilación > Authentication > Comenzar > Método de acceso > Google > Habilitar** (elige tu correo como correo de asistencia).
3. **Compilación > Firestore Database > Crear base de datos**. Elige modo producción y una región cercana (por ejemplo `us-east1` o `southamerica-east1`).
4. En Firestore, pestaña **Reglas**, pega esto y pulsa Publicar (cambia el correo por el tuyo):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null
        && request.auth.uid == userId
        && request.auth.token.email == 'TU_CORREO@gmail.com';
    }
  }
}
```
5. **Configuración del proyecto (engranaje) > General > Tus apps > </> (Web)**. Registra la app y copia el objeto `firebaseConfig`.
6. Pega esos valores en `firebase-config.js`.

## 2. Subir a GitHub Pages
1. Crea un repositorio y sube los cuatro archivos (más README.md si quieres) a la raíz.
2. **Settings > Pages > Deploy from a branch > main / (root)**.
3. Tu página queda en `https://TU_USUARIO.github.io/NOMBRE_REPO/`.
4. Vuelve a Firebase: **Authentication > Configuración > Dominios autorizados > Agregar dominio** y escribe `TU_USUARIO.github.io`.

## 3. Usar
Abre el enlace en el computador y en el celular, entra con Google y listo. Las cotizaciones y los valores del taller aparecen en los dos. Funciona sin internet y se sincroniza al volver la conexión.
En el celular, usa "Agregar a pantalla de inicio" para abrirla como una app.
