Vue.component("skill-box" , {
    template: `
    <div :class="skillBoxClass">
      <img :src="imageUrl" :alt="imageAlt" />
      <div :class="skillBoxClassContent">
        <h1> {{title}}</h1>
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
        },
        skillBoxClassContent: {
          type: String,
        },
        title :{
          type: String,
        },
        skillBoxImg : {
          type : String,
        }
      },

})


Vue.component("flip-card" , {
    template : `<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
      <div class ="flip-card-front-title-back">
        <h1> {{titleCardFront}} </h1>
        <div class = "flip-card-back-img">
          <img src="./assets/images/icons/html.png" alt="logo cSharp" width = "15%"/>
          <img src="./assets/images/icons/css.png" alt="logo cSharp" width = "15%"/>
          <img src="./assets/images/icons/js.png" alt="logo cSharp" width = "15%"/>
          <img src="./assets/images/icons/vuejs.png" alt="logo cSharp" width = "15%"/>
      </div>
      </div>
      </div>
      <div class="flip-card-back">
       <div class ="flip-card-front-title-back">
        <h1> {{titleCardBack}} </h1>
        <div class = "flip-card-back-img">
          <img src="./assets/images/icons/cSharp.png" alt="logo cSharp" width = "15%"/>
          <img src="./assets/images/icons/python.png" alt="logo python" width = "15%"/>
          <img src="./assets/images/icons/my-sql.png" alt="logo " width = "15%"/>
          <img src="./assets/images/icons/wordpress.png" alt="logo cSharp" width = "15%"/>
        </div>
      </div>
      </div>
    </div>
  </div>`,

    props : ["titleCardFront" ,"titleCardBack"],

})


Vue.component("projet-box" , {
    template : ``,


})


Vue.component("title-section" , {
    template : ``,
})


new Vue({
    el : "#main",
})



AOS.init();


