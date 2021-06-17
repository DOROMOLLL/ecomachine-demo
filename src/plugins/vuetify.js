import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify,{
    options: {
        customProperties: true
    }
});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#20499a',
                secondary: '#3884ca',
                accent: '#f7d700',
                error: '#b23236',
                white:'#ffffff'
            },
        },
    },
});
