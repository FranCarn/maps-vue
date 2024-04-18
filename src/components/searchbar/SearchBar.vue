<script lang="ts" src="./search.ts" />

<template>
  <div class="searchbar-container">
    <input
      type="text"
      class="form-control"
      placeholder="Search..."
      v-model="searchTerm"
    />
  </div>
  <search-results />
</template>

<style scoped>
.searchbar-container {
  background-color: #fff;
  border-radius: 10px !important;
  box-shadow: 5px 7px 10px rgba(0, 0, 0, 0.1);
  left: 30px;
  overflow: hidden;
  padding: 5px;
  position: fixed;
  top: 30px;
  width: 250px;
  z-index: 999;
}
</style>
