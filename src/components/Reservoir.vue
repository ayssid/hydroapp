<template>
    <v-container>
      <v-layout v-bind="bindingLayout">
        <!-- <v-layout row wrap class="mb-2">-->
        <v-flex xs-12 sm2 offset-sm1 :class="flexClass">
          <v-card>
            <v-card-text  class="text-xs-center">
              <v-icon size="40px">fas fa-thermometer-three-quarters</v-icon><br>
              <span style="font-size: large">20  &deg;C</span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs-12 sm2 :class="flexClass">
          <v-card>
            <v-card-text class="text-xs-center">
              <v-icon size="40px">fas fa-tint</v-icon><br>
              <span style="font-size: large">80 %</span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs-12 sm2 :class="flexClass">
          <v-card>
            <v-card-text class="text-xs-center">
              <v-icon size="40px">fas fa-vials</v-icon><br>
              <span style="font-size: large">100 ppm</span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs-12 sm2 :class="flexClass">
          <v-card>
            <v-card-text class="text-xs-center">
              <v-icon size="40px">fas fa-vial</v-icon><br>
              <span style="font-size: large">80</span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs-12 sm2 :class="flexClass">
          <v-card>
            <v-card-text class="text-xs-center">
              <v-icon size="40px">fas fa-sun</v-icon><br>
              <span style="font-size: large">80 lx</span>
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
