<template>
    <div class="banner">
        <div class="fundo">
            <h1 :style="{color:title}">Delícias do Sabor</h1>
            <p :style="{color}">Desfrute de uma culinária única no Delícias do Sabor, onde cada prato, dos tradicionais aos mais ousados, oferece uma experiência gastronômica memorável que cativa os sentidos e alimenta a alma.</p>
            <button type="submit" :style="{background: buttonBg, color}">Saiba mais</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tema from '../tema.json'

const props = defineProps<{
    tema: string
}>()

const style = props.tema

const title = Tema[style].$schema.Primary
const color = Tema[style].$schema.Text
const buttonBg = Tema[style].$schema.Secondary


</script>


<style>

.banner {
    background-image: url('https://picsum.photos/1000/500');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    text-align: center;
}

.banner .fundo {
    background-color: rgba(255, 255, 255, 0.376);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.banner h1 {
    font-size: 50px;
    margin: 0;
    line-height: 5rem;
}

.banner p {
    font-size: 24px;
    padding: 0 10%;
}

.banner button {
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 24px;
    margin-top: 20px;
}

.banner button:hover {
    cursor: pointer;
}

@media (max-width: 768px) {
    .banner {
        height: 100%;
    }

    .banner .fundo {
        padding-bottom: 20px;
    }

    .banner h1 {
        font-size: 45px;
        padding-top: 8vh;
        line-height: 3rem;
    }

    .banner p {
        font-size: 18px;
    }

    .banner button {
        font-size: 18px;
    }
}

@media (max-width: 425px) {
    .banner h1 {
        font-size: 36px;
        padding-top: 8vh;
        line-height: 2rem;
    }

    .banner p {
        font-size: 16px;
    }

    .banner button {
        font-size: 16px;
    }
}

</style>
