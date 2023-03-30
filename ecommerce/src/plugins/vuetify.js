// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    icons: {
      iconfont: 'md' || 'fa' || 'md'
    },
    theme: {
      themes: {
        light: {
          primary: '#7C92FE' 
        }
      }
    }
  }
)
