<template>
<div id="app">
  <div class="content-wrapper">
    <div class="contents">
        <ejs-sidebar id="sidebar"  ref= "sidebar">
         <div class="title"> Sidebar content</div>
        <div class="sub-title">
          Click the button to close the Sidebar.
        </div>
        <div class="center-align">
          <button ejs-button id="close" v-on:click="closeClick" class="e-btn close-btn">Close Sidebar</button>
        </div>
        </ejs-sidebar>
    </div>
</div>
    <div class="contents1">
    <div class="span3">
        Enable RTL
    </div>
    <div class="span3">
        <ejs-checkbox :change="enableRTL"></ejs-checkbox>
    </div>
    <div class="span3">
        EnableStrict Persistence
    </div>
    <div class="span3">
        <ejs-checkbox :change="enablePersistence"></ejs-checkbox>
    </div>
    <div class="span3">
        Close on Doument click
    </div>
    <div class="span3">
        <ejs-checkbox :change="closeonDocumentClick"></ejs-checkbox>
    </div>
    <div class="span3">
        Animate
    </div>
    <div class="span3">
        <ejs-checkbox :change="Animate" checked="true"></ejs-checkbox>
    </div>
    <div class="span3">
        enable Gestures
    </div>
    <div class="span3">
        <ejs-checkbox :change="enableGesture"></ejs-checkbox>
    </div>
    <div class="span3">
        Backdrop
    </div>
    <div class="span3">
        <ejs-checkbox :change="Backdrop"></ejs-checkbox>
    </div>
    <div class="span3">
        Width string Value
    </div>
    
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="width" name="width" v-on:focusout="onStringFocusout"/>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="width">Width String Value</label>
        </div>
    </div>
    <div class="span3">
        Width number Value
    </div>
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="widthstring" name="widthstring" v-on:focusout="onNumberFocusout"/>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="widthstring">Width number Value</label>
        </div>
    </div>
    <div class="span3">
        Z-index Value
    </div>
    <div class="span3">
        <div class="e-float-input" style="width: 200px;">
            <input type="text" id="Zindex" name="Zindex" v-on:focusout="onIndexFocusout"/>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="Zindex">Z-index Value</label>
        </div>
    </div>
    <div class="span3">
        Position
    </div>
        <div class="span3">
        <ejs-dropdownlist id='float' :dataSource='positionData' :change="positionChange" value="Left" placeholder="Position"
            width="150px"></ejs-dropdownlist>
    </div>
    <div class="span3">
        Type
    </div>
    <div class="span3">
        <ejs-dropdownlist id='format' :dataSource='typeData' :change="typeChange" value="Auto" placeholder="Types" width="150px"></ejs-dropdownlist>
    </div>
    <div class="methods">
        Methods
        <div>
            <ejs-checkbox label='Show/Hide' :change="showHide" checked="true"></ejs-checkbox>

            <button id="destroy" Class="e-control e-btn" v-on:click="Destroy">Destroy</button>

            <button id="focusIn" Class="e-control e-btn" v-on:click="toggle">Toggle</button>

        </div>
   </div>
</div>
</div>

</div>
</template>

<script>
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(CheckBoxPlugin);
Vue.use(SidebarPlugin);
Vue.use(DropDownListPlugin);

export default {
    name: 'sidebar',
  data () {
    return {
            typeData: ['Auto', 'Push', 'Slide', 'Over'],
            positionData:  ['Left', 'Right']
        }
  },
  methods: {
      enablePersistence: function(args) {
    if(args.checked)  this.$refs.sidebar.$el.ej2_instances[0].enablePersistence = true;
     else  this.$refs.sidebar.$el.ej2_instances[0].enablePersistence =false;;
    },
    closeClick : function(args) {
         this.$refs.sidebar.hide();
    },
    typeChange: function(args){
      this.$refs.sidebar.$el.ej2_instances[0].type = args.value;
    },
    showHide: function(args){
      if(args.checked) this.$refs.sidebar.hide();
      else this.$refs.sidebar.show();
    },
    Destroy: function(args){
     this.$refs.sidebar.$el.ej2_instances[0].destroy();
    },
    toggle: function(args){
      this.$refs.sidebar.toggle();
    },
    positionChange: function(args) {debugger
         this.$refs.sidebar.$el.ej2_instances[0].position = args.value;
    },
    typeChange: function(args) { debugger
       this.$refs.sidebar.$el.ej2_instances[0].type = args.value;
    },
     enableRTL : function (args) {
     if(args.checked) this.$refs.sidebar.$el.ej2_instances[0].enableRtl = true;
     else this.$refs.sidebar.$el.ej2_instances[0].enableRtl =false;
    },
    closeonDocumentClick : function (args) {
     if(args.checked) this.$refs.sidebar.$el.ej2_instances[0].closeOnDocumentClick = true;
     else this.$refs.sidebar.$el.ej2_instances[0].closeOnDocumentClick =false;
    },
    Animate : function (args) {
     if(args.checked) this.$refs.sidebar.$el.ej2_instances[0].animate = true;
     else this.$refs.sidebar.$el.ej2_instances[0].animate =false;
    },
    enableGesture : function (args) {
     if(args.checked) this.$refs.sidebar.$el.ej2_instances[0].enableGestures = true;
     else this.$refs.sidebar.$el.ej2_instances[0].enableGestures =false;
    },
    Backdrop : function (args) {
     if(args.checked) this.$refs.sidebar.$el.ej2_instances[0].showBackdrop = true;
     elsethis.$refs.sidebar.$el.ej2_instances[0].showBackdrop =false;
    },
    onNumberFocusout : function (args) {
      if(args.target.value)
      this.$refs.sidebar.$el.ej2_instances[0].width = JSON.parse(args.target.value);
    },
    onStringFocusout : function (args) {
      if(args.target.value)
      this.$refs.sidebar.$el.ej2_instances[0].width = args.target.value;
    },
    onIndexFocusout : function (args) {
      if(args.target.value)
      this.$refs.sidebar.$el.ej2_instances[0].zIndex = JSON.parse(args.target.value);
    }
  }
  
}
</script>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

 .content-wrapper {
        width: 100%;
        margin: 0 auto;
        padding-top: 60px;
    }
    .methods{
        float:left;
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

   #sidebar{
    background: #2196f3;
    color: #ffffff;
    margin-top : 113px;
   }
</style>