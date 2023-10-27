import{_ as e,o as i,c as o,O as s}from"./chunks/framework.43781440.js";const u=JSON.parse('{"title":"KernelSU 模块与 Magisk 的差异","description":"","frontmatter":{},"headers":[],"relativePath":"zh_CN/guide/difference-with-magisk.md","filePath":"zh_CN/guide/difference-with-magisk.md"}'),l={name:"zh_CN/guide/difference-with-magisk.md"},a=s('<h1 id="title" tabindex="-1">KernelSU 模块与 Magisk 的差异 <a class="header-anchor" href="#title" aria-label="Permalink to &quot;KernelSU 模块与 Magisk 的差异 {#title}&quot;">​</a></h1><p>虽然 KernelSU 模块与 Magisk 模块有很多相似之处，但由于它们的实现机制完全不同，因此不可避免地会有一些差异；如果你希望你的模块能同时在 Magisk 与 KernelSU 中运行，那么你必须了解这些差异。</p><h2 id="similarities" tabindex="-1">相同之处 <a class="header-anchor" href="#similarities" aria-label="Permalink to &quot;相同之处 {#similarities}&quot;">​</a></h2><ul><li>模块文件格式: 都以 zip 的方式组织模块，并且模块的格式几乎相同</li><li>模块安装目录: 都在 <code>/data/adb/modules</code></li><li>systemless: 都支持通过模块的形式以 systemless 修改 /system</li><li><code>post-fs-data.sh</code>: 执行时机完全一致，语义也完全一致</li><li><code>service.sh</code>: 执行时机完全一致，语义也完全一致</li><li><code>system.prop</code>: 完全相同</li><li><code>sepolicy.rule</code>: 完全相同</li><li>BusyBox：脚本都在 BusyBox 中以“独立模式”运行</li></ul><h2 id="differences" tabindex="-1">不同之处 <a class="header-anchor" href="#differences" aria-label="Permalink to &quot;不同之处 {#differences}&quot;">​</a></h2><p>在了解不同之处之前，你需要知道如何区分你的模块是运行在 KernelSU 还是运行在 Magisk 之中；在所有你可以运行模块脚本的地方（<code>customize.sh</code>, <code>post-fs-data.sh</code>, <code>service.sh</code>)，你都可以通过环境变量<code>KSU</code> 来区分，在 KernelSU 中，这个环境变量将被设置为 <code>true</code>。</p><p>以下是一些不同之处：</p><ol><li>KernelSU 的模块不支持在 Recovery 中安装。</li><li>KernelSU 的模块没有内置的 Zygisk 支持（但你可以通过 <a href="https://github.com/Dr-TSNG/ZygiskOnKernelSU" target="_blank" rel="noreferrer">ZygiskOnKernelSU</a> 来使用 Zygisk 模块）。</li><li>KernelSU 模块替换或者删除文件与 Magisk 完全不同。KernelSU 不支持 <code>.replace</code> 方式，相反，你需要通过 <code>mknod filename c 0 0</code> 创建同名文件夹来删除对应文件。</li><li>BusyBox 的目录不同；KernelSU 内置的 BusyBox 在 <code>/data/adb/ksu/bin/busybox</code> 而 Magisk 在 <code>/data/adb/magisk/busybox</code>；<strong>注意此为 KernelSU 内部行为，未来可能会更改！</strong></li><li>KernelSU 不支持 <code>.replace</code> 文件；但 KernelSU 支持 <code>REPLACE</code> 和 <code>REMOVE</code> 变量。</li><li>KernelSU 新增了一种脚本 <code>boot-completed.sh</code>，以便在 Android 系统启动后运行某些任务。</li><li>KernelSU 新增了一种脚本 <code>post-mount.sh</code>，以便在 Overlayfs 挂载后运行某些任务。</li></ol>',8),d=[a];function r(t,c,n,h,f,_){return i(),o("div",null,d)}const p=e(l,[["render",r]]);export{u as __pageData,p as default};
