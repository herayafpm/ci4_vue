<template>
  <div class="home">
    <ul>
      <li v-for="row in testdaten" :key="row.id">
        {{ row.name }}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      testdaten: []
    }
  },
  mounted() {
    axios.get('/api/test').then(response => {
      this.testdaten = response.data
    })
  }
}
</script>