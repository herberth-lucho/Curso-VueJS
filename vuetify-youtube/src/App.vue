<template>
  <v-app>
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span>Vuetify</span>
          <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-toolbar-title>
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" temporary>
        <v-layout mt-4 column align-center>
          <v-flex>
            <v-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-avatar>
          </v-flex>
          <v-flex>
              <p class="mt-3 headline">Juanito Perez</p>
          </v-flex>
        </v-layout>
        <v-layout column>
          <v-flex>
            <v-btn color="success" block :to="{name: 'home'}">Home</v-btn>
            <v-btn color="success" block :to="{name: 'botones'}">Botones</v-btn>
            <v-btn color="success" block :to="{name: 'tareas'}">Tareas</v-btn>
          </v-flex>
        </v-layout>
      </v-navigation-drawer>

      <v-content>
        <router-view />
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false
  })
};
</script>
