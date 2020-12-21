import config from "../connect/config";

import globalComponents from "./globalComponents";


process.env.GOOGLE_API_KEY = config.GOOGLE_KEY
export default {
  install(Vue) {
    Vue.use(globalComponents);
  }
};
