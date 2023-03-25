<template>
  <div class="w-100 text-left">
    <pre>
      {{ JSON.stringify(this.getFormData(this.form_type, this.id), null, 3) }}
    </pre>
  </div>

</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "SvgPrint",
    props: {
      form_type: {
        type: String
      },
      id: {
        type: String,
      },
    },
    computed: {
      ...mapGetters(['getFormData', "isVehicleImpounded"]),
      // Remove ILO Copy if not needed

      getPath() {
        return `forms/${this.form_type}/${this.id}/data`
      }
    }
}
</script>

