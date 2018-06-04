<template lang="html">
    <div>
        <Heador/>
        <Ada/>
        <Slider/>
        <Adb/>
        <Vault/>
        <Crowdfunding/>
        <Guarantee/>
        <Adc/>
        <Insurance/>
        <Add/>
        <Blanknote/>
        <Shares/>
        <Recommend/>
        <Navbar/>
    </div>
</template>

<script>
  import Heador from "../public/header.vue"
  import Slider from "./mslider.vue"
  import Navbar from "../public/navbar.vue"
  import Ada from "./ada.vue"
  import Adb from "./adb.vue"
  import Adc from "./adc.vue"
  import Add from "./add.vue"
  import Vault from "./vault.vue"
  import Crowdfunding from "./crowdfunding.vue"
  import Guarantee from "./guarantee.vue"
  import Insurance from "./insurance.vue"
  import Blanknote from "./blanknote.vue"
  import Shares from "./shares.vue"
  import Recommend from "./recommend.vue"
  export default {
    components: {
      Heador,
      Slider,
      Navbar,
      Ada,
      Adb,
      Vault,
      Crowdfunding,
      Guarantee,
      Adc,
      Insurance,
      Add,
      Blanknote,
      Shares,
      Recommend,
    },
  }
</script>