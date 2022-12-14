import{_ as n,p as s,q as a,a1 as t}from"./framework-2c66b6ab.js";const p={},e=t(`<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 解构赋值，还是赋值的表达式，只不过对‘=’的左右两侧格式上有些许要求，通过解析‘=’右边的数据来为左侧声明</span>
    <span class="token comment">// 的变量赋值，js支持的数据类型基本都可以解构赋值，但通常值使用数组和对象的解构赋值</span>

    <span class="token comment">// 1. 数组的解构赋值</span>
    <span class="token comment">// 形势上：var/let/const [name1,name2,name3...] = [value1,value2value3...]</span>
    <span class="token comment">// 例如：声明 三个变量a，b，c，分别赋值为10，20，30：</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// let a =10;</span>
        <span class="token comment">// let b =20;</span>
        <span class="token comment">// let c =30;</span>

        <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2. 对象的解构赋值</span>
    <span class="token comment">// 形式上;let {a,b} = {a:10,b:20};</span>
    <span class="token comment">// 对象的解构赋值，无序，根据对应的key与变量名去为变量赋值，当变量名不存在与对象的key中，那末解构失败，不会为声明的变量赋值</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// let {a,b} = {a:10,b:20};</span>

        <span class="token comment">// 另外一种写法 可以使变量名与obj中的key不相同</span>
        <span class="token comment">// let {key1:a,key2:b} = {key1:10,key2:20};</span>

        <span class="token comment">//用途</span>
        <span class="token comment">// 从json数据中取值</span>
        <span class="token keyword">let</span> data<span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">classID</span><span class="token operator">:</span><span class="token string">&#39;xah&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">students</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">001</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lala&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">002</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;haha&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token punctuation">{</span>id<span class="token punctuation">,</span>name<span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">.</span>students<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 交换变量的值</span>
        <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j  <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 字符串的拓展</span>
    <span class="token comment">// 1. 遍历器 for..of....循环</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;==this is ECMAScripts&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 循环变量x表示被遍历值value 不是index</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.模板字符串(\`\`);</span>
<span class="token comment">// 这是es6 新增加的</span>
<span class="token comment">// 1.支持字符串中换行缩进，保留字符串原有格式</span>

<span class="token comment">// // 2. 支持字符串内解析变量(需要将变量使用\${} 进行包裹)</span>
<span class="token comment">// let [r,g,b] =[rn(),rn(),rn()];</span>
<span class="token comment">//   let color = \`rgb(\${r},\${g},\${b})\`;</span>
<span class="token comment">//   // 4. 支持表达式的运算</span>
<span class="token comment">//   let sumstr = \`3 * 4 = \${3*4}\`;</span>
<span class="token comment">//   console.log(sumstr);</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">9</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>i <span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> con <span class="token operator">=</span>  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token operator">*</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
            document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>con<span class="token operator">+</span><span class="token string">&#39;&amp;emsp;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// es6 对String.prototype的拓展</span>
<span class="token comment">// includes(),startsWidth(),endsWidth()</span>
<span class="token comment">//查询指定字符串是否包含指定字符。如果包含返回true，否则返回false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;bcd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//查询指定字符串是否以指定字符结尾</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">endsWidth</span><span class="token punctuation">(</span><span class="token string">&#39;S&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 新增方法</span>
<span class="token comment">// repeat() // 返回给一个重复后的新字符串</span>
<span class="token comment">// 新增方法</span>
<span class="token comment">// padStart(),padEnd();补足字符串长度的方法</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
    <span class="token comment">//使用对象的解构赋值从Math中提取方法</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>max<span class="token punctuation">,</span>min<span class="token punctuation">,</span>round<span class="token punctuation">,</span>random<span class="token punctuation">,</span>abs<span class="token punctuation">,</span>pow<span class="token punctuation">,</span>sqrt<span class="token punctuation">}</span> <span class="token operator">=</span> Math<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// Number.isNaN()用来判断指定数值是否为NaN</span>
    <span class="token comment">// let n5 = false;</span>
    <span class="token comment">// console.log(n5 == NaN);</span>
    <span class="token comment">// console.log(Number.isNaN(n5));</span>
    <span class="token comment">// 将parseInt()以及oarsefloat()方法添加到Number构造函数上</span>
    <span class="token comment">//这样做的目的是减少全局的方法，做到模块化</span>
    <span class="token comment">// hypot();</span>
    <span class="token comment">// 函数拓展</span>
    <span class="token comment">// 1. 允许为函数参数设置默认值</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 为函数参数设置默认值</span>
        <span class="token comment">// function sum(x=0,y=0){</span>
        <span class="token comment">//     console.log(x+y)</span>
        <span class="token comment">// }</span>
        <span class="token comment">// sum();</span>
        <span class="token comment">// 默认参数一定要放在参数列表的最后，否则函数调用结果异常</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2， rest参数，在函数体内部，得到参数列表，功能和arguments相似</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// function sum(){</span>
        <span class="token comment">//     var s = 0;</span>
        <span class="token comment">//     // ES5使用arguments获取参数列表</span>
        <span class="token comment">//     for (var i = 0; i &lt; arguments.length; i++) {</span>
        <span class="token comment">//         s+=arguments[i];</span>
        <span class="token comment">//</span>
        <span class="token comment">//     }</span>
        <span class="token comment">//     console.log(s)</span>
        <span class="token comment">// }</span>
        <span class="token comment">// sum(1,2,2,3)</span>
        <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>rest</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rest<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                s <span class="token operator">+=</span> rest<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>
        <span class="token comment">//声明：rest参数功能上和grguments参数一样都是函数内获取参数列表，但是底层实现上，rest参数的工作效率要远远高于grguments参数，所以，今后尽量使用rest参数。</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3. 箭头函数</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 箭头函数对函数的申明方式进行的改变</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// let _this = this;</span>
            <span class="token comment">// setTimeout(function(){</span>
            <span class="token comment">//     _this.innerHTML = &#39;成功&#39;</span>
            <span class="token comment">// },200)</span>

            <span class="token comment">// 新语法，箭头函数</span>
            <span class="token comment">// 箭头函数不会改变函数体内this的指向，this永远指向箭头函数声明时所在作用域的this</span>
            <span class="token comment">// 注意：一定不要将箭头函数写成元素的事件处理函数。</span>
            <span class="token comment">// 3.不要写成构造函数，无法通过new 得到对象</span>
            <span class="token comment">// 3.箭头函数无法使用arguments对象，需要使用rest</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;成功&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token comment">// 在不涉及this指向的问题上，箭头函数能一定程度上简化函数声明的代码</span>
            <span class="token comment">// function ptint(x){</span>
            <span class="token comment">//     console.log(x);</span>
            <span class="token comment">// }</span>
            <span class="token comment">// let print = x=&gt; x;</span>
            <span class="token comment">// print(123);</span>
            <span class="token comment">// 0 ，箭头函数声明不需要function关键字</span>
            <span class="token comment">// 箭头函数可以省略的部分：</span>
            <span class="token comment">// 1. 参数列表：当参数只有一个的时候，（）是可以省略的，没有参数或者参数大于1 那么（）就必须存在。</span>
            <span class="token comment">// 2。 函数体内容只有一个表达式或一行代码时{}可以省略</span>
            <span class="token comment">// 3. 返回值，返回值包含形式参数，那末return可以省略。</span>
            <span class="token keyword">let</span>  <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> count <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token operator">++</span>count<span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token comment">//函数也存在length属性..函数的参数列表长度(不包含默认值的参数)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token comment">//2</span>
            <span class="token comment">// function rn(){};</span>
            <span class="token comment">// window[fn.name]();/</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 拓展运算符</span>
        <span class="token comment">// 展开啊数组</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;abcdef&#39;</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">,</span>f</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">,</span>f<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// fu(...arrs)/</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 应用场景</span>
        <span class="token comment">// /1. 拷贝数组(深拷贝);</span>
        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> b <span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 合并数组</span>
        <span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">,</span><span class="token operator">...</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// Array.prototype.find()</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            a<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token operator">%</span><span class="token number">11</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// indexOf方法有两个缺点,一是不够语义化,</span>

        <span class="token comment">// let a = [0,[1,[2,3,[4,5]]]]</span>
        <span class="token comment">// let b = a.flat(4);</span>
        <span class="token comment">// console.log(b);</span>

        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> uname <span class="token operator">=</span> <span class="token string">&#39;小王&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
                uname<span class="token punctuation">,</span>
                age<span class="token punctuation">,</span>
                <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 属性名表达式</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token string">&#39;uname&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span><span class="token string">&#39;小王&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 3. 对象属性的描述枚举</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;小王&#39;</span><span class="token punctuation">}</span>
            Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 4. super 箭头函数声明不需要function关键字</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 只能在对象的方法中使用.在对象方法外报错.指向调用方法的对象的原型</span>
            <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>type <span class="token operator">=</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//原型上的属性</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//拓展运算符</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token comment">// Object.assign</span>
        <span class="token comment">// Class语法:es6 中声明类的方式,本质上还是构造函数</span>
        <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
            <span class="token comment">// 构造方法</span>
            <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// console.log(s1.constructor)</span>
        <span class="token comment">// 与构造函数的区别,语法上更加严谨,class声明的类功能就是创建对象,必须配合new使用,单数构造函数写法,不使用new依然会执行,不会报错</span>
        <span class="token comment">// 继承:extends实现继承 原型</span>
        <span class="token keyword">class</span> <span class="token class-name">middleStudent</span> <span class="token keyword">extends</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
            <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 需要先调用父类的构造方法</span>
                <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//构造</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>time <span class="token operator">=</span> <span class="token string">&#39;青春期&#39;</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>

            <span class="token function">favorite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我是一个初中生</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> ms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">middleStudent</span><span class="token punctuation">(</span><span class="token string">&#39;小张&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};
