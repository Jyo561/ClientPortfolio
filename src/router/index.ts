import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Publications from '../components/Publications.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Experience from '../components/Experience.vue'
import SkillsandTools from '../components/Skills_and_Tools.vue'
//import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'projects',
          name: 'projects',
          component: Projects,
        },
        {
          path: 'experience',
          name: 'experience',
          component: Experience,
        },
        {
          path: 'publications',
          name: 'publications',
          component: Publications,
        },
        {
          path: 'skills',
          name: 'skills',
          component: SkillsandTools,
        },
        //{
          //path: 'contact',
          //name: 'contact',
          //component: Contact,
        //},

      ],
    },
  ],
})

export default router

