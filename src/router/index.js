import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import CommentsView from '../views/CommentsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/post',
    name: 'mypost',
    component: PostView
  },
  {
    path: '/comments/:id',
    name: 'comments',
    component: CommentsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
