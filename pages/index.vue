<template>
  <div class="flex flex-col py-10">
    <div>
      <h2 class="text-2xl font-bold text-center">Nuxt Movies App</h2>
    </div>
    <div class="flex justify-center items-center h-32">
      <input
        class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
        v-model="searchTerm"
        type="text"
        placeholder="Search..."
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10"
    >
      <div v-for="movie in data?.results" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </div>
    </div>
    <div v-if="data?.results.length" class="flex justify-center">
      <button
        v-if="!disabledPrevious"
        @click="page--"
        class="px-4 py-2 text-m border rounded-lg"
      >
        Previous
      </button>
      <div class="px-4 py-2 text-m border rounded-lg">{{ page }}</div>
      <button
        v-if="!disabledNext"
        @click="page++"
        class="px-4 py-2 text-m border rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { APIResponse } from "~~/types/APIResponse";

const searchTerm = ref("");
const page = ref(1);

const disabledPrevious = computed(() => {
  return page.value === 1;
});

const disabledNext = computed(() => {
  return page.value + 1 === data.value?.total_pages;
});

const debouncedSearchTerm = refDebounced(searchTerm, 700);

const url = computed(() => {
  return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`;
});

const { data } = await useFetch<APIResponse>(url);
</script>
