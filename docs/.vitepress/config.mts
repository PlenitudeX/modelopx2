import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Restaurante do Zé',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Cardápio' || 'link1', link: '#cardapio' },
      { text: 'Reserva' || 'link2', link: '#reserva' },
      { text: 'Contato' || 'link3', link: '#Footer' }
    ],
  },
})
