// assets/js/auth.js

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. LÓGICA DE REGISTRO (MOCK DE BASE DE DATOS)
  // ==========================================
  // Buscamos el ID exacto que pusiste en tu HTML
  const registerForm = document.getElementById("form-register-client");

  if (registerForm) {
    registerForm.addEventListener("submit", (evento) => {
      evento.preventDefault();

      // Capturamos los datos usando los IDs de tu vista
      const newEmail = document.getElementById("email").value.trim();
      const newPassword = document.getElementById("password").value.trim();
      const confirmPassword = document
        .getElementById("confirm_password")
        .value.trim();

      // Validación estricta
      if (newPassword !== confirmPassword) {
        alert("Error de QA: Las contraseñas no coinciden.");
        return;
      }

      // Guardamos en memoria simulando PostgreSQL
      localStorage.setItem("db_simulada_email", newEmail);
      localStorage.setItem("db_simulada_password", newPassword);

      alert(
        "Cuenta creada exitosamente en la base de datos local. Redirigiendo al Login...",
      );

      // Redirigir al login usando el estándar ES2020
      globalThis.location.href = "login.html";
    });
  }

  // ==========================================
  // 2. LÓGICA DE LOGIN (CONSULTANDO EL MOCK)
  // ==========================================
  const loginForm = document.getElementById("form-login");

  if (loginForm) {
    loginForm.addEventListener("submit", (evento) => {
      evento.preventDefault();

      // En la página de login, los IDs también son 'email' y 'password'
      const emailInput = document.getElementById("email").value.trim();
      const passwordInput = document.getElementById("password").value.trim();

      // Extraemos los datos del registro
      const dbEmail = localStorage.getItem("db_simulada_email");
      const dbPassword = localStorage.getItem("db_simulada_password");

      if (!dbEmail) {
        alert(
          "Acceso Denegado: No existe ninguna cuenta registrada en el sistema.",
        );
        return;
      }

      setTimeout(() => {
        if (emailInput === dbEmail && passwordInput === dbPassword) {
          localStorage.setItem(
            "jwt_token",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.simulado",
          );
          localStorage.setItem("user_session", emailInput);

          alert(
            "Autenticación exitosa. Credenciales validadas. Redirigiendo al catálogo...",
          );
          globalThis.location.href = "../shop/catalog.html";
        } else {
          alert("Acceso Denegado: El correo o la contraseña son incorrectos.");
        }
      }, 500);
    });
  }
});
