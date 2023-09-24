import IndexField from './fields/IndexField'
import DetailField from './fields/DetailField'
import FormField from './fields/FormField'

Nova.booting((Vue) => {
    Vue.component('index-nova-larupload', IndexField);
    Vue.component('detail-nova-larupload', DetailField);
    Vue.component('form-nova-larupload', FormField);
})
