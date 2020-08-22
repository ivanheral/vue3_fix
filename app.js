import { createApp, ref, defineComponent, h, Fragment
} from "./vue_fix.js";
// replace to: ./vue_fix.js with fix
// html
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(h);

const App  = {
    setup() {
      const count = ref(0)
      const increase = () => {
          count.value++
      }
      return () => html`
        <p>Hello <p>World</p></p>
        <p>${count.value}</p>
        <button onClick=${increase}>increase</button>
      `
    }
  }
  
  createApp(App).mount("#app")