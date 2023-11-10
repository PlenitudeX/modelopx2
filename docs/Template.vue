<template>
    <Banner :tema="Tema"/>
    <Cardapio :tema="Tema"/>
    <!-- <Reserva :tema="Tema"/> -->
    <Footer :tema="Tema"/>
</template>

<script setup>
import Banner from './componente/Banner.vue'
import Cardapio from './componente/Cardapio.vue'
// import Reserva from './componente/Reserva.vue'
import Footer from './componente/Footer.vue'

const Tema = window.location.search?.split('=')[1] || '0'
</script>
