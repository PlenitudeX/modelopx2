<template>
    <footer :style="{background, color}" id="Footer" class="footer">
            <div>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Contato</h3>
                        <p>Endereço: Seu endereço, 123</p>
                        <p>Telefone: (11) 1234-5678</p>
                        <p>Email:contato@suaempresa.com</p>
                    </div>
                    <div class="footer-section">
                        <h3>Horário de Funcionamento</h3>
                        <p>Seu horario de funcionamento</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    &copy; 2023 Nome da empresa. Feito por <a :style="{color}" href="https://www.instagram.com/plenitude_x/">Plenitudex</a>.
                </div>
            </div>
        </footer>
</template>

<script setup lang="ts">
import Tema from '../tema.json'

const props = defineProps<{
    tema: string
}>()

const style = props.tema

const background = Tema[style].$schema.Footer
const color = Tema[style].$schema.White
</script>

<style>
.footer {
    padding: 20px 0 0;
    text-align: center;
}

.footer h3 {
    font-size: 36px;
    margin-bottom: 20px;
}

.footer p {
    font-size: 18px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-section {
    flex: 1;
    margin: 0 20px;
}

.footer-bottom {
    padding: 10px 0;
}

@media screen and (max-width: 700px) {
    .footer-content {
        flex-direction: column;
    }

}

</style>
