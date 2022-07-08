<template>
  <div>
    <div class = "container">
      <div class = "cards-1 row justify-content-start">
        <div class = "col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a href = "https://old.webagent.ir" target = "_blank" class = "card">
            <img
                    class = "card-img-top d-none d-md-block"
                    src = "images/old.jpg"
                    alt = "طراحی سایت"/>
            <div class = "card-body d-flex d-md-block">
              <img class = "d-md-none" src = "images/old.jpg" alt = "طراحی سایت"/>
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">
                web agent
              </h5>
            </div>
          </a>
        </div>
        <div class = "col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a href = "https://res.webagent.ir" target = "_blank" class = "card">
            <img
                    class = "card-img-top d-none d-md-block"
                    src = "images/delish.jpg"
                    alt = "طراحی سایت"
            />
            <div class = "card-body d-flex d-md-block">
              <img class = "d-md-none" src = "images/delish.jpg" alt = "طراحی سایت"/>
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">
                رستوران
              </h5>
            </div>
          </a>
        </div>
        <div class = "col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a href = "https://shop.webagent.ir" target = "_blank" class = "card">
            <img
                    class = "card-img-top d-none d-md-block"
                    src = "images/shop.jpg"
                    alt = "طراحی سایت"
            />
            <div class = "card-body d-flex d-md-block">
              <img class = "d-md-none" src = "images/shop.jpg" alt = "طراحی سایت"/>
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">
                فروشگاه
              </h5>
            </div>
          </a>
        </div>
        <div class = "col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a href = "https://panel.webagent.ir/panel/login" target = "_blank" class = "card">
            <img
                    class = "card-img-top d-none d-md-block"
                    src = "images/shop.panel.jpg"
                    alt = "طراحی سایت"
            />
            <div class = "card-body d-flex d-md-block">
              <img class = "d-md-none" src = "images/shop.panel.jpg" alt = "طراحی سایت"/>
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">
                پنل فروشگاه
              </h5>
            </div>
          </a>
        </div>
        <div class = "col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a href = "https://movies.webagent.ir/" target = "_blank" class = "card">
            <img
                    class = "card-img-top d-none d-md-block"
                    src = "images/movies.jpg"
                    alt = "طراحی سایت"
            />
            <div class = "card-body d-flex d-md-block">
              <img class = "d-md-none" src = "images/movies.jpg" alt = "طراحی سایت"/>
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">
                سایت فیلم
              </h5>
            </div>
          </a>
        </div>
        <div class = "col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a href = "https://office.webagent.ir" target = "_blank" class = "card">
            <img
                    class = "card-img-top d-none d-md-block"
                    src = "images/office0.jpg"
                    alt = "طراحی سایت"
            />
            <div class = "card-body d-flex d-md-block">
              <img class = "d-md-none" src = "images/office0.jpg" alt = "طراحی سایت"/>
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">
                شرکت </h5>
            </div>
          </a>
        </div>
        <div class = "col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a href = "https://company.webagent.ir" target = "_blank" class = "card">
            <img
                    class = "card-img-top d-none d-md-block"
                    src = "images/office.jpg"
                    alt = "طراحی سایت"
            />
            <div class = "card-body d-flex d-md-block">
              <img class = "d-md-none" src = "images/office.jpg" alt = "طراحی سایت"/>
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">
                جنرال </h5>
            </div>
          </a>
        </div>
        <!-- <div class = "col-md-4 col-lg-3 col-xxl-3 mb-3">
          <a href = "https://school.webagent.ir" target = "_blank" class = "card">
            <img
                    class = "card-img-top d-none d-md-block"
                    src = "images/ielts.jpg"
                    alt = "طراحی سایت"
            />
            <div class = "card-body d-flex d-md-block">
              <img class = "d-md-none" src = "images/ielts.jpg" alt = "طراحی سایت"/>
              <h5 class = "card-title ms-auto me-3 text-center my-md-2">
                آموزشگاه </h5>
            </div>
          </a>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>
    export default {};
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