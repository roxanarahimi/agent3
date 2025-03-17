<template>
  <div>
    <div class = "container">
      <div class = "cards-1 row justify-content-start">
        <div v-for="item in portfolio" class = "col-6 col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a  :href = "item.link" target = "_blank" class = "card">
            <img class = "card-img-top" :src=  "item.image" alt = "طراحی سایت"/>
            <div class = "card-body ">
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">{{ item.title_fa }}</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import App from '../App.vue';
    export default {
      name: "Portfolio",
      components:{ App,},
      setup() {

        const portfolio = App.setup().portfolio;
        return {
          portfolio
        };
      }
    };
</script>

<style scoped>
  a,
  a:hover {
    text-decoration: none;
  }

  .cards-1 .card {
    border-radius: 11px !important;
  }

  .card-body img {
    border-radius: 10px !important;
    height: 35px;
  }

  @media (max-width: 768px) {
    .card-title {
      line-height: 35px;
      margin-bottom: 0 !important;
    }
  }
</style>