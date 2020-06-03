<template>
  <div class="side-bar">
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'SideBar',
  components: {},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  mounted() {
    console.log(this.token)
  }
}
</script>