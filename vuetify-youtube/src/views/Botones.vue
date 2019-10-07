<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn>Texto</v-btn>
        <v-btn color="primary">Texto</v-btn>
        <v-btn color="blue" dark>Texto</v-btn>
        <v-btn color="seconday" text>Sin fondo</v-btn>
        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="secondary"
          @click="loader = 'loading'"
        >Accept Terms</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            loader: null,
            loading: false
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    }
};
</script>
