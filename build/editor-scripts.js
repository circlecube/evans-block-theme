!function(){"use strict";var e,l,t={876:function(e,l,t){var a=window.wp.blocks,n=window.wp.i18n;(0,a.registerBlockVariation)("core/columns",{name:"resume-experience",title:(0,n.__)("Resume Experience","evans-block-theme"),description:(0,n.__)("Add experience to resume.","evans-block-theme"),category:"evans-block-theme",scope:["inserter"],attributes:{className:"resume-experience-block",verticalAlignment:"top"},icon:{src:"id"},innerBlocks:[["core/column",{width:"50%",verticalAlignment:"top"},[["core/heading",{level:2,placeholder:"Company",className:"job-company"}],["core/heading",{level:3,placeholder:"Location",className:"job-location"}],["core/heading",{level:4,placeholder:"From – To",className:"job-dates"}]]],["core/column",{width:"50%",verticalAlignment:"top"},[["core/heading",{level:3,placeholder:"Job Title",className:"job-title"}],["core/paragraph",{placeholder:"Job Description",className:"job-description"}]]]]});var i=window.wp.element,o=window.wp.blockEditor,r=window.wp.components,c=JSON.parse('{"apiVersion":2,"title":"Talk","description":"Block for WordCamp speaking experience","text-domain":"evans-block-theme","name":"evans-block-theme/talk","icon":"megaphone","category":"evans-block-theme","attributes":{"label":{"type":"string"},"headline":{"type":"string"},"description":{"type":"string"},"talk_link":{"type":"object","default":{"title":"Talk","url":null}},"slide_link":{"type":"object","default":{"title":"Slides","url":null}},"video_link":{"type":"object","default":{"title":"Video","url":null}},"image":{"type":"object","default":{"id":null,"url":null}}},"supports":{"html":false},"example":{"attributes":{"headline":"A Talk Title","label":"WordCamp Anywhere 2020","description":"A short description of the talk.","slide_link":{"title":"Slides","url":"https://slideshare.net/"},"image":{"url":"https://s.w.org/images/core/5.3/MtBlanc1.jpg"}}},"editorScript":"file:../../build/editor-scripts.js","editorStyle":"file:../../build/editor-styles.css"}'),s=t.t(c,2);(0,a.registerBlockType)(c,{...s,edit:e=>{let{isSelected:l,attributes:t,setAttributes:a}=e;const c=(0,o.useBlockProps)({className:"block-talk"}),{label:s,headline:m,description:u,slide_link:d,video_link:p,talk_link:k,image:b}=t,g=e=>{a({image:e})};return(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",c,(0,i.createElement)("div",{className:"block-talk-inner"},(l||s)&&(0,i.createElement)(o.RichText,{placeholder:(0,n.__)("Label text","evans-block-theme"),value:s,onChange:e=>{a({label:e})},tagName:"span",allowedFormats:[],className:"block-talk-label"}),(0,i.createElement)("div",{className:"block-talk-content"},(0,i.createElement)(o.RichText,{placeholder:(0,n.__)("Talk title","evans-block-theme"),value:m,onChange:e=>{a({headline:e})},tagName:"h2",allowedFormats:[],className:"block-talk-title"}),(l||u)&&(0,i.createElement)("div",{className:"block-talk-desc"},(0,i.createElement)(o.RichText,{placeholder:(0,n.__)("Talk Description","evans-block-theme"),value:u,onChange:e=>{a({description:e})},tagName:"p",allowedFormats:["core/bold","core/italic"]})),l&&(0,i.createElement)("div",{className:"block-talk-links"},(0,i.createElement)("label",null,(0,i.createElement)("em",null,"Talk:"),(0,i.createElement)(o.__experimentalLinkControl,{value:k,onChange:e=>{a({talk_link:e})},settings:[]})),(0,i.createElement)("label",null,(0,i.createElement)("em",null,"Slides:"),(0,i.createElement)(o.__experimentalLinkControl,{value:d,onChange:e=>{a({slide_link:e})},settings:[]})),(0,i.createElement)("label",null,(0,i.createElement)("em",null,"Video:"),(0,i.createElement)(o.__experimentalLinkControl,{value:p,onChange:e=>{a({video_link:e})},settings:[]}))),!l&&(0,i.createElement)("div",{className:"block-talk-links"},(0,i.createElement)(r.ButtonGroup,{className:"block-talk-button-group"},k.url&&(0,i.createElement)(r.Button,{href:k.url,variant:"primary",icon:"tickets",className:"block-talk-button"},k.title),d.url&&(0,i.createElement)(r.Button,{href:d.url,variant:"primary",icon:"slides",className:"block-talk-button"},d.title),p.url&&(0,i.createElement)(r.Button,{href:p.url,variant:"primary",icon:"video-alt",className:"block-talk-button"},p.title)))),(0,i.createElement)("div",{className:"block-talk-image-wrap"},!l&&b.url&&(0,i.createElement)("img",{src:b.url,className:"block-talk-image",alt:m+" talk thumbanil"}),!l&&!b.url&&(0,i.createElement)(r.Icon,{icon:"megaphone",size:"200",className:"block-talk-image"}),l&&(0,i.createElement)(o.MediaUploadCheck,null,(0,i.createElement)(o.MediaUpload,{allowedTypes:["image"],value:b.id,onSelect:g,render:e=>{let{open:l}=e;return(0,i.createElement)(r.Button,{isDefault:!0,isLarge:!0,className:b.id?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:l,icon:b.id?"":"format-image",title:b.id?(0,n.__)("Image Preview","evans-block-theme"):(0,n.__)("Set Image","evans-block-theme")},b.id?(0,i.createElement)("img",{src:b.url,className:"block-talk-image",alt:m+" talk thumbanil"}):(0,n.__)("Set Image","evans-block-theme"))}})),l&&b.id&&(0,i.createElement)(o.MediaUploadCheck,null,(0,i.createElement)(o.MediaUpload,{allowedTypes:["image"],value:b.id,onSelect:g,render:e=>{let{open:l}=e;return(0,i.createElement)(r.Button,{isDefault:!0,isLarge:!0,className:"block-talk-image-replace",onClick:l,icon:"edit",title:(0,n.__)("Replace Image","evans-block-theme")})}}),(0,i.createElement)(r.Button,{isLarge:!0,isDestructive:!0,className:"block-talk-image-remove",onClick:()=>{a({image:{}})},icon:"trash",title:(0,n.__)("Remove image","evans-block-theme")}))))))},save:()=>null});var m=JSON.parse('{"apiVersion":2,"title":"Skills","description":"Block for resume skills","text-domain":"evans-block-theme","name":"evans-block-theme/skills","icon":"star-half","category":"evans-block-theme","attributes":{"label":{"type":"string"},"level":{"type":"string"}},"supports":{"html":false},"example":false,"editorScript":"file:../../build/editor-scripts.js","editorStyle":"file:../../build/editor-styles.css"}'),u=t.t(m,2);(0,a.registerBlockType)(m,{...u,edit:e=>{let{isSelected:l,attributes:t,setAttributes:a}=e;const c=(0,o.useBlockProps)({className:"block-skills is-style-resume_skills"}),{label:s,level:m}=t;return(0,i.createElement)(i.Fragment,null,(0,i.createElement)("ul",c,(0,i.createElement)("li",{className:"block-skills-inner"},(l||s)&&(0,i.createElement)(o.RichText,{placeholder:(0,n.__)("Label text","evans-block-theme"),value:s,onChange:e=>{a({label:e})},tagName:"strong",allowedFormats:[],className:"block-skills-label"}),l&&(0,i.createElement)(r.SelectControl,{value:m,className:"block-skills-level block-skills-level-select",options:[{label:"★★★★★",value:"★★★★★"},{label:"★★★★☆",value:"★★★★☆"},{label:"★★★☆☆",value:"★★★☆☆"},{label:"★★☆☆☆",value:"★★☆☆☆"},{label:"★☆☆☆☆",value:"★☆☆☆☆"}],onChange:e=>{a({level:e})}}),!l&&(0,i.createElement)("em",{className:"block-skills-level"},m))))},save:()=>null})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,n),i.exports}l=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"==typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"==typeof t.then)return t}var i=Object.create(null);n.r(i);var o={};e=e||[null,l({}),l([]),l(l)];for(var r=2&a&&t;"object"==typeof r&&!~e.indexOf(r);r=l(r))Object.getOwnPropertyNames(r).forEach((function(e){o[e]=function(){return t[e]}}));return o.default=function(){return t},n.d(i,o),i},n.d=function(e,l){for(var t in l)n.o(l,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})},n.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(876)}();