!function(){"use strict";var e,t,l={876:function(e,t,l){var a=window.wp.blocks,n=window.wp.i18n;(0,a.registerBlockVariation)("core/columns",{name:"resume-experience",title:(0,n.__)("Resume Experience","evans-block-theme"),description:(0,n.__)("Add experience to resume.","evans-block-theme"),category:"evans-block-theme",scope:["inserter"],attributes:{className:"resume-experience-block",verticalAlignment:"top"},icon:{src:"id"},innerBlocks:[["core/column",{width:"50%",verticalAlignment:"top"},[["core/heading",{level:2,placeholder:"Company",className:"job-company"}],["core/heading",{level:3,placeholder:"Location",className:"job-location"}],["core/heading",{level:4,placeholder:"From – To",className:"job-dates"}]]],["core/column",{width:"50%",verticalAlignment:"top"},[["core/heading",{level:3,placeholder:"Job Title",className:"job-title"}],["core/paragraph",{placeholder:"Job Description",className:"job-description"}]]]]});var i=window.wp.element,r=window.wp.blockEditor,o=window.wp.components,c=JSON.parse('{"apiVersion":2,"title":"Talk","description":"Block for WordCamp speaking experience","text-domain":"evans-block-theme","name":"evans-block-theme/talk","icon":"megaphone","category":"evans-block-theme","attributes":{"label":{"type":"string"},"headline":{"type":"string"},"description":{"type":"string"},"talk_link":{"type":"object","default":{"title":"Talk","url":null}},"slide_link":{"type":"object","default":{"title":"Slides","url":null}},"video_link":{"type":"object","default":{"title":"Video","url":null}},"image":{"type":"object","default":{"id":null,"url":null}}},"supports":{"html":false},"example":{"attributes":{"headline":"A Talk Title","label":"WordCamp Anywhere 2020","description":"A short description of the talk.","slide_link":{"title":"Slides","url":"https://slideshare.net/"},"image":{"url":"https://s.w.org/images/core/5.3/MtBlanc1.jpg"}}},"editorScript":"file:../../build/editor-scripts.js","editorStyle":"file:../../build/editor-styles.css"}'),s=l.t(c,2);(0,a.registerBlockType)(c,{...s,edit:e=>{let{isSelected:t,attributes:l,setAttributes:a}=e;const c=(0,r.useBlockProps)({className:"block-talk"}),{label:s,headline:m,description:d,slide_link:u,video_link:p,talk_link:k,image:b}=l,g=e=>{a({image:e})};return(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",c,(0,i.createElement)("div",{className:"block-talk-inner"},(t||s)&&(0,i.createElement)(r.RichText,{placeholder:(0,n.__)("Label text","evans-block-theme"),value:s,onChange:e=>{a({label:e})},tagName:"span",allowedFormats:[],className:"block-talk-label"}),(0,i.createElement)("div",{className:"block-talk-content"},(0,i.createElement)(r.RichText,{placeholder:(0,n.__)("Talk title","evans-block-theme"),value:m,onChange:e=>{a({headline:e})},tagName:"h2",allowedFormats:[],className:"block-talk-title"}),(t||d)&&(0,i.createElement)("div",{className:"block-talk-desc"},(0,i.createElement)(r.RichText,{placeholder:(0,n.__)("Talk Description","evans-block-theme"),value:d,onChange:e=>{a({description:e})},tagName:"p",allowedFormats:["core/bold","core/italic"]})),t&&(0,i.createElement)("div",{className:"block-talk-links"},(0,i.createElement)("label",null,(0,i.createElement)("em",null,"Talk:"),(0,i.createElement)(r.__experimentalLinkControl,{value:k,onChange:e=>{a({talk_link:e})},settings:[]})),(0,i.createElement)("label",null,(0,i.createElement)("em",null,"Slides:"),(0,i.createElement)(r.__experimentalLinkControl,{value:u,onChange:e=>{a({slide_link:e})},settings:[]})),(0,i.createElement)("label",null,(0,i.createElement)("em",null,"Video:"),(0,i.createElement)(r.__experimentalLinkControl,{value:p,onChange:e=>{a({video_link:e})},settings:[]}))),!t&&(0,i.createElement)("div",{className:"block-talk-links"},(0,i.createElement)(o.ButtonGroup,null,k.url&&(0,i.createElement)(o.Button,{href:k.url,variant:"primary",icon:"tickets"},k.title),u.url&&(0,i.createElement)(o.Button,{href:u.url,variant:"primary",icon:"slides"},u.title),p.url&&(0,i.createElement)(o.Button,{href:p.url,variant:"primary",icon:"video-alt"},p.title)))),(0,i.createElement)("div",{className:"block-talk-image-wrap"},!t&&b.url&&(0,i.createElement)("img",{src:b.url,className:"block-talk-image",alt:m+" talk thumbanil"}),!t&&!b.url&&(0,i.createElement)(o.Icon,{icon:"megaphone",size:"200",className:"block-talk-image"}),t&&(0,i.createElement)(r.MediaUploadCheck,null,(0,i.createElement)(r.MediaUpload,{allowedTypes:["image"],value:b.id,onSelect:g,render:e=>{let{open:t}=e;return(0,i.createElement)(o.Button,{isDefault:!0,isLarge:!0,className:b.id?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:t,icon:b.id?"":"format-image",title:b.id?(0,n.__)("Image Preview","evans-block-theme"):(0,n.__)("Set Image","evans-block-theme")},b.id?(0,i.createElement)("img",{src:b.url,className:"block-talk-image",alt:m+" talk thumbanil"}):(0,n.__)("Set Image","evans-block-theme"))}})),t&&b.id&&(0,i.createElement)(r.MediaUploadCheck,null,(0,i.createElement)(r.MediaUpload,{allowedTypes:["image"],value:b.id,onSelect:g,render:e=>{let{open:t}=e;return(0,i.createElement)(o.Button,{isDefault:!0,isLarge:!0,className:"block-talk-image-replace",onClick:t,icon:"edit",title:(0,n.__)("Replace Image","evans-block-theme")})}}),(0,i.createElement)(o.Button,{isLarge:!0,isDestructive:!0,className:"block-talk-image-remove",onClick:()=>{a({image:{}})},icon:"trash",title:(0,n.__)("Remove image","evans-block-theme")}))))))},save:()=>null});var m=JSON.parse('{"apiVersion":2,"title":"Skills","description":"Block for resume skills","text-domain":"evans-block-theme","name":"evans-block-theme/skills","icon":"star-half","category":"evans-block-theme","attributes":{"label":{"type":"string"},"level":{"type":"string"}},"supports":{"html":false},"example":false,"editorScript":"file:../../build/editor-scripts.js","editorStyle":"file:../../build/editor-styles.css"}'),d=l.t(m,2);(0,a.registerBlockType)(m,{...d,edit:e=>{let{isSelected:t,attributes:l,setAttributes:a}=e;const o=(0,r.useBlockProps)({className:"block-skills is-style-resume_skills"}),{label:c,level:s}=l;return(0,i.createElement)(i.Fragment,null,(0,i.createElement)("ul",o,(0,i.createElement)("li",{className:"block-skills__inner"},(t||c)&&(0,i.createElement)(r.RichText,{placeholder:(0,n.__)("Label text","evans-block-theme"),value:c,onChange:e=>{a({label:e})},tagName:"strong",allowedFormats:[],className:"block-skills__label"}),(t||s)&&(0,i.createElement)(r.RichText,{placeholder:(0,n.__)("level text","evans-block-theme"),value:s,onChange:e=>{a({level:e})},tagName:"em",allowedFormats:[],className:"block-skills__level"}))))},save:()=>null})}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={exports:{}};return l[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"==typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"==typeof l.then)return l}var i=Object.create(null);n.r(i);var r={};e=e||[null,t({}),t([]),t(t)];for(var o=2&a&&l;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((function(e){r[e]=function(){return l[e]}}));return r.default=function(){return l},n.d(i,r),i},n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(876)}();