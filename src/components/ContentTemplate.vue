<template>
<div id="app">
    <div class="content-wrapper">
      <div class="contents">
           <label>Content Template feature matrix sample </label>
             <ejs-sidebar id="default-sidebar" width='400px'  ref="sidebarInstance">
            <div>
            <div class="template">
            <ejs-calendar id="calendar" width="200px"></ejs-calendar>
            </div>
            <div class="template">
               <ejs-datepicker id="datepicker" placeholder="select a date" width="200px"></ejs-datepicker>
            </div>
            <div class="template">
              <ejs-datetimepicker id="datetimepicker" placeholder="select a date time"  width="200px"></ejs-datetimepicker>
            </div>
            <div class="template">
             <ejs-daterangepicker id="daterangepicker" placeholder="select a range" width="200px"></ejs-daterangepicker>
            </div>
            <div class="template">
               <ejs-timepicker id="timepicker" placeholder="select a time" width="200px"></ejs-timepicker>
            </div>
            </div>
            </ejs-sidebar>
            </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { DateRangePickerPlugin, } from '@syncfusion/ej2-vue-calendars';
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import { DateTimePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import { TimePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';

import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SidebarPlugin);
Vue.use(TimePickerPlugin);
Vue.use(DatePickerPlugin);
Vue.use(DateRangePickerPlugin);
Vue.use(DateTimePickerPlugin);
Vue.use(CalendarPlugin);

export default {
    name: 'contenttemplate',
  data () {
    return {
        }
  }
}
</script>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';

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
        width: 30%;
        height: auto;
        padding: 15px;
         text-align: center;
    }

    #default-sidebar {
    background-color: lightblue;
    color: #ffffff;
    margin-top: 102px;
}

.title-header {
    text-align: center;
    font-size: 18px;
    padding: 15px;
}

.sub-title {
    text-align: center;
    font-size: 16px;
    padding: 10px;
}

.template{
    padding: 15px;
}
</style>