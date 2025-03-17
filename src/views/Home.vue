<template>
  <div>
    <div class="home d-xl-grid">
      <div class="row px-3 flex-column-reverse flex-xl-row justify-content-center align-self-xl-center">
        <div class="home-txt col-xl-4 d-grid">
          <div class="text-container home-txt-inner mt-5 text-center text-xl-start px-4 px-md-0 align-self-end align-self-xl-center">
            <div class="section-title">به web agent خوش آمدید</div>
            <h1 class="h1-large  text-center text-xl-start fw-bolder">خدمات مشاوره و طراحی سایت</h1>
            <p class="p-large  text-center text-xl-start">
              صفر تا صد خدمات وبسایت شامل مشاوره، طراحی، توسعه، پیاده سازی</p>
            <router-link to="/help" class="btn-solid-lg ">شروع کنید</router-link>
            <!-- <a class="quote" ><i class="fas fa-paper-plane"></i>Get quote</a> -->
          </div>
        </div>
        <div class="home-img col-12 col-sm-10 offset-sm-1 col-md-10  col-lg-8 offset-lg-2 col-xl-6 offset-xl-0">
          <div class="image-container ps-md-5 ms-lg-5 ps-lg-0 ms-lg-0 home-img-inner">
            <img class="img-fluid mx-auto" src="/images/header-illustration.svg" alt="طراحی سایت"/>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  // components: {}

  data() {
    return {};
  },
};
</script>
