<template>
  <div>
    <v-container v-if="largeScreen">
      <v-layout row wrap class="mb-2">
        <v-flex xs-12 sm6 offset-sm3>
            <span class="ml-5"><v-icon>ac_unit</v-icon>20 &#8451;</span>
            <span class="ml-5"><v-icon>fas fa-tint</v-icon>20 &#8451;</span>
            <span class="ml-5"><v-icon>ac_unit</v-icon>20 &#8451;</span>
            <span class="ml-5"><v-icon>ac_unit</v-icon>20 &#8451;</span>
        </v-flex>
      </v-layout>
    </v-container>
     <v-container v-if="!largeScreen">
      <v-layout row wrap class="mb-2">
        <v-flex xs-12 style="text-align: center;">
            <span><v-icon>ac_unit</v-icon>20 &#8451;</span>
            <span class="ml-5"><v-icon>ac_unit</v-icon>20 &#8451;</span>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mb-2">
        <v-flex xs-12 style="text-align: center;">
            <span><v-icon>ac_unit</v-icon>20 &#8451;</span>
            <span class="ml-5"><v-icon>ac_unit</v-icon>20 &#8451;</span>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  computed: {
    largeScreen () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>
