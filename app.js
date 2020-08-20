import { createApp, ref, defineComponent, h, Fragment
} from "https://unpkg.com/vue@3.0.0-rc.6/dist/vue.runtime.esm-browser.prod.js";
// replace to: ./vue_fix.js with fix
// html
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(h);

const Child = defineComponent({
    setup() {
        const count = ref(0);
        const increase = () => {
            count.value++;
        }
        return {
            count,
            increase
        }
    },
    render() {
        return html `
        <${Fragment}>
        <p>Hello</p>
        <p>World</p>
        <p>${this.count}</p>
        <button onClick=${this.increase}>increase</button>
        </${Fragment}>`
    }
})

createApp(Child).mount("#app");