<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md6>
        <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
          <v-card-text>
            <v-chip class="ma-2 ml-0" color="pink" label text-color="white">
              <v-icon left>mdi-label</v-icon>
              {{item.titulo}}
            </v-chip>
            <p>{{item.descripcion}}</p>
            <v-btn color="warning" @click="editar(index)">Editar</v-btn>
            <v-btn color="error" class="ml-2" @click="eliminarTarea(item.id)">Eliminar</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md6 v-if="formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
            <v-btn block color="success" type="submit">Agregar</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex md6 v-if="!formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editarTarea">
            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
            <v-btn block color="info" type="submit">Editar</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="snackbar">
      {{ mensaje }}
      <v-btn color="red" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      listaTareas: [
        {
          id: 1,
          titulo: "Tarea #1",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti cum dignissimos at, libero corrupti vero, maiores doloribus accusantium odio magnam quaerat et quisquam optio, alias vel architecto id molestiae."
        },
        {
          id: 2,
          titulo: "Tarea #2",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti cum dignissimos at, libero corrupti vero, maiores doloribus accusantium odio magnam quaerat et quisquam optio, alias vel architecto id molestiae."
        }
      ],
      titulo: "",
      descripcion: "",
      snackbar: false,
      mensaje: "",
      formAgregar: true,
      indexTarea: ""
    };
  },
  methods: {
    agregarTarea() {
      if (this.titulo === "" || this.descripcion === "") {
        this.snackbar = true;
        this.mensaje = "Llena todos los campos!";
      } else {
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion
        });
        this.titulo = "";
        this.descripcion = "";
        this.snackbar = true;
        this.mensaje = "Tarea Agregada!";
      }
    },
    eliminarTarea(id) {
      this.listaTareas = this.listaTareas.filter(e => e.id != id);
    },
    editar(index) {
      this.formAgregar = false;
      this.titulo = this.listaTareas[index].titulo;
      this.descripcion = this.listaTareas[index].descripcion;
      this.indexTarea = index;
    },
    editarTarea() {
      this.listaTareas[this.indexTarea].titulo = this.titulo;
      this.listaTareas[this.indexTarea].descripcion = this.descripcion;
      this.formAgregar = true;
      this.titulo = "";
      this.descripcion = "";
      this.snackbar = true;
      this.mensaje = "Tarea Editada!";
    }
  }
};
</script>