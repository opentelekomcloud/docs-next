"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[84787],{30876:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});s(96540);var a=s(34164),n=s(1003),r=s(17559),l=s(21312);const c=()=>(0,l.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=s(56133),o=s(51107);const g={tag:"tag_Nnez"};var u=s(74848);function h(t){let{letterEntry:e}=t;return(0,u.jsxs)("article",{children:[(0,u.jsx)(o.A,{as:"h2",id:e.letter,children:e.letter}),(0,u.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,u.jsx)("li",{className:g.tag,children:(0,u.jsx)(i.A,{...t})},t.permalink)))}),(0,u.jsx)("hr",{})]})}function d(t){let{tags:e}=t;const s=function(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}(e);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,u.jsx)(h,{letterEntry:t},t.letter)))})}var j=s(41463);function x(t){let{title:e}=t;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.be,{title:e}),(0,u.jsx)(j.A,{tag:"doc_tags_list"})]})}function m(t){let{tags:e,title:s}=t;return(0,u.jsx)(n.e3,{className:(0,a.A)(r.G.page.docsTagsListPage),children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,u.jsx)(o.A,{as:"h1",children:s}),(0,u.jsx)(d,{tags:e})]})})})})}function p(t){const e=c();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x,{...t,title:e}),(0,u.jsx)(m,{...t,title:e})]})}},56133:(t,e,s)=>{s.d(e,{A:()=>c});s(96540);var a=s(34164),n=s(28774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(74848);function c(t){let{permalink:e,label:s,count:c,description:i}=t;return(0,l.jsxs)(n.A,{href:e,title:i,className:(0,a.A)(r.tag,c?r.tagWithCount:r.tagRegular),children:[s,c&&(0,l.jsx)("span",{children:c})]})}}}]);