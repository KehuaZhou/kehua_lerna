import Button from './src/kehuaButton.vue'

Button.install = function (Vue) {
    Vue.component(Button.name,Button)
}

export default Button