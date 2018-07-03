<template>
<div id="app">
<div class="content-wrapper">
    <div><label> Calendar Two-Way binding sample </label></div>
       <div class="contents">
              <ejs-calendar id="calendar" v-model="date" width="200px"></ejs-calendar>
       </div>
        <div class="contents">
              <ejs-calendar id="calendar" v-model="date" width="200px"></ejs-calendar>
        </div>
</div>
  <div class="content-wrapper">
    <div><label> DatePicker Two-Way binding sample </label></div>
    <div class="contents">
         <ejs-datepicker id="datepicker" placeholder="Select a date" v-model="date" width="200px"></ejs-datepicker>
    </div>
    <div class="contents">
        <ejs-datepicker id="datepicker2" placeholder="Select a date"  v-model="date" width="200px"></ejs-datepicker>
    </div>
</div>
<div class="content-wrapper">
    <div><label> DateTimePicker Two-Way binding sample </label></div>
    <div class="contents">
         <ejs-datetimepicker id="datetimepicker" placeholder="Select a datetime" v-model="date" width="200px"></ejs-datetimepicker>
    </div>
    <div class="contents">
        <ejs-datetimepicker id="datetimepicker2" placeholder="Select a datetime"  v-model="date" width="200px"></ejs-datetimepicker>
    </div>
</div>

<div class="content-wrapper">
    <div><label> TimePicker Two-Way binding sample </label></div>
    <div class="contents">
         <ejs-timepicker id="timepicker" placeholder="Select a time" v-model="date" width="200px"></ejs-timepicker>
    </div>
    <div class="contents">
        <ejs-timepicker id="timepicker2" placeholder="Select a time"  v-model="date" width="200px"></ejs-timepicker>
    </div>
</div>
</div>
</template>

<script>
import Vue from 'vue';
import { CalendarPlugin} from '@syncfusion/ej2-vue-calendars';
import { DatePickerPlugin} from '@syncfusion/ej2-vue-calendars';
import { DateTimePickerPlugin} from '@syncfusion/ej2-vue-calendars';
import { TimePickerPlugin} from '@syncfusion/ej2-vue-calendars';

Vue.use(CalendarPlugin);
Vue.use(DatePickerPlugin);
Vue.use(DateTimePickerPlugin);
Vue.use(TimePickerPlugin);
export default {
     name: 'firstroute',
    data () {
    return {
            date: null
        }
  }
  }
</script>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';


 .content-wrapper {
        width: 100%;
        margin: 0 auto;
        padding-top: 60px;
    }
    
    #container {
        width: 100%;
        height: 60%;
    }
    
    .contents {
        width: 20%;
        float: left;
        height: auto;
    }    
    
    input[type='text'] {
        width: 140px;
    }
</style>