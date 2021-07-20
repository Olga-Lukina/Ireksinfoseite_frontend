<template>
  <div class="container mx-auto">
    <h1 class="m-4 font-extrabold text-center uppercase text-red-850">
      Locations in Russia
    </h1>
    <h2 class="mx-4 font-extrabold text-center text-red-850">
      Ireks/Trier company main offices:
    </h2>
    <div class="flex justify-center">
      <div class="mx-2 my-4 bg-white border border-white shadow-lg rounded-xl">
        <p class="m-4">
          <span class="font-black text-red-850">ООО ИРЕКС<br /></span>
          115093 Москва <br />
          ул. Щипок, д.18 стр.3<br />
          т.: +7(495)959-71-39, 959-71-40 <br />
          e-mail: ireks@ireks.ru
        </p>
      </div>
      <div
        class="mx-2 my-4 bg-white border border-white shadow-lg review-container rounded-xl"
      >
        <p class="m-4">
          <span class="font-black text-red-850">ООО ТРИЭР<br /></span>
          115516 Москва <br />
          Кавказский бульвар, д. 59, стр. 1<br />
          т.: +7(495)648-07-90, 980-70-90 <br />
          e-mail: trier_msk@trier.ru
        </p>
      </div>
    </div>
    <h2 class="mx-4 font-extrabold text-center text-red-850">
      Subcompanies Trier:
    </h2>
    <div class="flex justify-center">
      <div class="mx-2 my-4 bg-white border border-white shadow-lg rounded-xl">
        <p class="m-4">
          <span class="font-black text-red-850">ООО ТРИЭР-СПБ<br /></span>
          196084 Санкт-Петербург <br />
          ул. Смоленская, д. 33, литер А<br />
          т.: +7(812)740-10-77, 740-10-76<br />
          e-mail: info_spb@trier.ru
        </p>
      </div>
      <div
        class="mx-2 my-4 bg-white border border-white shadow-lg review-container rounded-xl"
      >
        <p class="m-4">
          <span class="font-black text-red-850">ООО ТРИЭР-СИБИРЬ<br /></span>
          630005 г. Новосибирск <br />
          ул. Писарева, д. 38, к. 2<br />
          т.: +7(383)292-17-41, 224-23-51 <br />
          e-mail: trier-siberia@trier.ru
        </p>
      </div>
      <!-- <l-map style="height:50vh">
        <l-geo-json :geojson="geojson" :options="geojsonOptions" />
      </l-map> -->
    </div>

    <!-- <div class="map">
      <GoogleMap
        api-key="AIzaSyAMNSw7hQYH4thAZ8O_i5XRtJcXQ_Bv0pg"
        style="width: 100%; height: 500px"
        :center="mapCenter"
        :zoom="11"
      >
        <div v-for="(r, index) in locations" :key="index">
          <Marker :clickable="true" :draggable="false" />
        </div>
      </GoogleMap>
    </div> -->
  </div>
</template>

<script>
// import 'leaflet/dist/leaflet.css';
// import { LMap, LGeoJson } from '@vue-leaflet/vue-leaflet';
// export default {
//   components: {
//     LMap,
//     LGeoJson,
//   },
//   data() {
//     return {
//       geojson: {
//         type: 'FeatureCollection',
//         features: [
//           // ...
//         ],
//       },
//       geojsonOptions: {
//         // Options that don't rely on Leaflet methods.
//       },
//     };
//   },
//   async beforeMount() {
//     // HERE is where to load Leaflet components!
//     const { circleMarker } = await import('leaflet/dist/leaflet-src.esm');

//     // And now the Leaflet circleMarker function can be used by the options:
//     this.geojsonOptions.pointToLayer = (feature, latLng) =>
//       circleMarker(latLng, { radius: 8 });
//     this.mapIsReady = true;
//   },
// };

// import { defineComponent } from 'vue';
// import { GoogleMap, Marker } from 'vue3-google-map';
// import service from '@/service.js';

// export default defineComponent({
//   components: { GoogleMap, Marker },

//   data() {
//     return {
//       locations: [],
//       activeRestaurant: {},
//     };
//   },
//   mounted() {
//     this.getLocations();
//   },
//   methods: {
//     async getLocations() {
//       try {
//         const response = await service.getLocations();
//         this.$data.locations = response.data;
//       } catch (err) {
//         if (err.response) {
//           this.error = err.response.data.message;
//         }
//         console.log(err.message);
//       }
//     },
//     getPosition(r) {
//       return {
//         lat: parseFloat(r.latitude),
//         lng: parseFloat(r.longitude),
//       };
//     },
//   },

//   computed: {
//     mapCenter() {
//       if (!this.locations.length) {
//         return {
//           lat: 10,
//           lng: 10,
//         };
//       }
//       return {
//         lat: parseFloat(this.locations[0].latitude),
//         lng: parseFloat(this.locations[0].longitude),
//       };
//     },
//   },
//   infoWindowPosition() {
//     return {
//       lat: parseFloat(this.activeRestaurant.latitude),
//       lng: parseFloat(this.activeRestaurant.longitude),
//     };
//   },
// });
</script>

<style></style>
