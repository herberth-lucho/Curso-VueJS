Vue.component('contador', {
    template: //html
    `
    <div>
      <h3>{{numero}}</h3>
      <button type="button" class="btn btn-primary" @click="numero++">+</button>
    </div>
    `,
    data(){
      return {
        numero: 0
      }
    }
  })