import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/assets/vendor/MaterialDesign/scss/materialdesignicons.scss";
import "@/assets/utm-avo/style.css";
// import "@/assets/icomoon/style.css";
import "@/assets/icomoon2/style.css";
import "@/assets/scss/argon.scss";

import globalComponents from "./globalComponents";


process.env.GOOGLE_API_KEY = config.GOOGLE_KEY
export default {
  install(Vue) {
    Vue.use(globalComponents);
  }
};
