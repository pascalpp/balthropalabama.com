<script lang="ts">
  import { onMount } from 'svelte';

  export let paused = false;

  const slides = [
    ['/lib/explode-stills/explode-stills-b0.jpg', '/lib/explode-stills/explode-stills-b1.jpg'],
    ['/lib/explode-stills/explode-stills-a0.jpg', '/lib/explode-stills/explode-stills-a1.jpg'],
    ['/lib/explode-stills/explode-stills-c0.jpg', '/lib/explode-stills/explode-stills-c1.jpg'],
    ['/lib/explode-stills/explode-stills-e0.jpg', '/lib/explode-stills/explode-stills-e1.jpg'],
    ['/lib/explode-stills/explode-stills-d0.jpg', '/lib/explode-stills/explode-stills-d1.jpg'],
    ['/lib/explode-stills/explode-stills-k0.jpg', '/lib/explode-stills/explode-stills-k1.jpg'],
    ['/lib/explode-stills/explode-stills-f0.jpg', '/lib/explode-stills/explode-stills-f1.jpg'],
    ['/lib/explode-stills/explode-stills-g0.jpg', '/lib/explode-stills/explode-stills-g1.jpg'],
    ['/lib/explode-stills/explode-stills-h0.jpg', '/lib/explode-stills/explode-stills-h1.jpg'],
    ['/lib/explode-stills/explode-stills-i0.jpg', '/lib/explode-stills/explode-stills-i1.jpg'],
    ['/lib/explode-stills/explode-stills-l0.jpg', '/lib/explode-stills/explode-stills-l1.jpg'],
    ['/lib/explode-stills/explode-stills-j0.jpg', '/lib/explode-stills/explode-stills-j1.jpg'],
    ['/lib/explode-stills/explode-stills-babbie0.jpg', '/lib/explode-stills/explode-stills-babbie1.jpg'],
    ['/lib/explode-stills/explode-stills-benton0.jpg', '/lib/explode-stills/explode-stills-benton1.jpg'],
    ['/lib/explode-stills/explode-stills-clanton0.jpg', '/lib/explode-stills/explode-stills-clanton1.jpg'],
    ['/lib/explode-stills/explode-stills-douglas0.jpg', '/lib/explode-stills/explode-stills-douglas1.jpg'],
    ['/lib/explode-stills/explode-stills-elba0.jpg', '/lib/explode-stills/explode-stills-elba1.jpg'],
    ['/lib/explode-stills/explode-stills-elmore0.jpg', '/lib/explode-stills/explode-stills-elmore1.jpg'],
    ['/lib/explode-stills/explode-stills-florence0.jpg', '/lib/explode-stills/explode-stills-florence1.jpg'],
    ['/lib/explode-stills/explode-stills-georgiana0.jpg', '/lib/explode-stills/explode-stills-georgiana1.jpg'],
    ['/lib/explode-stills/explode-stills-grace0.jpg', '/lib/explode-stills/explode-stills-grace1.jpg'],
    ['/lib/explode-stills/explode-stills-grant0.jpg', '/lib/explode-stills/explode-stills-grant1.jpg'],
    ['/lib/explode-stills/explode-stills-jemison0.jpg', '/lib/explode-stills/explode-stills-jemison1.jpg'],
    ['/lib/explode-stills/explode-stills-luverne0.jpg', '/lib/explode-stills/explode-stills-luverne1.jpg'],
    ['/lib/explode-stills/explode-stills-smurf0.jpg', '/lib/explode-stills/explode-stills-smurf1.jpg'],
  ];

  let slideInterval: number | undefined = undefined;
  let frameInterval: number | undefined = undefined;
  let slideIndex = 0;
  let frameIndex = 0;

  $: slide = slides[slideIndex];
  $: if (paused) {
    stopSlideInterval();
  } else {
    startSlideInterval();
  }

  function nextFrame() {
    frameIndex++;
    if (frameIndex >= slide.length) frameIndex = 0;
    const frameSrc = slide[frameIndex];
    const img = document.getElementById('slide') as HTMLImageElement;
    img.src = frameSrc;
  }

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
  }

  function startFrameInterval() {
    clearInterval(frameInterval);
    frameInterval = window.setInterval(nextFrame, 100);
  }
  function stopFrameInterval() {
    clearInterval(frameInterval);
  }

  function startSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = window.setInterval(nextSlide, 1800);
  }
  function stopSlideInterval() {
    clearInterval(slideInterval);
  }

  function startSlideshow() {
    startFrameInterval();
    startSlideInterval();
  }
  function stopSlideshow() {
    stopFrameInterval();
    stopSlideInterval();
  }

  onMount(() => {
    startSlideshow();

    return () => {
      stopSlideshow();
    };
  });
</script>

<div class="slideshow">
  <img src="/lib/explode-stills/pixel.gif" width="504" height="360" alt="slideshow" id="slide" />
</div>

<style lang="less">
  .slideshow {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 10px black;
      z-index: 1;
    }
  }

  img {
    width: 504px;
    height: 360px;
  }
</style>
