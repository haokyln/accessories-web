import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, setInteractionMode } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import {
  required,
  email,
  min,
  max,
  between,
  numeric,
  confirmed,
  min_value,
} from 'vee-validate/dist/rules';
import { checkUniqueProductName } from '@/services/admin/add-product-form';
import { checkUniqueCategoryCode } from '@/services/admin/all-category-form';
import { checkUniqueBrandName, checkUniqueBrandCode } from '@/services/admin/all-brand-form';
import { checkUniqueAttributeName } from '@/services/admin/attribute';
// config trigger
setInteractionMode('lazy');

// add all available rules in vee validate
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  });
}

// custom rules
extend('required', {
  ...required,
  message: (field) => field + ' không được để trống.',
});

extend('email', {
  ...email,
  message: 'Email không hợp lệ.',
});

extend('min', {
  ...min,
  message: (field, value) => field + ' tối thiểu là ' + value?.length + ' ký tự.',
});

extend('min_value', {
  ...min_value,
  message: (field, value) => field + ' tối thiểu là ' + value?.min + '.',
});

extend('max', {
  ...max,
  message: (field, value) => field + ' tối đa là ' + value?.length + ' ký tự.',
});

extend('between', {
  ...between,
  message: (field, value) =>
    field + ' phải nằm trong khoảng ' + value.min + ' đến' + value.max + '.',
});

extend('numeric', {
  ...numeric,
  message: 'Dữ liệu phải thuộc kiểu số.',
});

extend('confirmed', {
  ...confirmed,
  message: (field) => field + ' không khớp.',
});

extend('uniqueProductName', {
  ...required,
  validate: async (value) => {
    const result = await checkUniqueProductName(value.trim());
    return !result;
  },
  message: (field) => field + ' đã tồn tại.',
});

extend('uniqueCategoryCode', {
  ...required,
  validate: async (value) => {
    const result = await checkUniqueCategoryCode(value.trim());
    return !result;
  },
  message: (field) => field + ' đã tồn tại.',
});

extend('uniqueBrandName', {
  ...required,
  validate: async (value) => {
    const result = await checkUniqueBrandName(value.trim());
    return !result;
  },
  message: (field) => field + ' đã tồn tại.',
});

extend('uniqueBrandCode', {
  ...required,
  validate: async (value) => {
    const result = await checkUniqueBrandCode(value.trim());
    return !result;
  },
  message: (field) => field + ' đã tồn tại.',
});

extend('uniqueAttributeName', {
  ...required,
  validate: async (value) => {
    const result = await checkUniqueAttributeName(value.trim());
    return !result;
  },
  message: (field) => field + ' đã tồn tại.',
});

// end custom rules

// add component
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
