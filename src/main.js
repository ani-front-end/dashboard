import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.less'



import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
Vue.component('chart', ECharts)

// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.echartsResize = function(ref){
    setInterval(() => {
        window.onresize = function () {
            ref.resize()
        }
    }, 100)
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
