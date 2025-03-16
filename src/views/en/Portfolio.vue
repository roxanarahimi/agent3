<template>
  <div>
    <div class = "container">
      <div class = "cards-1 row justify-content-end">
        <div v-for="item in portfolio" class = "col-6 col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a  :href = "item.link" target = "_blank" class = "card">
            <img class = "card-img-top" :src=  "item.image" alt = "طراحی سایت"/>
            <div class = "card-body ">
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">{{ item.title_en }}</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  setup() {

    const portfolio = [
      {title_fa: 'توت سوییت',title_en:'Toute Sweet', image:'/images/toutesweet.jpg',link:'https://toute.webagent.ir/'},
      {title_fa: 'گردونه شانس',title_en:'Chance Wheel', image:'/images/wheel.jpg',link:'https://landing.elitefood.ir/'},
      // {title_fa: '',title_en:'', image:'',link:''},
      // {title_fa: '',title_en:'', image:'',link:''},

      {title_fa: 'کوپا',title_en:'Copa', image:'/images/copa.jpg',link:'https://mycopa.ir'},
      {title_fa: 'نودالیت',title_en:'Noodelite', image:'/images/elite.jpg',link:'https://elitefood.ir'},
      {title_fa: 'کوپاکافه',title_en:'CopaCafe', image:'/images/cc.jpg',link:'https://copacaffe.co.webagent.ir/'},
      {title_fa: 'بیوتی لند',title_en:'Beauty Land', image:'/images/myshop.jpg',link:'https://myshop.webagent.ir'},
      {title_fa: 'فروشگاه',title_en:'Shop', image:'/images/shop2.jpg',link:'https://shop2.webagent.ir'},
      {title_fa: 'پنل فروشگاه',title_en:'Shop Panel', image:'/images/shop.panel.jpg',link:'https://panel.shop2.webagent.ir/panel/login'},
      // {title_fa: 'رستوران',title_en:'Restaurant', image:'/images/delish.jpg',link:'https://res.webagent.ir'},
      {title_fa: 'آموزشگاه',title_en:'School', image:'/images/ielts.jpg',link:'https://school.webagent.ir'},
      {title_fa: 'کار یابی ',title_en:'Job Search', image:'/images/highjob.jpg',link:'https://highjob.webagent.ir'},
      // {title_fa: 'Web Agent',title_en:'Web Agent', image:'/images/old.jpg',link:'https://old.webagent.ir"'},
    ];
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
    border-radius: 10px !important;
  }

  .card-img-top {
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
  }

  .card-body img {
    border-radius: 10px !important;
    height: 80px;
  }

  @media (max-width: 768px) {
    .card-title {
      line-height: 80px;
      margin-bottom: 0 !important;
    }
  }
</style>