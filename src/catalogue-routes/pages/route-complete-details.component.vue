<script>
import RouteDetailItem from '../components/route-details/route-details-item.component.vue';
import ScheduleDetailItem from '../components/route-details/schedule-details-item.component.vue';

export default {
  name: 'RouteDetailPage',
  components: {
    RouteDetailItem,
    ScheduleDetailItem
  },
  data() {
    return {
      routeData: {
        price: 0.00,
        durationMin: 0
      },
      companyData: {
        name: 'Nombre de la Empresa de Transporte',
        phone: '+51 9234232'
      },
      scheduleData: [
        { day: 'Domingo', timeFrom: '12:00pm', timeTo: '5:00pm', isAvailable: true },
        { day: 'Lunes', timeFrom: '12:00pm', timeTo: '5:00pm', isAvailable: true },
        { day: 'Martes', timeFrom: '12:00pm', timeTo: '5:00pm', isAvailable: true },
        { day: 'Miércoles', timeFrom: '12:00pm', timeTo: '5:00pm', isAvailable: true },
        { day: 'Jueves', timeFrom: '12:00pm', timeTo: '5:00pm', isAvailable: true },
        { day: 'Viernes', timeFrom: '12:00pm', timeTo: '5:00pm', isAvailable: true },
        { day: 'Sábado', timeFrom: '12:00pm', timeTo: '5:00pm', isAvailable: true }
      ]
    }
  },
  methods: {
    addToMyRoutes(route) {
      console.log('Adding route to my routes:', route);
      // lógica para guardar en favoritos
    }
  }
}
</script>

<template>
  <div class="route-detail-page">
    <!-- Header -->
    <div class="route-header">
      <div class="header-content">
        <div class="route-title">
          <h1>Ruta Procedencia a Destino</h1>
        </div>
        <button class="add-route-btn" @click="addToMyRoutes">
          Agregar a mis rutas
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="route-content">
      <!-- Image Gallery -->
      <div class="image-gallery">
        <div class="image-placeholder">
          <div class="placeholder-icon">🖼️</div>
        </div>
        <div class="image-placeholder">
          <div class="placeholder-icon">🖼️</div>
        </div>
      </div>

      <div class="route-info-container">
        <div class="route-info-left">
          <RouteDetailItem
              :route="routeData"
              :company="companyData"
          />
        </div>

        <div class="route-info-right">
          <ScheduleDetailItem
              :schedules="scheduleData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.route-detail-page {
  width: 100%;
  min-height: 100vh;
  background: #f8fafc;
}

.route-header {
  background: white;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.route-title h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
}

.add-route-btn {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}

.add-route-btn:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

.route-content {
  padding: 32px 24px;
  min-height: calc(100vh - 200px);
}

.image-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
}

.image-placeholder {
  aspect-ratio: 16/9;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
}

.placeholder-icon {
  font-size: 48px;
  opacity: 0.4;
}

.route-info-container {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.route-info-left {
  height: fit-content;
}

.route-info-right {
  height: fit-content;
}

/* Estilos para hacer que los componentes importados se vean bien */
.route-info-left :deep(.route-detail-container) {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  margin-bottom: 0;
}

.route-info-right :deep(.schedule-container) {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  margin-bottom: 0;
}

@media (max-width: 1024px) {
  .route-content {
    padding: 24px 16px;
  }

  .route-info-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .route-info-right {
    order: -1;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .image-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
