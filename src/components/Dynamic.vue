<template>
  <div id="app1">
      <!-- <ejs-datepicker :placeholer="waterMark" ></ejs-datepicker> -->
      <v-form :schema="formSchema" :data="formData"></v-form>
      <hr>
      Form data:
      <pre>{{ formData }}</pre>
  </div>
</template>

<script>
import Vue from 'vue';
import { DatePickerPlugin, DateTimePickerPlugin, DateRangePickerPlugin, TimePickerPlugin } from '@syncfusion/ej2-vue-calendars';
Vue.use(DateTimePickerPlugin);
Vue.use(DatePickerPlugin);
Vue.use(DateRangePickerPlugin);
Vue.use(TimePickerPlugin);

// // Native Datepicker component
// const dateInput = {
//   props: {
//     field: { required: true },
//     data: { required: true }
//   },
  
//   template: `
//   <div class="form-control">
//     <label>{{ field.label }}</label>
//     <input class="input" type="date" v-model="data.value">
//   </div>
//   `
// };

//Syncfusion DatePicker component

const datePicker = {
  props:{
    field:{ required:true  },
    data: { required: true }
  },

template:`<div class="form-control">

<ejs-datepicker class="input" id="date" v-model="data.value"></ejs-datepicker>
</div>`
};


//Syncfusion DateTimePicker component

const datetimePicker = {
  props:{
    field:{ required:true  },
    data: { required: true }
  },

template:`<div class="form-control">

<ejs-datetimepicker class="input" id="datetime" v-model="data.value"></ejs-datetimepicker>
</div>`
};

//Syncfusion DateRangePicker component

const daterangePicker = {
  props:{
    field:{ required:true  },
    data: { required: true }
  },

template:`<div class="form-control">

<ejs-daterangepicker class="input" id="daterange" v-model="data.value"></ejs-daterangepicker>
</div>`
};

//Syncfusion TimePicker component

const timePicker = {
  props:{
    field:{ required:true  },
    data: { required: true }
  },

template:`<div class="form-control">
<ejs-timepicker class="input" id="time" v-model="data.value"></ejs-timepicker>
</div>`
};


// Dynamic form component
const vForm = {
  template: `
  <div class="VueForm">
    <template v-for="field in schema.fields">
      <component :is="field.type" :field="field" :data.sync="data[field.name]"></component>
    </template>
  </div>
  `,
  
  components: {
   // dateInput: dateInput,
    datePicker:datePicker,
    datetimePicker:datetimePicker,
    daterangePicker:daterangePicker,
    timePicker:timePicker
  },
  
  props: {
    schema: { required: true },
    data: { required: true }
  }
};

Vue.component('v-form', vForm);

export default {
  name: 'dynamic',
  data () {
    return {
      // waterMark : 'Select a date'
       formSchema: {
      fields: [
        // {
        //   type: 'date-input',
        //   name: 'date_value',
        //   label: 'Date Value'
        // },
        {
          type: 'date-picker',
          name: 'datepick_value',
           label: 'DatePicker'
        },
        {
          type: 'datetime-picker',
          name: 'datetime_value',
          label: 'DateTimePicker'
        },
        {
          type: 'daterange-picker',
          name: 'daterange_value',
          label: 'DateRangePicker'
        },
        {
          type: 'time-picker',
          name: 'time_value',
          label: 'TimePicker'  
        }
      ]
    },
    formData: {
      // date_value: {
      //   value: '2018-07-18'
      // },
      datepick_value:{
        value:'07/03/2018'
      },
      datetime_value:{
        value:'01/01/2018 1:00 AM'
      },
      daterange_value:{
        value: ['1/1/2018','1/10/2018']
      },
      time_value:{
        value: new Date('1/1/2019 1:00 AM')
      }
    }
    }
  }
}
</script>

<style>
#app1{

  margin-top : 150px;
}
</style>