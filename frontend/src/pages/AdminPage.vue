<template>
  <m-admin-layout @changeControl="handleControlAdmin">
    <component v-bind:is="controler"></component>
  </m-admin-layout>
</template>

<script>
import MAdminLayout from '@/shared/MAdminLayout.vue';
import MAddProductForm from '@/components/Forms/Admin/MAddProductForm.vue';
import MAllAttributeForm from '@/components/Forms/Admin/MAllAttributeForm.vue';
import MAllProductForm from '@/components/Forms/Admin/MAllProductForm.vue';
import MAllCategoryForm from '@/components/Forms/Admin/MAllCategoryForm.vue';
import MAllBrandForm from '@/components/Forms/Admin/MAllBrandForm.vue';

export default {
  data() {
    return {
      dialog: false,
      searchKey: '',
      controler: 'm-all-order-form',
    };
  },
  methods: {
    handleControlAdmin(value) {
      // do
      console.log(value);
      switch (value) {
        case 'All orders':
          this.controler = 'm-all-order-form';
          break;
        case 'All products':
          this.controler = 'm-all-product-form';
          break;
        case 'Add product':
          this.controler = 'm-add-product-form';
          break;
        case 'All brands':
          this.controler = 'm-all-brand-form';
          break;
        case 'All categories':
          this.controler = 'm-all-category-form';
          break;
        case 'All attribute product':
          this.controler = 'm-all-attribute-form';
          break;
        case 'All accounts':
          this.controler = 'm-add-account-form';
          break;
        default:
          this.controler = 'm-all-order-form';
          break;
      }
    },
  },
  components: {
    MAdminLayout,
    MAddProductForm,
    MAllAttributeForm,
    MAllProductForm,
    MAllCategoryForm,
    MAllBrandForm,
  },
  created() {
    // authentication
  },
};
</script>

<style scoped>
.scrollable {
  overflow-y: scroll;
}
.v-tab {
  background: #187498;
  color: white !important;
}

.v-tab.v-tab--active {
  background: white;
  color: #187498 !important;
}
</style>
