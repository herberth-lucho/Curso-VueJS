<template>
  <div>
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card>
          <v-date-picker 
          v-model="fecha"
          full-width
          locale="es-cl"
          :min="minimo"
          :max="maximo"
          ></v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-xs-center">
            650 {{fecha}} - {{maximo}}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

  import  { axios } from "axios";
export default {
  data() {
    return {
      fecha: '',
      minimo: '1984',
      maximo: new Date().toISOString().substr(0, 10)
    }
  },
};
</script>
