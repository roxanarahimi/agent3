<template>
  <!-- Navigation -->
  <nav
    v-show="$route.name !== 'Page404'"
    id="navbarExample"
    class="navbar navbar-expand fixed-top navbar-light"
    aria-label="Main navigation"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand logo-image d-none d-lg-block"
        >Web Agent<img class="ms-2" src="images/favicon.png" alt="طراحی سایت" /></router-link>
      <!-- <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> -->
      <!-- <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault"> -->
      <ul class="navbar-nav navbar-nav-scroll mx-auto ms-lg-0 px-0 px-lg-5">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            :class="{ active: $route.fullPath === '/' }"
            aria-current="page"
            >خانه</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/about"
            class="nav-link"
            :class="{ active: $route.fullPath === '/about' }"
            >درباره ما</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/portfolio"
            class="nav-link"
            :class="{ active: $route.fullPath === '/samples' }"
            >نمونه کار</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/help"
            class="nav-link"
            :class="{ active: $route.fullPath === '/help' }"
            >راهنما</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/plans"
            class="nav-link"
            :class="{ active: $route.fullPath === '/plans' }"
            >پلن ها</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/contact"
            class="nav-link"
            :class="{ active: $route.fullPath === '/contact' }"
            >تماس با ما</router-link
          >
        </li>
        <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown01">
                            <li><a class="dropdown-item" href="article.html">Article Details</a></li>
                            <li><div class="dropdown-divider"></div></li>
                            <li><a class="dropdown-item" href="terms.html">Terms Conditions</a></li>
                            <li><div class="dropdown-divider"></div></li>
                            <li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </li> -->
      </ul>
      <span class="nav-item d-none d-lg-block">
        <a class="btn-solid-sm py-4" href="https://english.webagent.ir">English</a>
      </span>
      <!-- </div> -->
    </div>
  </nav>

  <main>
    <div class="px-1 px-md-5 mx-1">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in" appear>
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let isMobile = false; // is molbile/tablet
    (function (a) {
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          isMobile = true;
      })(navigator.userAgent || navigator.vendor || window.opera);

      isMobile = true;
    })(navigator.userAgent || navigator.vendor || window.opera);

    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
      console.log("is Google Chrome on IOS");
    } else if (
      isChromium !== null &&
      typeof isChromium !== "undefined" &&
      vendorName === "Google Inc." &&
      isOpera === false &&
      isIEedge === false
    ) {
      // is Google Chrome
      console.log("is Google Chrome");
      if (!isMobile) {
        document.body.style.zoom = "75%";
        console.log(document.body.style.zoom.toString());
      }
    } else {
      // not Google Chrome
      console.log("not Google Chrome");
    }
  },
};
</script>

<style>
.route-enter-from {
  /* opacity: 0; */
  transform: translateX(-900px);
}
.route-leave-to {
  /* opacity: 0; */
  transform: translateX(900px);
}

.route-enter-active {
  transition: all 0.05s ease-out;
}
.route-leave-active {
  transition: all 0.1s ease-in;
  /* transform: scale(0, 0) !important; */
  /* position: absolute; */
  /* right: calc(50% - 250px); */
}
</style>
