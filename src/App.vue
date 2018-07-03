<template>
  <div id="app">
   <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	  <div style="padding-left:0px;" class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse"> 
      <ul class="nav navbar-nav" >
        <li data-toggle="collapse" ><router-link to="/">Feature Matrix for DatePicker</router-link></li>
        <li data-toggle="collapse" ><router-link to="/firstroute/Sebastian">TwoWay Binding</router-link></li>
        <li data-toggle="collapse" ><router-link to="/datetime/Sebastian">Feature Matrix for DateTimPicker</router-link></li>
        <li data-toggle="collapse" ><router-link to="/time/Sebastian">Feature Matrix for TimePicker</router-link></li>
        <li data-toggle="collapse" ><router-link to="/daterange/Sebastian">Feature Matrix for DateRangePicker</router-link></li>
        <li data-toggle="collapse" ><router-link to="/calendardemo/Sebastian">Feature Matrix for Calendar</router-link></li>
        <li data-toggle="collapse" ><router-link to="/contenttemplate/Sebastian">Content Template</router-link></li>
         <li data-toggle="collapse" ><router-link to="/sidebar/Sebastian">Feature Matrix for Sidebar</router-link></li>
          <li data-toggle="collapse" ><router-link to="/formvalidation/Sebastian">Form Validation</router-link></li>
            <li data-toggle="collapse" ><router-link to="/dynamic/Sebastian">Dynamic From Validation</router-link></li>
      </ul>
    </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
</style>