<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex class="primary" xs12>
        <h1>12</h1>
      </v-flex>
      <v-flex class="secondary" xs6>
        <h1>6</h1>
      </v-flex>
      <v-flex class="error" xs6>
        <h1>6</h1>
      </v-flex>
    </v-layout>

    <v-layout class="mt-5 secondary" justify-center align-center style="height:300px">
      <v-flex class="info" xs3>
        <h1>Centrado</h1>
      </v-flex>
      <v-flex class="pink lighten-1 white--text" xs3>
        <h1>Centrado</h1>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <h1 class="display-1 text-uppercase">Lorem, ipsum dolor.</h1>
        <h1 class="display-2 primary pa-5 mt-5">Lorem, ipsum dolor.</h1>
        <h1 class="display-3 text-md-center">Lorem, ipsum dolor.</h1>
        <h1 class="display-4">Lorem, ipsum dolor.</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
          <v-card-title>Lorem, ipsum dolor.</v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint vero recusandae aut ratione, quam cumque tempore expedita iure aliquid nisi eligendi, nam repellendus temporibus ipsam deleniti hic dolores non illo.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" text>Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-container>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>Lorem, ipsum dolor.</v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint vero recusandae aut ratione, quam cumque tempore expedita iure aliquid nisi eligendi, nam repellendus temporibus ipsam deleniti hic dolores non illo.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" text @click="dialog = true">Modal/Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Dialog -->
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title>Lorem, ipsum dolor.</v-card-title>
        <v-card-text>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint vero recusandae aut ratione, quam cumque tempore expedita iure aliquid nisi eligendi, nam repellendus temporibus ipsam deleniti hic dolores non illo.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" text @click="dialog = false">Accion</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- endDialog -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
