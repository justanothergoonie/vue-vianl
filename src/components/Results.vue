<template>
  <ul class="results" v-if="searchResults.length > 0">
    <li v-for="result in searchResults" :key="result.id">
      <h1>{{ result.title ? result.title : result.name }}</h1>
      <div class="info-holder" v-if="result.gender">
        <p>
          {{ result.name }} is a {{ result.age }} year old
          {{ result.gender }} with {{ result.eye_color }} eyes and
          {{ result.hair_color }} hair
        </p>
      </div>
      <div class="info-holder" v-if="result.director">
        <span>Summary: {{ result.description }}</span>
        <p>
          Released in
          {{ result.release_date }} and directed by
          {{ result.director }}.
        </p>
      </div>
      <div class="info-holder" v-if="result.climate">
        <p>Climate: {{ result.climate }}</p>
        <p>Terrain: {{ result.terrain }}</p>
      </div>
      <div class="info-holder" v-if="result.classification">
        <p>Classification: {{ result.classification }}</p>
        <p>Eye Color(s): {{ result.eye_colors }}</p>
        <p>Hair Color(s): {{ result.hair_colors }}</p>
      </div>
      <div class="info-holder" v-if="result.vehicle_class">
        <p>Length: {{ result.length }}</p>
        <p>Vehical Class: {{ result.vehicle_class }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Results",
  props: ["searchResults", "specSub"]
};
</script>

<style>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  font-family: Ghibli;
  font-size: 1.3rem;
}
.info-holder {
  display: flex;
  flex-direction: column;
}
</style>
