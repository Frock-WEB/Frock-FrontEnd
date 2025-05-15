<script>
import { getRouteDetails } from '../services/route-api.service.js';
import RouteDetailItem from '../components/route-detail-item.component.vue';
import RouteImageItem from '../components/route-image-item.component.vue';
import ScheduleDetailItem from '../components/schedule-detail-item.component.vue';

export default {
  name: "route-complete-detail",
  components: {
    RouteDetailItem,
    RouteImageItem,
    ScheduleDetailItem
  },
  props: {
    routeId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      route: null,
      stops: [],
      schedules: [],
      companies: [],
      loading: true,
      error: null
    }
  },
  computed: {
    mainCompany() {
      return this.companies && this.companies.length > 0 ? this.companies[0] : null;
    },
    routeImages() {
      return this.stops.map(stop => stop.imageUrl).filter(Boolean);
    },
    allSchedules() {
      return this.schedules.flat();
    }
  },
  async created() {
    try {
      this.loading = true;
      const { route, stops, schedules, companies } = getRouteDetails(this.routeId);
      this.route = route;
      this.stops = stops;
      this.schedules = schedules;
      this.companies = companies;
    } catch (error) {
      console.error('Error fetching route details:', error);
      this.error = 'No se pudo cargar los detalles de la ruta';
    } finally {
      this.loading = false;
    }
  }
}
</script>

<template>
  <div class="route-complete-detail">
    <div v-if="loading" class="loading-state">
      <pv-progress-spinner />
      <p>Cargando detalles de la ruta...</p>
    </div>

    <div v-else-if="error" class="error-state">
      <p>{{ error }}</p>
      <pv-button label="Reintentar" @click="created" />
    </div>

    <div v-else-if="route" class="route-content">
      <RouteImageItem :images="routeImages" />

      <RouteDetailItem
          :route="route"
          :company="mainCompany"
      />

      <ScheduleDetailItem :schedules="allSchedules" />
    </div>
  </div>
</template>

<style scoped>
.route-complete-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 20px;
}

.route-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 768px) {
  .route-complete-detail {
    padding: 10px;
  }
}
</style>