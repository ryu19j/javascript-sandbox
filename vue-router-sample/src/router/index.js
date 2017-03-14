import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Foo from 'components/Foo'
import Bar from 'components/Bar'
import Memo from 'components/Memo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/foo', name: 'Foo', component: Foo },
    { path: '/bar/:id', name: 'Bar', component: Bar },
    { path: '/memo', name: 'Memo', component: Memo }
  ]
})
