<template>
  <div id="app">
    <!-- El toolbar solo se muestra si el usuario está autenticado y no estamos en una página de auth -->
    <app-toolbar v-if="isAuthenticated && !isAuthPage" />

    <!-- Router view para mostrar el componente correspondiente a la ruta actual -->
    <router-view
        @login-success="handleLoginSuccess"
        @register-success="handleRegisterSuccess"
    />
  </div>
</template>

<script>
import AppToolbar from './components/AppToolbar.vue'

export default {
  name: 'App',
  components: {
    AppToolbar
  },
  data() {
    return {
      isAuthenticated: false
    }
  },
  created() {
    // Verificar si hay un token almacenado para determinar si el usuario está autenticado
    this.checkAuthentication();

    // Forzar redirección a login si estamos en la ruta raíz
    if (this.$route.path === '/') {
      this.$router.push('/login');
    }
  },
  methods: {
    checkAuthentication() {
      // Verificar si hay un token en localStorage
      const token = localStorage.getItem('auth_token');
      this.isAuthenticated = !!token;
    },
    handleLoginSuccess() {
      this.isAuthenticated = true;
      this.$router.push('/rutas');
    },
    handleRegisterSuccess() {
      this.isAuthenticated = true;
      this.$router.push('/rutas');
    }
  },
  computed: {
    isAuthPage() {
      const authRoutes = ['/login', '/register', '/register-company'];
      return authRoutes.includes(this.$route.path);
    }
  }
}
</script>

<style>
:root {
  --color-primary: #7A78FF;
  --color-off: #CCCCFF;
  --color-secondary: #F8F9F0;
  --color-tertiary-gray: #E8E0E8;
  --color-tertiary-inputs: #BCB73E;
  --color-text: #000000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: white;
}

#app {
  width: 100%;
  min-height: 100vh;
  background-color: white;
}
</style>