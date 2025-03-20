<template>
  <nav v-show="$route.name !== 'Page404'" id="navbarExample1" class="navbar navbar-expand fixed-top navbar-light" aria-label="Main navigation">
    <div class="container px-0" :class="{'flex-row-reverse': lang=='en'}">
      <router-link :to="prefix+'/'" class="navbar-brand logo-image d-none d-lg-block" @click="lang">
        Web Agent
        <img class="" src="/images/favicon.png" alt="طراحی سایت"/>
      </router-link>
      <ul class="navbar-nav navbar-nav-scroll mx-auto px-0 px-lg-2" :class="{ 'me-lg-2 flex-row-reverse': lang=='en','ms-lg-0': lang=='fa' }">
        <li  class="nav-item d-lg-none" @click="lang">
          <router-link :to="prefix+'/'" class="nav-link" :title="lang=='en'?'Home':'خانه'" aria-current="page">
            <img class="" src="/images/favicon.png" width="22px" alt="طراحی سایت"/>
          </router-link>
        </li>
        <li v-for="(item, index) in menu" :key="index" class="nav-item" :class="{'d-none d-lg-block':index === 0}" @click="lang">
          <router-link :to="prefix+item.link"
             class="nav-link" :class="{ 'active': $route.fullPath === prefix+item.link }"
             aria-current="page">{{ lang=='en' ? item.title_en : item.title }}
          </router-link>
        </li>

        <li class="nav-item d-lg-none pt-2">
          <router-link v-if="lang=='en'" class="nav-item b-solid" to="/" @click="setLang('fa')">Fa</router-link>
          <router-link v-else to="/en/" class="nav-item b-solid" @click="setLang('en')">En</router-link>
        </li>
      </ul>

      <span class="nav-item d-none d-lg-block">
        <router-link  v-if="lang=='en'" class="btn-solid-sm py-4" to="/" @click="setLang('fa')">Persian</router-link>
        <router-link  v-else class="btn-solid-sm  py-4" to="/en/" @click="setLang('en')">English</router-link>
      </span>
    </div>
  </nav>

</template>

<script>

import {useRoute} from "vue-router/dist/vue-router";
import {onMounted, ref} from "vue";
export default {
  name: "TheNavBar",
  props:['lng'],
  setup(props){
    const route = useRoute();
    const lang = ref(props.lng);
    const prefix = ref(lang.value == 'en'? '/en':'');
    const menu = [
      {title: 'خانه', title_en: 'Home', link: '/'},
      {title: 'درباره ما', title_en: 'About Us', link: '/about'},
      {title: 'نمونه کار', title_en: 'Portfolio', link: '/portfolio'},
      {title: 'راهنما', title_en: 'Help', link: '/help'},
      {title: 'پلن ها', title_en: 'Plans', link: '/plans'},
      {title: 'تماس با ما', title_en: 'Contact Us', link: '/contact'},
    ];
    const setLang = (language)=>{
      lang.value = language;
      prefix.value = lang.value == 'en'? '/en':'';
    }
    return {
      menu, route,prefix,lang, setLang
    };
  },
}
</script>

<style scoped>

</style>