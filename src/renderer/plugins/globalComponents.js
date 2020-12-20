
import BaseButton from "../components/base/element/BaseButton";
import BaseCheckbox from "../components/base/element/BaseCheckbox";
import BaseInput from "../components/base/element/BaseInput";
import { VueTelInput } from "vue-tel-input";


export default {
  install(Vue) {

    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component('vue-tel-input', VueTelInput);

  }
};
