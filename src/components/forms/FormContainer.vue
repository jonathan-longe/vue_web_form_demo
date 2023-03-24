<template>
  <div>
    <div class="d-flex">
      <div>
        <router-link to="/" class="text-white font-weight-bold" />
      </div>
    </div>
    <div class="card w-100 mt-3 mb-3 border-primary">
      <div class="card-header text-white bg-secondary pt-2 pb-0">
        <h4>{{ title }}</h4>
      </div>
      <div class="card-header mt-0 mb-0 pt-2 pb-0 text-dark">
        <p class="text-right pb-0 mb-2">
          <span class="prohibition_number">{{ getDashedFormNumber }}</span>
        </p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import {mapMutations} from "vuex";

  export default {
    name: "FormContainer",
    computed: {
      getDashedFormNumber() {
        return this.form_object.form_id;
      }
    },
    methods: {
      ...mapMutations(["editExistingForm"])
    },
    props: {
      form_object: {
        form_id: '',
        form_type: ''
      },
      title: String
    },
    mounted() {
      this.editExistingForm({
        form_id: this.form_object.form_id,
        form_type: this.form_object.form_type
      })
    }
  }
</script>