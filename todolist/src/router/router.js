import Vue from 'vue/';
import VueRouter from 'vue-router/';
import PostDetail from '@/components/PostDetail.vue';
import Posts from '@/components/Posts.vue'
import CreatePost from '../components/CreatePost.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/postDetail/:postId', component: PostDetail},
        {path: '/', component: Posts},
        {path: '/createPost', component: CreatePost}
    ],
    mode: 'history',
})


