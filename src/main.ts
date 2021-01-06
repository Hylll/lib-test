import { PluginObject } from 'vue';
import components from './components';
import VueCompositionAPI from '@vue/composition-api'

const GolemDesignSystem: PluginObject<undefined> = {
  install(Vue) {
    Vue.use(VueCompositionAPI)
    Object.values(components).forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};

export default GolemDesignSystem;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(GolemDesignSystem);
}
