import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstRoute from '@/components/FirstRoute'
import DateTime from '@/components/DateTime'
import Time from '@/components/Time'
import DateRange from '@/components/DateRange'
import CalendarDemo from '@/components/CalendarDemo'
import Sidebar from '@/components/Sidebar'
import ContentTemplate from '@/components/ContentTemplate'
import FormValidation from '@/components/FormValidation'
import Dynamic  from '@/components/Dynamic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute
    },
    {
      path: '/datetime/:name',
      name: 'DateTime',
      component: DateTime
    },
    {
      path: '/daterange/:name',
      name: 'DateRange',
      component: DateRange
    },
    {
      path: '/time/:name',
      name: 'Time',
      component: Time
    },
    {
      path: '/calendardemo/:name',
      name: 'CalendarDemo',
      component: CalendarDemo
    },
    {
      path: '/sidebar/:name',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/contenttemplate/:name',
      name: 'ContentTemplate',
      component: ContentTemplate
    },
    {
      path: '/formvalidation/:name',
      name: 'FormValidation',
      component: FormValidation
    },
    {
      path: '/dynamic/:name',
      name: 'Dynamic',
      component: Dynamic
    },
  ]
})
