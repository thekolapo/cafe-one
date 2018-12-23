import Loader from './Loader.vue' ;
import Landing from './Landing.vue'

export const routes = [
    { path: '', component: Loader },
    { path: '/loader', component: Loader },
    { path: '/landing', component: Landing }
]