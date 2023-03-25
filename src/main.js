import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons, ModalPlugin } from 'bootstrap-vue'
import { ValidationProvider } from 'vee-validate';
import router from '@/router'
import VueMask from 'v-mask'

import "@/config/custom_stylesheet.scss";
import {rsiStore} from "@/store/store.js"

Vue.use(Vuex)

// Make BootstrapVue components throughout your project
Vue.use(BootstrapVue)
Vue.use(ModalPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(VueMask);

// import custom validation rules
require("@/helpers/validators");
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false

rsiStore.dispatch("getAllFormsFromDB")
    .then(() => {
      rsiStore.dispatch("getMoreFormsFromApiIfNecessary")
    })
    .then(() => {
      new Vue({
        router,
        store: rsiStore,
        async created() {
          rsiStore.subscribe((mutation) => {
            if (mutation.type === 'updateFormField' ||
                mutation.type === 'updateCheckBox' ||
                mutation.type === 'populateDriverFromICBC' ||
                mutation.type === 'populateVehicleFromICBC' ||
                mutation.type === 'typeAheadUpdate'
            ) {
              rsiStore.dispatch("saveCurrentFormToDB", rsiStore.state.currently_editing_form_object)
            }
          });

        },
        render: h => h(App),
      }).$mount('#app')
    })

