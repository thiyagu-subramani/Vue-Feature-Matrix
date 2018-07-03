<template>
<div id="app">
  <div class="content-wrapper">
    <div class="contents">
      <label> Calendar feature matrix sample </label>
        <ejs-calendar id="calendar"  ref= "calendar">
        </ejs-calendar>
    </div>
</div>
  <div class="contents1">
    <div class="span3">
        Enable Persistence
    </div>
    <div class="span3">
        <ejs-checkbox :change="enablePersistence"></ejs-checkbox>
    </div>
    <div class="span3">
        EnableRTL
    </div>
    <div class="span3">
        <ejs-checkbox :change="enableRTL"></ejs-checkbox>
    </div>
    <div class="span3">
        Enabled
    </div>
    <div class="span3">
        <ejs-checkbox :change="enable" checked="true"></ejs-checkbox>
    </div>
    <div class="span3">
        ReadOnly
    </div>
    <div class="span3">
        <ejs-checkbox :change="readOnly"></ejs-checkbox>
    </div>
    <div class="span3">
        showTodayButton
    </div>
    <div class="span3">
        <ejs-checkbox :change="showTodayButton" checked="true"></ejs-checkbox>
    </div>
    <div class="span3">
        weekNumber
    </div>
    <div class="span3">
        <ejs-checkbox :change="weekNumber"></ejs-checkbox>
    </div>
    <div class="span3">
        Value
    </div>
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="value" name="value" v-on:focusout="onValueFocusout" />
            <span class="e-float-line"></span>
            <label class="e-float-text" for="value">Value</label>
        </div>
    </div>
    <div class="span3">
        firstDayOfWeek
    </div>
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="min" name="min" v-on:focusout="onFirstDay"/>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="min">firstDayOfWeek</label>
        </div>
    </div>
    <div class="span3">
        Min Value
    </div>
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="min" name="min" v-on:focusout="onMinFocusout"/>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="min">Min Value</label>
        </div>
    </div>
    <div class="span3">
        Max Value
    </div>
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="max" name="max" v-on:focusout="onMaxFocusout"/>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="max">max Value</label>
        </div>
    </div>
    <div class="span3">
        Start
    </div>
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="max" name="max" v-on:focusout="onStart"/>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="max">start</label>
        </div>
    </div>
    <div class="span3">
        Depth
    </div>
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="max" name="max" v-on:focusout="onDepth"/>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="max">depth</label>
        </div>
    </div>
    <div>
        Methods:
        <div>

             <button id="destroy" class="e-control e-btn" v-on:click="timeDestroy">Destroy</button>

            <button id="getPersistData" Class="e-control e-btn"  v-on:click="GetPesistData">GetPesistData</button>

            <button id="getView" Class="e-control e-btn" v-on:click="GetView">GetCurrentView</button>
        </div>
    </div>
</div>

</div>
</template>

<script>
import Vue from 'vue';
import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(CheckBoxPlugin);
Vue.use(CalendarPlugin);
Vue.use(DropDownListPlugin);

export default {
    name: 'calendardemo',
  data () {
    return {
        }
  },
  methods: {
    onMaxFocusout : function(args){debugger
       this.$refs.calendar.$el.ej2_instances[0].max = new Date(args.target.value);
    },
    onMinFocusout : function(args){debugger
      this.$refs.calendar.$el.ej2_instances[0].min = new Date(args.target.value);
    },
    onValueFocusout: function(args){debugger
      this.$refs.calendar.$el.ej2_instances[0].value = new Date(args.target.value);
    },
    enable : function(args) {debugger
     if(args.checked)  this.$refs.calendar.$el.ej2_instances[0].enabled = true;
     else  this.$refs.calendar.$el.ej2_instances[0].enabled = false;;
    },
    enablePersistence : function(args) {
     if(args.checked) this.$refs.calendar.$el.ej2_instances[0].enablePersistence = true;
     else  this.$refs.calendar.$el.ej2_instances[0].enablePersistence =false;;
    },
    enableRTL : function(args) {debugger
     if(args.checked)  this.$refs.calendar.$el.ej2_instances[0].enableRtl = true;
     else  this.$refs.calendar.$el.ej2_instances[0].enableRtl =false;;
    },
    readOnly : function(args) {
     if(args.checked)  this.$refs.calendar.$el.ej2_instances[0].readonly = true;
     else  this.$refs.calendar.$el.ej2_instances[0].readonly =false;;
    },
    showTodayButton : function(args) {
     if(args.checked)  this.$refs.calendar.$el.ej2_instances[0].showTodayButton = true;
     else  this.$refs.calendar.$el.ej2_instances[0].showTodayButton =false;;
    },
    weekNumber : function(args) {
     if(args.checked)  this.$refs.calendar.$el.ej2_instances[0].weekNumber = true;
     else  this.$refs.calendar.$el.ej2_instances[0].weekNumber =false;;
    },
    enablePersistence : function (args) {
     if(args.checked) this.$refs.calendar.$el.ej2_instances[0].enablePersistence = true;
     else this.$refs.calendar.$el.ej2_instances[0].enablePersistence =false;;
    },
    onStart : function(args){debugger
       this.$refs.calendar.$el.ej2_instances[0].start = args.target.value;
    },
    onDepth : function(args){debugger
       this.$refs.calendar.$el.ej2_instances[0].depth = args.target.value;
    },
    onFirstDay : function(args){debugger
       this.$refs.calendar.$el.ej2_instances[0].firstDayOfWeek = args.target.value;
    },
     GetView : function(args){
       console.log( this.$refs.calendar.$el.ej2_instances[0].currentView());
    },
     timeDestroy:function(args){
     this.$refs.calendar.$el.ej2_instances[0].destroy();
    },
     GetPesistData : function(args){
     console.log(this.$refs.calendar.$el.ej2_instances[0].getPersistData());
    }
  }
  
}
</script>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

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
        float: left;
        height: auto;
    }

    .contents1 {
        background-color: whitesmoke;
        width: 68%;
        float: right;
        border-left: 1px solid grey;
        border-bottom: 1px solid grey;
        height: auto;
        padding: 20px 0px 20px 20px;

    }

    .e-checkbox {
        position: relative !important;
    }

    .control h3 {
        text-align: center;
        padding: 80px 0px 0px 20px;
    }

    .control b {
        text-align: center;
        padding-left: 80px;
    }

    .span3 {
        width: 25%;
        float: left;
        align-content: center;
        padding-bottom: 10px;
    }

    input[type='text'] {
        width: 140px;
    }

    .e-dropdownlist {
        width: 200px;
    }

</style>