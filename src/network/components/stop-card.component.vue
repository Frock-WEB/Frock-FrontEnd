<script>

import DeleteStopPopupComponent from "@/network/components/stop-popUps/delete-stop-popup.component.vue"
import EditStopPopupComponent from "@/network/components/stop-popUps/edit-stop-popup.component.vue"

export default {
  name: "stopCard",

  components: { deleteStopPopUp: DeleteStopPopupComponent, editStopPopUp: EditStopPopupComponent },

  emits: ['updated', 'deleted'],

  //objeto stop
  props: ['stop'],
}
</script>

<template>
  <div class="stop-card">
    <div class="stop-card-content">
      <div class="test-container">
        <div class="image-container">
          <img src="https://picsum.photos/360/165" alt="test-image" width="360" height="165">
        </div>
        <div class="details-container">
          <div class="header-details-container">
            <h1>{{ stop.name }}</h1>
            <h2> {{ stop.location }}</h2>
          </div>
          <div class="description-details-container">
            <div class="address-container">
              <i class="pi pi-map-marker" style="font-size: 1rem; color: var(--color-primary)"></i>
              <h2>{{stop.address}}</h2>
            </div>
            <div class="reference-container">
              <i class="pi pi-question-circle" style="font-size: 1rem; color: var(--color-primary)"></i>
              <h2>{{ stop.reference }}</h2>
            </div>
          </div>
          <pb-Button class="ubicacion-button" label="Ver Ubicacion"/>
        </div>
      </div>
      <div class="main-button-frame">
        <edit-stop-pop-up :stop="stop" @updated="$emit('updated', $event)"/>
        <delete-stop-pop-up :stop-id="stop.id" @deleted="$emit('deleted', $event)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.stop-card { /*Por no decir todos, toda esta configuracion fue traida desde el figma pero de manera manual*/
  /*Dimensiones*/
  width: 100%;
  /*Padding*/
  padding: 20px;

  /*Borders*/
  border-color: var(--color-off);
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  display: flex;
  /*Background Color*/
  background-color: var(--color-white);
}
.stop-card-content {
  display: flex;
  flex-direction: row;
  width: 100%;
}


.test-container {
  display: flex;
  flex-direction: row;
  /**/
  gap: 20px;
  flex: 1;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
}

.image-container img {
  border-radius: 5px;
}

.details-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.header-details-container {
  display: flex;
  flex-direction: column;
}

.header-details-container h1{
  color: var(--color-primary);
  font-weight: normal;
  font-size: 25px;
}

.header-details-container h2{
  color: var(--color-slate-400);
  font-weight: normal;
  font-size: 14px;
}

.description-details-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.description-details-container h2{
  color: #484848;
  font-weight: normal;
  font-size: 14px;
}
.address-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.reference-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}


.ubicacion-button {
  /*Flex para centrar*/
  display: flex;
  align-items: center;
  justify-content: center;

  /*Button en si*/
  background-color: var(--color-primary);

  border: none;
  border-radius: 5px;

  padding: 5px 10px;

  max-height: 34px;
  height: 100%;

  width: max-content;
  /*Text Format*/
  font-size: 14px;
  color: white;
}
.ubicacion-button.p-button:hover{
  cursor: not-allowed;
  background-color: var(--color-off);
  color: var(--color-white);
  border: none;
}

.main-button-frame {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: start;
  gap: 13px;
}

</style>