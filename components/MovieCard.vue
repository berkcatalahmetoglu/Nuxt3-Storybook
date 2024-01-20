<template>
  <div class="h-128 w-64 border flex flex-col text-center">
    <NuxtLink
      :to="`/movies/${movie?.id}`"
      class="mb-5 bg-green-600 inline-block"
    >
      <img
        class="object-cover w-full h-full transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block"
        :src="imgURL"
        alt="Movie Poster"
      />
    </NuxtLink>
    <div class="text-lg" style="width: 100%; height: 30%">
      {{ movie?.title }}
    </div>
    <div
      class="text-sm text-gray-500 break-words overflow-hidden line-clamp-3 px-2"
      style="width: 100%; height: 50%"
    >
      {{ movie?.overview }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Movie } from "~/types/Movie";

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
  },
});

const config = useRuntimeConfig();
const imgURL = computed(() =>
  props.movie?.poster_path != null
    ? `${config.public.imgBaseUrl}/${props.movie.poster_path}`
    : "https://via.placeholder.com/300x500"
);
</script>
