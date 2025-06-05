<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="logo-container">
        <div class="logo-placeholder">
          <img src="@/assets/logo-chapaturuta.png" alt="Logo" class="logo" />
        </div>
      </div>

      <h2 class="title">Iniciar Sesión</h2>
      <p class="subtitle">Acceso para empresas</p>

      <form @submit.prevent="handleLoginEmpresa">
        <div class="form-group">
          <input
              type="email"
              v-model="email"
              placeholder="Email Corporativo"
              class="form-input"
              required
          />
        </div>

        <div class="form-group">
          <input
              type="password"
              v-model="password"
              placeholder="Password"
              class="form-input"
              required
          />
        </div>

        <button type="submit" class="btn-primary">
          Ingresar
        </button>
      </form>

      <div class="auth-links">
        <router-link to="/login" class="link">Login Usuario</router-link>
        <span class="separator">|</span>
        <router-link to="/register" class="link">Registrar Empresa</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyLoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLoginEmpresa() {
      this.$root.$data.isAuthenticated = true;
      this.$root.$data.userType = 'empresa';
      this.$router.push('/inicio');
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}

.auth-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 380px;
  text-align: center;
}

.logo-container {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.logo-placeholder {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 100%;
  height: 100%;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.subtitle {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-input {
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: border-color 0.3s, background-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #4A90E2;
  background-color: white;
}

.form-input::placeholder {
  color: #999;
}

.btn-primary {
  width: 100%;
  padding: 0.9rem;
  background-color: #888;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #666;
}

.auth-links {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.separator {
  color: #ccc;
  font-size: 0.9rem;
}

.link {
  color: #4A90E2;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}
</style>
