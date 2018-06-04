<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Financial/>
        <Product/>
        <Insurance/>
        <Car/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
    import Heador from "../public/header.vue"
    import Slider from "./hslider.vue"
    import Financial from "./novice.vue"
    import Product from "./product.vue"
    import Insurance from "./insurance.vue"
    import Car from "./car.vue"
    import Footor from "../public/footer.vue"
    import Navbar from "../public/navbar.vue"
    export default {
          components: {
            Heador,
            Slider,
            Financial,
            Product,
            Insurance,
            Car,
            Footor,
            Navbar,
          },
    }
</script>

