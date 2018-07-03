debugger
<template>
<div id="app">
 <div id="wrapper">
    <form id="app" @submit="checkForm" action="/something" method="post">
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
            <div>
              <ejs-datepicker id="date" v-model="dateValue" placeholder="select a date"></ejs-datepicker>
            </div>
            <div>
              <ejs-datetimepicker id="datetime" v-model="dateTimeValue" placeholder="select a datetime"></ejs-datetimepicker>
            </div>
            <div>
              <ejs-timepicker id="time" v-model="timeValue" placeholder="Select a Time"></ejs-timepicker>
            </div>
            <p>
              <input type="submit" value="Submit">  
            </p>
    </form>
</div>
</div>
</template>

<script>
import Vue from 'vue';
import { DatePickerPlugin} from '@syncfusion/ej2-vue-calendars';
import { DateTimePickerPlugin} from '@syncfusion/ej2-vue-calendars';
import { TimePickerPlugin} from '@syncfusion/ej2-vue-calendars';



Vue.use(DatePickerPlugin);
Vue.use(DateTimePickerPlugin);
Vue.use(TimePickerPlugin);


export default {
     name: 'formvalidation',
    data () {
    return {
    errors:[],
    dateValue : null,
    dateTimeValue : null,
    timeValue : null
  

    }
 },
    methods:{
    checkForm:function(e) {debugger
        this.errors = [];
      if(!this.dateValue) this.errors.push("Date required.");
      if(!this.dateTimeValue) this.errors.push("DateTime required.");
      if(!this.timeValue) this.errors.push("Time required.");
      if(this.errors.length == 0) alert("Form submitted successfully!");
      e.preventDefault();
    }
  }
}
</script>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';

#wrapper {
         max-width: 246px;
        margin: 30px auto;
        padding-top: 15px;
    }
</style>