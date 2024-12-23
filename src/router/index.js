import { createWebHistory, createRouter } from 'vue-router'

import Login from '../pages/user/login.vue';
import Signup from '../pages/user/Signup.vue';
import PageWrapper from '../pages/common/PageWrapper.vue';
import Sidebar from '../pages/common/Sidebar.vue';
import Header from '../pages/common/Header.vue';
import MobileSearchBar from '../pages/common/MobileSearchBar.vue';
import Board from "../pages/board/BoardList.vue";

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: Signup },
  { path: '/main/:id', component: PageWrapper,
    childern: [
        { path: '1', component: Board },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;