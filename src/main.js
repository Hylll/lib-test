import components from './components';
import '@/assets/main.scss';
const GolemDesignSystem = {
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
//# sourceMappingURL=main.js.map