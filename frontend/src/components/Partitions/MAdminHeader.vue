<template>
  <v-app-bar color="primary" dense dark elevate-on-scroll>
    <v-app-bar-nav-icon @click.stop="handleSideBar"></v-app-bar-nav-icon>

    <v-toolbar-title class="text-upper-case" @click="goToHomePage" role="button">
      <span class="font-weight-light">Admin | </span>
      <span>Accessories</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <span> {{ 'Hello ' + username }}</span>
    <m-user-menu></m-user-menu>
  </v-app-bar>
</template>

<script>
import MUserMenu from '../Menus/MUserMenu.vue';
import jwt_decode from 'jwt-decode';
import router from '@/router';
import { ADMIN_MENU } from '@/utils/mocks';
import { mapState } from 'vuex';

export default {
  name: 'MHeader',
  data: () => ({
    username: '',
    menuList: ADMIN_MENU,
  }),
  created() {
    // const accessToken = localStorage.getItem('accessToken');
    this.username = !this.accessToken ? null : jwt_decode(this.accessToken).fullName;
  },
  props: {
    drawer: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState({
      accessToken: (state) => state._accessToken.state.accessToken,
    }),
  },
  methods: {
    handleToLogin() {
      router.push('/login');
    },
    handleSideBar() {
      this.$emit('onClickDrawer', !this.drawer);
    },
    goToHomePage() {
      router.push({ name: 'home' });
    },
  },
  components: {
    MUserMenu,
  },
  watch: {},
};
</script>

<style scoped>
header {
  height: 48px !important;
}
</style>
