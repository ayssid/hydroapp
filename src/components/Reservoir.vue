<template>
    <v-container>
      <v-layout v-bind="bindingLayout">
        <!-- <v-layout row wrap class="mb-2">-->
        <v-flex xs-12 sm2 offset-sm2 :class="flexClass">
          <v-card>
            <v-card-text  class="text-xs-center">
              <v-icon size="60px">fas fa-thermometer-three-quarters</v-icon><br>
              <span><font size="13">20  &deg;C</font></span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs-12 sm2 :class="flexClass">
          <v-card>
            <v-card-text class="text-xs-center">
              <v-icon size="60px">fas fa-tint</v-icon><br>
              <span><font size="13">80 %</font></span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs-12 sm2 :class="flexClass">
          <v-card>
            <v-card-text class="text-xs-center">
              <v-icon size="60px">fas fa-vials</v-icon><br>
              <span><font size="13">100 mg/Kg</font></span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs-12 sm2 :class="flexClass">
          <v-card>
            <v-card-text class="text-xs-center">
              <v-icon size="60px">fas fa-vial</v-icon><br>
              <span><font size="13">80</font></span>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>


<script>
export default {
  computed: {
    bindingLayout () {
      const binding = {}

      if (this.$vuetify.breakpoint.smAndUp) binding.row = true
      else binding.column = true

      return binding
    },
    flexClass () {
      let binding = {}

      if (this.$vuetify.breakpoint.smAndUp) binding = {'mr-2': true}
      else binding = {'mb-2': true}
      return binding
    }
  }
}
</script>
