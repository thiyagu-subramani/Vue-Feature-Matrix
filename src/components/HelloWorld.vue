<template>
<div id="app">
  <div class="content-wrapper">
    <div class="contents">
      <label> DatePicker feature matrix sample </label>
        <ejs-datepicker id="datepicker"  ref= "datepicker" :format="dateFormat"       :floatLabelType="floatLabelType" :placeholder="waterMark">
        </ejs-datepicker>
    </div>
</div>
  <div class="contents1">
    <div class="span3">
        EnableStrict Persistence
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
        showClearButton
    </div>
    <div class="span3">
        <ejs-checkbox :change="showClearButton" checked="true"></ejs-checkbox>
    </div>
    <div class="span3">
        StrictMode
    </div>
    <div class="span3">
        <ejs-checkbox :change="strictMode"></ejs-checkbox>
    </div>
    <div class="span3">
        floatLabelType
    </div>
    <div class="span3">
        <ejs-dropdownlist id='float' :dataSource='float' :change="floatChange" value="Never" placeholder="floatLabelType"
        width="200px"></ejs-dropdownlist>
    </div>
    <div class="span3">
        Formats
    </div>
    <div class="span3">
        <ejs-dropdownlist id='dateformats' :dataSource="formatData" :change="changeFormat"  placeholder='Formats' :value="value"></ejs-dropdownlist>
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
        Placeholder Value
    </div>
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="placeholder" name="placeholder" v-on:focusout="onPlaceHolderFocusout"/>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="placeholder">PlaceHolder Value</label>
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
            <ejs-checkbox label='Show/Hide' :change="showHide"></ejs-checkbox>

            <button id="destroy" class="e-control e-btn" v-on:click="timeDestroy">Destroy</button>

            <button id="focusIn" class="e-control e-btn" v-on:click="timeFocs">FocusIn</button>

            <button id="focusOut" class="e-control e-btn" v-on:click="timeBlur($event)">Blur</button>
            <button id="getPersistData" Class="e-control e-btn"  v-on:click="GetPesistData">GetPesistData</button>

            <button id="getView" Class="e-control e-btn" v-on:click="GetView">GetCurrentView</button>
        </div>
    </div>

</div>

</div>
</template>

<script>
import Vue from 'vue';
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(CheckBoxPlugin);
Vue.use(DatePickerPlugin);
Vue.use(DropDownListPlugin);

export default {
  data () {
    return {
            formatData:  ['MM-dd-yyyy', 'yyyy-MM-dd', 'dd-MMMM'],
            float:  ['Never', 'Auto', 'Always'],
            waterMark : 'Choose a date',
            dateFormat: 'MM-dd-yyyy',
            floatLabelType : 'Never',
            value: 'MM-dd-yyyy'
        }
  },
  methods: {
        changeFormat: function(args) {debugger
            this.dateFormat = args.value;
      },
        floatChange: function(args) {
            this.floatLabelType = args.value;
      },
      showHide : function(args) {
        if(args.checked) this.$refs.datepicker.show();
        else this.$refs.datepicker.hide();
    },
     timeDestroy : function(args){debugger
       this.$refs.datepicker.$el.ej2_instances[0].destroy();
     },
     timeFocs : function() {
      this.$refs.datepicker.focusIn();
    },
    timeBlur : function(args){
      this.$refs.datepicker.focusOut();
    },
    onPlaceHolderFocusout : function(args){debugger
       if(args.target.value)
       this.waterMark = args.target.value;
    },
    onMaxFocusout : function(args){debugger
       this.$refs.datepicker.$el.ej2_instances[0].max = new Date(args.target.value);
    },
    onMinFocusout : function(args){debugger
      this.$refs.datepicker.$el.ej2_instances[0].min =new Date(args.target.value);
    },
    onValueFocusout: function(args){debugger
      this.$refs.datepicker.$el.ej2_instances[0].value = new Date(args.target.value);
    },
    enable : function(args) {
     if(args.checked)  this.$refs.datepicker.$el.ej2_instances[0].enabled = true;
     else  this.$refs.datepicker.enabled =false;;
    },
    enablePersistence : function(args) {
     if(args.checked) this.$refs.datepicker.$el.ej2_instances[0].enablePersistence = true;
     else  this.$refs.datepicker.$el.ej2_instances[0].enablePersistence =false;;
    },
    enableRTL : function(args) {debugger
     if(args.checked)  this.$refs.datepicker.$el.ej2_instances[0].enableRtl = true;
     else  this.$refs.datepicker.$el.ej2_instances[0].enableRtl =false;;
    },
    readOnly : function(args) {
     if(args.checked)  this.$refs.datepicker.$el.ej2_instances[0].readonly = true;
     else  this.$refs.datepicker.$el.ej2_instances[0].readonly =false;;
    },
    strictMode : function(args) {
     if(args.checked)  this.$refs.datepicker.$el.ej2_instances[0].strictMode = true;
     else  this.$refs.datepicker.$el.ej2_instances[0].strictMode =false;;
    },
    showClearButton : function(args) {
     if(args.checked)  this.$refs.datepicker.$el.ej2_instances[0].showClearButton = true;
     else  this.$refs.datepicker.$el.ej2_instances[0].showClearButton =false;;
    },
    enablePersistence : function (args) {
     if(args.checked) this.$refs.datepicker.$el.ej2_instances[0].enablePersistence = true;
     else this.$refs.datepicker.$el.ej2_instances[0].enablePersistence =false;;
    },
     GetView : function(args){
       console.log( this.$refs.datepicker.$el.ej2_instances[0].currentView());
    },
     GetPesistData : function(args){
     console.log(this.$refs.datepicker.$el.ej2_instances[0].getPersistData());
    },
     showTodayButton : function(args) {
     if(args.checked)  this.$refs.datepicker.$el.ej2_instances[0].showTodayButton = true;
     else  this.$refs.datepicker.$el.ej2_instances[0].showTodayButton =false;;
    },
    onStart : function(args){debugger
       this.$refs.datepicker.$el.ej2_instances[0].start = args.target.value;
    },
    onDepth : function(args){debugger
       this.$refs.datepicker.$el.ej2_instances[0].depth = args.target.value;
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