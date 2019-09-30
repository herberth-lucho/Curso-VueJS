Vue.component('hijo', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Componte hijo {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data() {
        return {
            nombre: 'Ignacio'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    },
})