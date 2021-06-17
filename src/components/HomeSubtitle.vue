<template>
  <v-col>

    <v-row class="justify-center align-center mt-6">
      <p style="font-size: xxx-large;color: gray" class="mb-0">
        {{ english }}
      </p>
    </v-row>
    <v-row class="justify-center align-center mt-4 mb-6">
      <p style="font-size: xx-large;font-weight: bold" class="primary--text">
        {{ chinese }}
      </p>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "HomeSubtitle",
  props:{
    english:String,
    chinese:String
  },
}
</script>

<style scoped>

</style>