import Vue from 'vue';
import {
    CellGroup,
    Field,
    Switch,
    Button,
    Checkbox,
    CheckboxGroup,
    Row,
    Col
} from 'vant';
export default () => {
    Vue.use(Field);
    Vue.use(CellGroup);
    Vue.use(Switch);
    Vue.use(Button);
    Vue.use(CheckboxGroup);
    Vue.use(Checkbox);
    Vue.use(Row).use(Col);

}