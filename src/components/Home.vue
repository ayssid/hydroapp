<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs-12 sm6 offset-sm3>
        <v-card>
          <v-card-media src="https://www.growingmagazine.com/wp-content/uploads/2017/05/analyzing-future-hydroponics-image.jpg" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" @click="OnLoadReservoir(1)">Detail</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    OnLoadReservoir (id) {
      this.$router.push('/reservoirs/' + id)
    }
  }
}
</script>
