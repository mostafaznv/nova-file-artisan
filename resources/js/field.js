import IndexField from './fields/IndexField'
import DetailField from './fields/DetailField'
import FormField from './fields/FormField'

Nova.booting((Vue) => {
    Vue.component('index-nova-file-artisan', IndexField);
    Vue.component('detail-nova-file-artisan', DetailField);
    Vue.component('form-nova-file-artisan', FormField);
})
