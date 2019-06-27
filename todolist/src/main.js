import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import PostDetail from './components/PostDetail';
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'

Vue.use(VueRouter);


const routes = [
  {path: '/postDetail/:postId', component: PostDetail},
  {path: '/', component: Posts},
  {path: '/createPost', component: CreatePost}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
