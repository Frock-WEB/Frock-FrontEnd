import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/Login.vue';
import RegisterView from '../views/auth/Register.vue';
import CompanyRegisterView from '../views/auth/Company-register.vue';
import RouteComponent from '../route/components/route.component.vue';
import RouteCompleteDetail from '../route-detail/pages/route-complete-detail.component.vue';


// Importamos un componente placeholder para las rutas que aún no están implementadas
const PlaceholderView = {
    template: '<div class="placeholder"><h2>Esta página está en desarrollo</h2><p>Próximamente disponible</p></div>',
    style: `
    .placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 60px);
      text-align: center;
      padding: 20px;
    }
    h2 {
      margin-bottom: 10px;
      color: #333;
    }
    p {
      color: #666;
    }
  `
}

// Definimos las rutas
const routes = [
    {
        path: '/',
        component: RouteComponent
    },
    {
        path: '/route/:id',
        name: 'RouteDetail',
        component: RouteCompleteDetail,
        props: (route) => ({ routeId: route.params.id })
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Aquí puedes agregar guardias de navegación para verificar la autenticación
// Por ejemplo:
/*
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null

  // Si la ruta requiere autenticación y el usuario no está autenticado
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
*/

export default router