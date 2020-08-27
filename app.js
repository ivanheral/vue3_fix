import {
  createApp,
  ref,
  h,
} from "./vue_fix.js";
// html
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(h);

const App = {
  setup() {
    const show = ref(true);
    const show_hide = () => {
      show.value = !show.value;
    }
    return () => html `
        ${ show.value ? html`<span style="display: block;">Hello React</span>` : null }
        <span style="display: block;" v-show="${show}">Hello Vue 3</span>
        <button style="display: block;" onClick=${show_hide}>show/hide</button>
      `
  }
}

createApp(App).mount("#app")