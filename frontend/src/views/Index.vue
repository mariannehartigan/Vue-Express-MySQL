<template>
  <div>
    <Moods />
    <br />
    <Weather />
  </div>
</template>

<script>
import Moods from '@/components/Moods.vue'
import Weather from '@/components/Weather.vue'
export default {
  name: 'Index',
  components: {
    Moods,
    Weather
  }
};
</script>
