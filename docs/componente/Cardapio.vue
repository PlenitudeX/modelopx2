<template>
    <div :style="{background:body}" id="cardapio">
        <h1 :style="{color:title}">Cardápio</h1>
        <div class="container">
            <div :style="{background: card}" class="cards" v-for="cardapio in cardapios" :key="cardapio.id">
                <div class="card">
                    <div class="text">
                        <h2 :style="{color:title}">Nome</h2>
                        <p :style="{color}">{{ cardapio.titulo }}</p>
                    </div>
                    <div class="text">
                        <h2 :style="{color:title}">Preço</h2>
                        <p :style="{color}">R$ {{ cardapio.preço }}</p>
                    </div>
                </div>
                <img :src="cardapio.imagem" alt="Imagem 1">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tema from '../tema.json'

const cardapios = ref([
    {
        id: 1,
        titulo: 'Pão de queijo',
        preço: 5,
        imagem: 'https://picsum.photos/1500/1000',
    },
    {
        id: 2,
        titulo: 'Café',
        preço: 10,
        imagem: 'https://picsum.photos/1500/1000',
    },
    {
        id: 3,
        titulo: 'Misto Quente',
        preço: 7,
        imagem: 'https://picsum.photos/1500/1000',
    },
    {
        id: 4,
        titulo: 'Suco de Laranja',
        preço: 2,
        imagem: 'https://picsum.photos/1500/1000',
    },
    {
        id: 5,
        titulo: 'Bolo de Cenoura',
        preço: 5,
        imagem: 'https://picsum.photos/1500/1000',
    },
])

const props = defineProps<{
    tema: string
}>()

const style = props.tema

const title = Tema[style].$schema.Primary
const color = Tema[style].$schema.Text
const body = Tema[style].$schema.Body
const card = Tema[style].$schema.White

</script>

<style>
#cardapio {
    text-align: center;
    padding: 2rem;
}

#cardapio h1 {
    font-size: 50px;
}

#cardapio .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

#cardapio .cards {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 1rem;
    width: 300px;
}

#cardapio .card {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
}

@media screen and (min-width: 740px) {
    #cardapio .cards {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #cardapio .cards .text {
        padding: 1rem;
        text-align: left;
    }

    #cardapio .cards img {
        height: 10rem;
        width: 15rem;
    }

    #cardapio .card {
        padding: 1rem;
    }

    #cardapio .cards:nth-child(odd) {
        flex-direction: row-reverse;
    }

}
</style>
