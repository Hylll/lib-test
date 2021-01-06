import { PluginObject } from 'vue';
import components from './components';
import '@/assets/main.scss';

const GolemDesignSystem: PluginObject<undefined> = {
  install(Vue) {
    Object.values(components).forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};

export default GolemDesignSystem;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(GolemDesignSystem);
}
