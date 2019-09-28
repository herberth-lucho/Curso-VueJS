Vue.component('padre', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componte padre: {{numPadre}}</h2>
        <button type="button" class="btn btn-danger" @click="numPadre++">+</button>
        {{nombrePadre}}
        <hijo :numero="numPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data() {
        return {
            numPadre: 0,
            nombrePadre: ''
        }
    }
})