<template lang="html">
    <div>
        <Heador/>
        <Gold/>
        <Hascar/>
        <Whitebar/>
        <Activity/>
        <Navbar/>
    </div>
</template>
<script>
    import Heador from "../public/header.vue"
    import Gold from "./gold.vue"
    import Hascar from "./hasCar.vue"
    import Whitebar from "./whitebar.vue"
    import Activity from "./activity.vue"
    import Navbar from "../public/navbar.vue"
    export default {
      components: {
        Heador,
        Gold,
        Hascar,
        Whitebar,
        Activity,
        Navbar,
      },
    }
</script>