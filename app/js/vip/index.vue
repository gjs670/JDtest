<template lang="html">
    <div>
        <Vheador/>
        <Ade/>
        <List/>
        <Realname/>
        <Help/>
        <Navbar/>
    </div>
</template>

<script>
  import Vheador from "./vheador.vue"
  import Ade from "./ade.vue"
  import List from "./list.vue"
  import Realname from "./realname.vue"
  import Help from "./help.vue"
  import Navbar from "../public/navbar.vue"
  export default {
    components: {
      Vheador,
      Ade,
      List,
      Realname,
      Help,
      Navbar,
    },
  }
</script>