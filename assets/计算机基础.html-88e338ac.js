import{_ as e,p as a,q as t,a1 as c}from"./framework-2c66b6ab.js";const s={},i=c('<h2 id="_1-cpu-的结构及工作原理" tabindex="-1"><a class="header-anchor" href="#_1-cpu-的结构及工作原理" aria-hidden="true">#</a> 1. Cpu 的结构及工作原理</h2><h3 id="进程-process" tabindex="-1"><a class="header-anchor" href="#进程-process" aria-hidden="true">#</a> 进程（Process)</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>进程是一个具有一定独立功能的程序在一个数据集上的一次动态执行的过程，是操作系统进行资源分配和调度的一个独立单位，是应用程序运行的载体。进程是一种抽象的概念，从来没有统一的标准定义。</p></div><h3 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在早期的操作系统中并没有线程的概念，进程是能拥有资源和独立运行的最小单位，也是程序执行的最小单位。任务调度采用的是时间片轮转的抢占式调度方式，而进程是任务调度的最小单位，每个进程有各自独立的一块内存，使得各个进程之间内存地址相互隔离。</p></div><h3 id="协程" tabindex="-1"><a class="header-anchor" href="#协程" aria-hidden="true">#</a> 协程</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>协程，英文Coroutines，是一种基于线程之上，但又比线程更加轻量级的存在，这种由程序员自己写程序来管理的轻量级线程叫做『用户空间线程』，具有对内核来说不可见的特性。</p></div>',7),r=[i];function n(o,d){return a(),t("div",null,r)}const p=e(s,[["render",n],["__file","计算机基础.html.vue"]]);export{p as default};
