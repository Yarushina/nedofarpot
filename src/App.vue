<template>
  <div id="app">
    <div class="container">
      <div class="content">
        <template v-for="ads in ADS">
          <p>{{ ads.body }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        ads : []
      }
    },
    mounted() {
      axios.get('http://localhost:8081/api/ch/ads/').then(({data}) => { this.ads = data })
    },
    computed: {
      ADS() { return this.ads }
    }
  }
</script>
