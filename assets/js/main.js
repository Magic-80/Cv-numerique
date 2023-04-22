Vue.component("skill-box" , {
    template: `
    <div :class="skillBoxClass">
      <img :src="imageUrl" :alt="imageAlt" />
      <div :class="skillBoxClassContent">
        
      </div>
      <slot></slot>
    </div>`,
    
    
    props: {
        imageUrl: {
          type: String,
        },
        imageAlt: {
          type: String,
        },
        skillBoxClass: {
          type: String,
          default: ""
        },
        skillBoxClassContent: {
          type: String,
          default: ""
        }
      },

})


Vue.component("flip-card" , {
    template : `<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
      <div class ="flip-card-front-title-back">
        <h1> {{titleCardFront}} </h1>
      </div>
      </div>
      <div class="flip-card-back">
       <div class ="flip-card-front-title-back">
        <h1> {{titleCardBack}} </h1>
      </div>
      </div>
    </div>
  </div>`,

    props : ["titleCardFront" ,"titleCardBack" ]


})


Vue.component("projet-box" , {
    template : ``,


})


Vue.component("title-section" , {
    template : ``,
})



var app = new Vue({
    el : "#main",
})



AOS.init();


