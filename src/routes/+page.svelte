<script lang="ts">
  import { onMount } from 'svelte';
  import './page.less';

  let mode: 'slideshow' | 'video';
  let slideshowPlaying = false;

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

  let slideshowToggle: HTMLAnchorElement;
  let slideImage: HTMLImageElement;
  let slideInterval: number | undefined = undefined;
  let slideIndex = 0;
  let frameInterval: number | undefined = undefined;
  let frameIndex = 0;

  $: slide = slides[slideIndex];

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
  function toggleSlideshow() {
    if (slideshowPlaying) {
      stopSlideInterval();
      slideshowPlaying = false;
    } else {
      startSlideInterval();
      slideshowPlaying = true;
    }
  }

  function onFrameClick() {}

  onMount(() => {
    mode = 'slideshow';
    slideshowPlaying = true;
    startSlideshow();

    return () => {
      stopSlideshow();
    };
  });
</script>

<div style="position: absolute; z-index: 1; color: white; padding: 20px;">
  {mode} - {slideshowPlaying} - {slideIndex} - {frameIndex}
</div>
<div id="center">
  <div id="frame" on:click={onFrameClick}>
    {#if mode === 'slideshow'}
      <div id="imgdiv">
        <img src="/lib/explode-stills/pixel.gif" width="504" height="360" alt="slideshow" id="slide" />
      </div>
    {:else}
      <div id="videodiv" />
    {/if}
  </div>

  <div id="links">
    <h3>balthrop, alabama</h3>
    <p class="bandblurb">a small-town band</p>

    <p>
      <a href="#vampirevideo" id="videoclicker">
        &laquo; watch a video!
        <span class="videoicon">&#160;</span>
      </a>
      <br />
      <span class="sublinks">
        <a href="#vampirevideo" data-onclick="showVideo('vampire')">&laquo; a vampire’s lament</a>
        <br />
        <a href="#gayvideo" data-onclick="showVideo('gay')">&laquo; you’ve gotta be gay</a>
        <br />
        <a href="#prettylittlebirdvideo" data-onclick="showVideo('prettylittlebird')">&laquo; pretty little bird</a>
        <br />
        <a href="#artifactsvideo" data-onclick="showVideo('artifacts')">&laquo; artifacts</a>
        <br />
        <a href="#electricityvideo" data-onclick="showVideo('electricity')">&laquo; electricity</a>
        <br />
        <a href="#godvideo" data-onclick="showVideo('god')">&laquo; god loves my country</a>
        <br />
        <a href="#explodevideo" data-onclick="showVideo('explode')">&laquo; explode!</a>
        <br />
      </span>
      <a href="#slideshow" on:click={toggleSlideshow}>
        {#if slideshowPlaying}
          &laquo; pause slideshow
        {:else}
          &laquo; play slideshow
        {/if}
      </a>
    </p>
    <p>
      <a href="https://balthropalabama.bandcamp.com">buy our records, please! &raquo;</a>
      <br />
      <a href="https://facebook.com/balthropalabama">facebook &raquo;</a>
      <br />
      <a href="https://instagram.com/balthropalabama">instagram &raquo;</a>
      <br />
      <a href="https://www.youtube.com/channel/UCsSgHt8mXKP42yDL985lpHA">youtube &raquo;</a>
      <br />
      <span class="fuck-twitter">fuck twitter</span>
      <br />
    </p>

    <p>
      <img src="/lib/images/endup-logo.gif" alt="" width="40" height="77" />
    </p>
  </div>
</div>
<!-- end center -->

<a rel="me" href="https://mastodon.social/@pascalpp" style="display: none">Mastodon</a>
<a rel="me" href="https://moth.social/@pascal" style="display: none">Mastodon</a>

<style lang="less">
  a {
    color: #555558;
    text-decoration: none;
  }
  a:hover {
    color: #fff;
  }

  h3 {
    font-weight: normal;
    margin-bottom: 0;
  }

  p.bandblurb {
    margin-top: 0;
    margin-bottom: 2em;
    line-height: 1em;
    font-size: 0.8em;
    color: #666;
  }

  .fuck-twitter {
    color: #333;
  }

  #center {
    position: relative;
    width: 950px;
    margin: auto;
    margin-top: 20px;
    padding-bottom: 20px;
  }

  #frame {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    background-image: url(/lib/explode-stills/giltframe.jpg);
    background-repeat: no-repeat;
    width: 723px;
    height: 585px;
    cursor: pointer;
    margin-right: 20px;
  }

  #frame #imgdiv {
    position: absolute;
    left: 110px;
    top: 116px;
    width: 504px;
    height: 360px;
  }

  #frame #videodiv {
    background-color: #000;
    position: absolute;
    left: 105px;
    top: 112px;
    width: 512px;
    height: 372px;
  }

  #links {
    position: absolute;
    left: 740px;
    top: 0;
    text-align: left;
    padding-top: 10px;
    line-height: 1.6em;
  }

  #links p {
    margin-top: 0;
    margin-bottom: 18px;
  }

  .sublinks {
    display: block;
    font-size: 14px;
    line-height: 1.4em;
    padding-left: 13px;
  }

  .videoicon {
    background-image: url(/lib/images/video-icon.gif);
    background-repeat: no-repeat;
    background-position: 2px 5px;
    padding-left: 16px;
  }

  a:hover .videoicon {
    background-image: url(/lib/images/video-icon-over.gif);
  }
</style>
