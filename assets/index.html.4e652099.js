import{_ as n,o as s,c as a,a as t}from"./app.dd7ce90b.js";const p={},e=t(`<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token comment">// \u89E3\u6784\u8D4B\u503C\uFF0C\u8FD8\u662F\u8D4B\u503C\u7684\u8868\u8FBE\u5F0F\uFF0C\u53EA\u4E0D\u8FC7\u5BF9\u2018=\u2019\u7684\u5DE6\u53F3\u4E24\u4FA7\u683C\u5F0F\u4E0A\u6709\u4E9B\u8BB8\u8981\u6C42\uFF0C\u901A\u8FC7\u89E3\u6790\u2018=\u2019\u53F3\u8FB9\u7684\u6570\u636E\u6765\u4E3A\u5DE6\u4FA7\u58F0\u660E</span>
    <span class="token comment">// \u7684\u53D8\u91CF\u8D4B\u503C\uFF0Cjs\u652F\u6301\u7684\u6570\u636E\u7C7B\u578B\u57FA\u672C\u90FD\u53EF\u4EE5\u89E3\u6784\u8D4B\u503C\uFF0C\u4F46\u901A\u5E38\u503C\u4F7F\u7528\u6570\u7EC4\u548C\u5BF9\u8C61\u7684\u89E3\u6784\u8D4B\u503C</span>

    <span class="token comment">// 1. \u6570\u7EC4\u7684\u89E3\u6784\u8D4B\u503C</span>
    <span class="token comment">// \u5F62\u52BF\u4E0A\uFF1Avar/let/const [name1,name2,name3...] = [value1,value2value3...]</span>
    <span class="token comment">// \u4F8B\u5982\uFF1A\u58F0\u660E \u4E09\u4E2A\u53D8\u91CFa\uFF0Cb\uFF0Cc\uFF0C\u5206\u522B\u8D4B\u503C\u4E3A10\uFF0C20\uFF0C30\uFF1A</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// let a =10;</span>
        <span class="token comment">// let b =20;</span>
        <span class="token comment">// let c =30;</span>

        <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2. \u5BF9\u8C61\u7684\u89E3\u6784\u8D4B\u503C</span>
    <span class="token comment">// \u5F62\u5F0F\u4E0A;let {a,b} = {a:10,b:20};</span>
    <span class="token comment">// \u5BF9\u8C61\u7684\u89E3\u6784\u8D4B\u503C\uFF0C\u65E0\u5E8F\uFF0C\u6839\u636E\u5BF9\u5E94\u7684key\u4E0E\u53D8\u91CF\u540D\u53BB\u4E3A\u53D8\u91CF\u8D4B\u503C\uFF0C\u5F53\u53D8\u91CF\u540D\u4E0D\u5B58\u5728\u4E0E\u5BF9\u8C61\u7684key\u4E2D\uFF0C\u90A3\u672B\u89E3\u6784\u5931\u8D25\uFF0C\u4E0D\u4F1A\u4E3A\u58F0\u660E\u7684\u53D8\u91CF\u8D4B\u503C</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// let {a,b} = {a:10,b:20};</span>

        <span class="token comment">// \u53E6\u5916\u4E00\u79CD\u5199\u6CD5 \u53EF\u4EE5\u4F7F\u53D8\u91CF\u540D\u4E0Eobj\u4E2D\u7684key\u4E0D\u76F8\u540C</span>
        <span class="token comment">// let {key1:a,key2:b} = {key1:10,key2:20};</span>

        <span class="token comment">//\u7528\u9014</span>
        <span class="token comment">// \u4ECEjson\u6570\u636E\u4E2D\u53D6\u503C</span>
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

        <span class="token comment">// 2. \u4EA4\u6362\u53D8\u91CF\u7684\u503C</span>
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

    <span class="token comment">// \u5B57\u7B26\u4E32\u7684\u62D3\u5C55</span>
    <span class="token comment">// 1. \u904D\u5386\u5668 for..of....\u5FAA\u73AF</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;==this is ECMAScripts&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5FAA\u73AF\u53D8\u91CFx\u8868\u793A\u88AB\u904D\u5386\u503Cvalue \u4E0D\u662Findex</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.\u6A21\u677F\u5B57\u7B26\u4E32(\`\`);</span>
<span class="token comment">// \u8FD9\u662Fes6 \u65B0\u589E\u52A0\u7684</span>
<span class="token comment">// 1.\u652F\u6301\u5B57\u7B26\u4E32\u4E2D\u6362\u884C\u7F29\u8FDB\uFF0C\u4FDD\u7559\u5B57\u7B26\u4E32\u539F\u6709\u683C\u5F0F</span>

<span class="token comment">// // 2. \u652F\u6301\u5B57\u7B26\u4E32\u5185\u89E3\u6790\u53D8\u91CF(\u9700\u8981\u5C06\u53D8\u91CF\u4F7F\u7528\${} \u8FDB\u884C\u5305\u88F9)</span>
<span class="token comment">// let [r,g,b] =[rn(),rn(),rn()];</span>
<span class="token comment">//   let color = \`rgb(\${r},\${g},\${b})\`;</span>
<span class="token comment">//   // 4. \u652F\u6301\u8868\u8FBE\u5F0F\u7684\u8FD0\u7B97</span>
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
<span class="token comment">// es6 \u5BF9String.prototype\u7684\u62D3\u5C55</span>
<span class="token comment">// includes(),startsWidth(),endsWidth()</span>
<span class="token comment">//\u67E5\u8BE2\u6307\u5B9A\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u6307\u5B9A\u5B57\u7B26\u3002\u5982\u679C\u5305\u542B\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;bcd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u67E5\u8BE2\u6307\u5B9A\u5B57\u7B26\u4E32\u662F\u5426\u4EE5\u6307\u5B9A\u5B57\u7B26\u7ED3\u5C3E</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">endsWidth</span><span class="token punctuation">(</span><span class="token string">&#39;S&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// \u65B0\u589E\u65B9\u6CD5</span>
<span class="token comment">// repeat() // \u8FD4\u56DE\u7ED9\u4E00\u4E2A\u91CD\u590D\u540E\u7684\u65B0\u5B57\u7B26\u4E32</span>
<span class="token comment">// \u65B0\u589E\u65B9\u6CD5</span>
<span class="token comment">// padStart(),padEnd();\u8865\u8DB3\u5B57\u7B26\u4E32\u957F\u5EA6\u7684\u65B9\u6CD5</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u4F7F\u7528\u5BF9\u8C61\u7684\u89E3\u6784\u8D4B\u503C\u4ECEMath\u4E2D\u63D0\u53D6\u65B9\u6CD5</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>max<span class="token punctuation">,</span>min<span class="token punctuation">,</span>round<span class="token punctuation">,</span>random<span class="token punctuation">,</span>abs<span class="token punctuation">,</span>pow<span class="token punctuation">,</span>sqrt<span class="token punctuation">}</span> <span class="token operator">=</span> Math<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token comment">// Number.isNaN()\u7528\u6765\u5224\u65AD\u6307\u5B9A\u6570\u503C\u662F\u5426\u4E3ANaN</span>
    <span class="token comment">// let n5 = false;</span>
    <span class="token comment">// console.log(n5 == NaN);</span>
    <span class="token comment">// console.log(Number.isNaN(n5));</span>
    <span class="token comment">// \u5C06parseInt()\u4EE5\u53CAoarsefloat()\u65B9\u6CD5\u6DFB\u52A0\u5230Number\u6784\u9020\u51FD\u6570\u4E0A</span>
    <span class="token comment">//\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u51CF\u5C11\u5168\u5C40\u7684\u65B9\u6CD5\uFF0C\u505A\u5230\u6A21\u5757\u5316</span>
    <span class="token comment">// hypot();</span>
    <span class="token comment">// \u51FD\u6570\u62D3\u5C55</span>
    <span class="token comment">// 1. \u5141\u8BB8\u4E3A\u51FD\u6570\u53C2\u6570\u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u4E3A\u51FD\u6570\u53C2\u6570\u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>
        <span class="token comment">// function sum(x=0,y=0){</span>
        <span class="token comment">//     console.log(x+y)</span>
        <span class="token comment">// }</span>
        <span class="token comment">// sum();</span>
        <span class="token comment">// \u9ED8\u8BA4\u53C2\u6570\u4E00\u5B9A\u8981\u653E\u5728\u53C2\u6570\u5217\u8868\u7684\u6700\u540E\uFF0C\u5426\u5219\u51FD\u6570\u8C03\u7528\u7ED3\u679C\u5F02\u5E38</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2\uFF0C rest\u53C2\u6570\uFF0C\u5728\u51FD\u6570\u4F53\u5185\u90E8\uFF0C\u5F97\u5230\u53C2\u6570\u5217\u8868\uFF0C\u529F\u80FD\u548Carguments\u76F8\u4F3C</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// function sum(){</span>
        <span class="token comment">//     var s = 0;</span>
        <span class="token comment">//     // ES5\u4F7F\u7528arguments\u83B7\u53D6\u53C2\u6570\u5217\u8868</span>
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
        <span class="token comment">//\u58F0\u660E\uFF1Arest\u53C2\u6570\u529F\u80FD\u4E0A\u548Cgrguments\u53C2\u6570\u4E00\u6837\u90FD\u662F\u51FD\u6570\u5185\u83B7\u53D6\u53C2\u6570\u5217\u8868\uFF0C\u4F46\u662F\u5E95\u5C42\u5B9E\u73B0\u4E0A\uFF0Crest\u53C2\u6570\u7684\u5DE5\u4F5C\u6548\u7387\u8981\u8FDC\u8FDC\u9AD8\u4E8Egrguments\u53C2\u6570\uFF0C\u6240\u4EE5\uFF0C\u4ECA\u540E\u5C3D\u91CF\u4F7F\u7528rest\u53C2\u6570\u3002</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3. \u7BAD\u5934\u51FD\u6570</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u7BAD\u5934\u51FD\u6570\u5BF9\u51FD\u6570\u7684\u7533\u660E\u65B9\u5F0F\u8FDB\u884C\u7684\u6539\u53D8</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// let _this = this;</span>
            <span class="token comment">// setTimeout(function(){</span>
            <span class="token comment">//     _this.innerHTML = &#39;\u6210\u529F&#39;</span>
            <span class="token comment">// },200)</span>

            <span class="token comment">// \u65B0\u8BED\u6CD5\uFF0C\u7BAD\u5934\u51FD\u6570</span>
            <span class="token comment">// \u7BAD\u5934\u51FD\u6570\u4E0D\u4F1A\u6539\u53D8\u51FD\u6570\u4F53\u5185this\u7684\u6307\u5411\uFF0Cthis\u6C38\u8FDC\u6307\u5411\u7BAD\u5934\u51FD\u6570\u58F0\u660E\u65F6\u6240\u5728\u4F5C\u7528\u57DF\u7684this</span>
            <span class="token comment">// \u6CE8\u610F\uFF1A\u4E00\u5B9A\u4E0D\u8981\u5C06\u7BAD\u5934\u51FD\u6570\u5199\u6210\u5143\u7D20\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002</span>
            <span class="token comment">// 3.\u4E0D\u8981\u5199\u6210\u6784\u9020\u51FD\u6570\uFF0C\u65E0\u6CD5\u901A\u8FC7new \u5F97\u5230\u5BF9\u8C61</span>
            <span class="token comment">// 3.\u7BAD\u5934\u51FD\u6570\u65E0\u6CD5\u4F7F\u7528arguments\u5BF9\u8C61\uFF0C\u9700\u8981\u4F7F\u7528rest</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;\u6210\u529F&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token comment">// \u5728\u4E0D\u6D89\u53CAthis\u6307\u5411\u7684\u95EE\u9898\u4E0A\uFF0C\u7BAD\u5934\u51FD\u6570\u80FD\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7B80\u5316\u51FD\u6570\u58F0\u660E\u7684\u4EE3\u7801</span>
            <span class="token comment">// function ptint(x){</span>
            <span class="token comment">//     console.log(x);</span>
            <span class="token comment">// }</span>
            <span class="token comment">// let print = x=&gt; x;</span>
            <span class="token comment">// print(123);</span>
            <span class="token comment">// 0 \uFF0C\u7BAD\u5934\u51FD\u6570\u58F0\u660E\u4E0D\u9700\u8981function\u5173\u952E\u5B57</span>
            <span class="token comment">// \u7BAD\u5934\u51FD\u6570\u53EF\u4EE5\u7701\u7565\u7684\u90E8\u5206\uFF1A</span>
            <span class="token comment">// 1. \u53C2\u6570\u5217\u8868\uFF1A\u5F53\u53C2\u6570\u53EA\u6709\u4E00\u4E2A\u7684\u65F6\u5019\uFF0C\uFF08\uFF09\u662F\u53EF\u4EE5\u7701\u7565\u7684\uFF0C\u6CA1\u6709\u53C2\u6570\u6216\u8005\u53C2\u6570\u5927\u4E8E1 \u90A3\u4E48\uFF08\uFF09\u5C31\u5FC5\u987B\u5B58\u5728\u3002</span>
            <span class="token comment">// 2\u3002 \u51FD\u6570\u4F53\u5185\u5BB9\u53EA\u6709\u4E00\u4E2A\u8868\u8FBE\u5F0F\u6216\u4E00\u884C\u4EE3\u7801\u65F6{}\u53EF\u4EE5\u7701\u7565</span>
            <span class="token comment">// 3. \u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u503C\u5305\u542B\u5F62\u5F0F\u53C2\u6570\uFF0C\u90A3\u672Breturn\u53EF\u4EE5\u7701\u7565\u3002</span>
            <span class="token keyword">let</span>  <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> count <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token operator">++</span>count<span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token comment">//\u51FD\u6570\u4E5F\u5B58\u5728length\u5C5E\u6027..\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\u957F\u5EA6(\u4E0D\u5305\u542B\u9ED8\u8BA4\u503C\u7684\u53C2\u6570)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token comment">//2</span>
            <span class="token comment">// function rn(){};</span>
            <span class="token comment">// window[fn.name]();/</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u62D3\u5C55\u8FD0\u7B97\u7B26</span>
        <span class="token comment">// \u5C55\u5F00\u554A\u6570\u7EC4</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;abcdef&#39;</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">,</span>f</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">,</span>f<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// fu(...arrs)/</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u5E94\u7528\u573A\u666F</span>
        <span class="token comment">// /1. \u62F7\u8D1D\u6570\u7EC4(\u6DF1\u62F7\u8D1D);</span>
        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> b <span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5408\u5E76\u6570\u7EC4</span>
        <span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">,</span><span class="token operator">...</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// Array.prototype.find()</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            a<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token operator">%</span><span class="token number">11</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// indexOf\u65B9\u6CD5\u6709\u4E24\u4E2A\u7F3A\u70B9,\u4E00\u662F\u4E0D\u591F\u8BED\u4E49\u5316,</span>

        <span class="token comment">// let a = [0,[1,[2,3,[4,5]]]]</span>
        <span class="token comment">// let b = a.flat(4);</span>
        <span class="token comment">// console.log(b);</span>

        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> uname <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u738B&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
                uname<span class="token punctuation">,</span>
                age<span class="token punctuation">,</span>
                <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5C5E\u6027\u540D\u8868\u8FBE\u5F0F</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token string">&#39;uname&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span><span class="token string">&#39;\u5C0F\u738B&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 3. \u5BF9\u8C61\u5C5E\u6027\u7684\u63CF\u8FF0\u679A\u4E3E</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;\u5C0F\u738B&#39;</span><span class="token punctuation">}</span>
            Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 4. super \u7BAD\u5934\u51FD\u6570\u58F0\u660E\u4E0D\u9700\u8981function\u5173\u952E\u5B57</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// \u53EA\u80FD\u5728\u5BF9\u8C61\u7684\u65B9\u6CD5\u4E2D\u4F7F\u7528.\u5728\u5BF9\u8C61\u65B9\u6CD5\u5916\u62A5\u9519.\u6307\u5411\u8C03\u7528\u65B9\u6CD5\u7684\u5BF9\u8C61\u7684\u539F\u578B</span>
            <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>type <span class="token operator">=</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u539F\u578B\u4E0A\u7684\u5C5E\u6027</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u62D3\u5C55\u8FD0\u7B97\u7B26</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token comment">// Object.assign</span>
        <span class="token comment">// Class\u8BED\u6CD5:es6 \u4E2D\u58F0\u660E\u7C7B\u7684\u65B9\u5F0F,\u672C\u8D28\u4E0A\u8FD8\u662F\u6784\u9020\u51FD\u6570</span>
        <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
            <span class="token comment">// \u6784\u9020\u65B9\u6CD5</span>
            <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// console.log(s1.constructor)</span>
        <span class="token comment">// \u4E0E\u6784\u9020\u51FD\u6570\u7684\u533A\u522B,\u8BED\u6CD5\u4E0A\u66F4\u52A0\u4E25\u8C28,class\u58F0\u660E\u7684\u7C7B\u529F\u80FD\u5C31\u662F\u521B\u5EFA\u5BF9\u8C61,\u5FC5\u987B\u914D\u5408new\u4F7F\u7528,\u5355\u6570\u6784\u9020\u51FD\u6570\u5199\u6CD5,\u4E0D\u4F7F\u7528new\u4F9D\u7136\u4F1A\u6267\u884C,\u4E0D\u4F1A\u62A5\u9519</span>
        <span class="token comment">// \u7EE7\u627F:extends\u5B9E\u73B0\u7EE7\u627F \u539F\u578B</span>
        <span class="token keyword">class</span> <span class="token class-name">middleStudent</span> <span class="token keyword">extends</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
            <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// \u9700\u8981\u5148\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5</span>
                <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6784\u9020</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>time <span class="token operator">=</span> <span class="token string">&#39;\u9752\u6625\u671F&#39;</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>

            <span class="token function">favorite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u662F\u4E00\u4E2A\u521D\u4E2D\u751F</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> ms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">middleStudent</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u5F20&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};
