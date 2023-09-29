import { defineConfig } from 'vitepress'

const titulo = "Restaurante do Zé"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: titulo || 'Modelo 2',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Cardápio', link: '#cardapio' },
      { text: 'Reserva', link: '#reserva' },
      { text: 'Contato', link: '#Footer' }
    ],
  }
})
