const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            this.saveLocal(this.tareas);
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
            this.saveLocal(this.tareas);
        },
        eliminarTarea: function(index){
            this.tareas.splice(index, 1);
            this.saveLocal(this.tareas);
        },
        saveLocal: function(tareas){
            localStorage.setItem('gym-vue', JSON.stringify(tareas));
        }
    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB === null){
            this.tareas = [];
        } else{
            this.tareas = datosDB;
        }
    },
});