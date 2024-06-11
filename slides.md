---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
fonts:
  # basically the text
  sans: 'Berkeley Mono,Robot'
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
  # like font-family in css, you can use `,` to separate multiple fonts for fallback
  local: Berkeley Mono
  # mark 'Helvetica Neue' as local font
---

# JUST Health Data Labs

Based on Just v Data Lab bootcamp: https://colab.research.google.com/github/onefact/datathinking.org-codespace/blob/main/notebooks/princeton-university/week-1-visualizing-33-million-phone-calls-in-new-york-city.ipynb

-> https://motherduck.com/blog/introducing-column-explorer/

Footnote:

Health data: https://digitalpublicgoods.net/AI-CoP-Discussion-Paper.pdf

https://github.com/DPGAlliance/DPG-Standard/issues/148#issuecomment-1517850203

---

Capital flows:
https://www.are.na/jaan-li/network-9j9au-o8gtc

---

https://www.aldipricemap.com/

---

https://motherduckcommunity.slack.com/archives/C059BKPAPC5/p1717864545260129

```
Hi Jaan:
There's a lot to discuss here, however generally I agree with the possibility of misaligned incentives. Cloud data companies know there a gravitational force to data due to joins, and many of the easy paths bias toward entirely remote data, transforms, compute. Even the asymmetry of AWS egress/ingress costs shows this bias. To be fair this is often efficient, minimizing data transport. However I think you can see the misalignment in the customer pressure to get data lakes as first class peers to internal tables, and in the workflow of ad hoc notebooks, where roundtripping to local is a common practice for it's flexibility.
We think there's a lot of potential to making it much easier to mix and match local and remote sources in one query, and in easier roundtripping. It certainly makes it easier for my ETL jobs to INSERT INTO instead of always dropping into S3, for example.
Let me discuss internally and come up with more specific response with examples. It's a busy week here with our GA launch, but maybe this is worth a call with you to brainstorm a bit more.
```

---


# Data centers

https://www.datacentermap.com/
https://www.dutchdatacenters.nl/en/map/
https://baxtel.com/map
https://map.datacente.rs/

Twitter: @thejaan
Email: jaan@onefact.org

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<!-- make a page break next -->
---


# When to use Lightning?

Lightning makes things easier and abstracts the details. In research (or in edge cases), you might need to go deeper. For example, `torch.compile`, custom metrics, etc.

- 📝 **Incentives** - compete with AnyScale, Ray, SkyPilot (multi-cloud, recommended)
- 🚀 **Risk** - Need to be careful relying on venture capital-backed code (ideal customer profile may be different, may need to pivot, short runway and high return expectations from LPs)
- **🔍 Research** - usually need to use algorithms like HyperBand and use fully-sharded data parallel models for best performance. Supported in Ray and SkyPilot, work-in-progress for Lightning.
- **🔥 Time Horizon** - behavior change is hard. Your future self will thank you but need to learn by experience when to use a shortcut / abstraction versus when to use the details. For me, I need to see the details almost always (not assembly/CUDA regularly though!)

---
transition: slide-up
level: 2
---
# Incentives

"Writing a training loop is not that hard; why use a library?"

* Amazon Web Services, Google Cloud Platform, Microsoft Azure - all competing for mindshare
* If you reduce your cognitive load, you give up mindshare in exchange for "efficiency".
* It is up to you to decide when this trade-off is worth it.
* For me, it rarely is: libraries move fast, and I need to understand the details to be able to debug and optimize.

<br>
<br>

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->
<!--
<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
transition: slide-up
level: 2
---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel, [learn more](https://sli.dev/guide/navigation.html)

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>right</kbd> / <kbd>space</kbd>| next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
  alt=""
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">Here!</p>
