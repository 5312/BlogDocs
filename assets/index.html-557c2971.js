import{_ as s,p as a,q as e,a1 as c}from"./framework-2c66b6ab.js";const r="/BlogDocs/images/Blog20200409002410.png",t="/BlogDocs/images/Blog20200409002646.png",i="/BlogDocs/images/Blog20200409002931.png",l="/BlogDocs/images/Blog20200409003038.png",o={},n=c('<h1 id="自定义组件的不同样式" tabindex="-1"><a class="header-anchor" href="#自定义组件的不同样式" aria-hidden="true">#</a> 自定义组件的不同样式</h1><p>在微信小程序中使用自定义组件时，在不同的页面显示不同的css样式</p><h3 id="一-在组件js文件中" tabindex="-1"><a class="header-anchor" href="#一-在组件js文件中" aria-hidden="true">#</a> 一，在组件js文件中</h3><p><img src="'+r+'" alt="组件"></p><p>增加externalClasses:[&#39;className&#39;] 字段 ，填入class名</p><h3 id="二-在组件页面中加入class名" tabindex="-1"><a class="header-anchor" href="#二-在组件页面中加入class名" aria-hidden="true">#</a> 二，在组件页面中加入class名</h3><p><img src="'+t+'" alt="class"></p><p>在需要更改的标签中加入要定义class名</p><h3 id="三-在使用的页面加入属性class名" tabindex="-1"><a class="header-anchor" href="#三-在使用的页面加入属性class名" aria-hidden="true">#</a> 三，在使用的页面加入属性class名</h3><p><img src="'+i+'" alt=""></p><h3 id="四-更改本页的class样式" tabindex="-1"><a class="header-anchor" href="#四-更改本页的class样式" aria-hidden="true">#</a> 四，更改本页的class样式</h3><p><img src="'+l+'" alt=""></p>',12),h=[n];function d(p,_){return a(),e("div",null,h)}const m=s(o,[["render",d],["__file","index.html.vue"]]);export{m as default};