<template>
  <div>
    <div class="home">
    <!-- <div class="container"> -->
      <div class="row px-3 flex-column-reverse flex-xl-row justify-content-center">
        <div class="col-xl-4">
          <div class="text-container mt-5 pt-xxl-5 text-center text-xl-start px-4 px-md-0">
            <div class="section-title">به web agent خوش آمدید</div>
            <h1 class="h1-large  text-center text-xl-start fw-bolder">خدمات مشاوره و طراحی سایت</h1>
            <p class="p-large  text-center text-xl-start">
            صفر تا صد خدمات وبسایت شامل مشاوره، طراحی، توسعه، پیاده سازی</p>
            <router-link to="/help" class="btn-solid-lg ">شروع کنید</router-link>
                <!-- <a class="quote" ><i class="fas fa-paper-plane"></i>Get quote</a> -->
          </div>
        </div>
        <div class="col-12 col-sm-10 offset-sm-1 col-md-10 col-lg-4 offset-lg-4 col-xl-6 offset-xl-0">
          <div class="image-container ps-md-5 ms-md-5 ps-lg-0 ms-lg-0 d-flex justify-content-center" >
            <img class="img-fluid mx-auto" src="images/header-illustration.svg" alt="طراحی سایت"/>
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
