// Pega aquí la configuración de tu app web de Firebase
// (Firebase Console > Configuración del proyecto > Tus apps > Configuración del SDK).
// Estos datos no son secretos: la seguridad la dan el inicio de sesión y las reglas de Firestore.
export const firebaseConfig = {
  apiKey: "AIzaSyDg1ywW_OzTuVuaQo1qrp1wOvozIhcE3Ho",
  authDomain: "apache-cotizador.firebaseapp.com",
  projectId: "apache-cotizador",
  storageBucket: "apache-cotizador.firebasestorage.app",
  messagingSenderId: "735693642089",
  appId: "1:735693642089:web:6843de9b25e6aefbeb85f8"
};

// Opcional: correos que pueden entrar. Déjalo vacío [] para aceptar cualquier cuenta de Google
// (cada cuenta solo vería sus propios datos). Ejemplo: ["tucorreo@gmail.com"]
// Para bloquearlo de verdad, usa también la regla con tu correo en Firestore (ver README).
export const allowedEmails = [];
