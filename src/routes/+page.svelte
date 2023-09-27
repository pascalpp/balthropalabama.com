<script lang="ts">
  import { onMount } from 'svelte';
  import './page.less';
  import Slideshow from './Slideshow.svelte';
  import Video from './Video.svelte';

  let mode: 'slideshow' | 'video';
  let slideshowPaused = false;
  let video = '';

  function startSlideshow() {
    mode = 'slideshow';
    slideshowPaused = false;
  }
  function pauseSlideshow() {
    slideshowPaused = true;
  }
  function toggleSlideshow() {
    mode = 'slideshow';
    slideshowPaused = !slideshowPaused;
  }

  function onFrameClick() {}

  function checkHash() {
    const hash = window.location.hash.slice(1);
    if (hash.includes('video')) {
      mode = 'video';
      video = hash.replace('video', '');
      pauseSlideshow();
    } else {
      mode = 'slideshow';
      startSlideshow();
    }
  }

  onMount(() => {
    checkHash();

    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  });
</script>

<div id="center">
  <div id="frame" role="button" on:click={onFrameClick} on:keydown={onFrameClick} tabindex="0">
    {#if mode === 'video'}
      <Video {video} />
    {:else}
      <Slideshow bind:paused={slideshowPaused} />
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
        {#if slideshowPaused}
          &laquo; play slideshow
        {:else}
          &laquo; pause slideshow
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

<!-- svelte-vercel -->

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
    background-image: url(/lib/explode-stills/giltframe.jpg);
    background-repeat: no-repeat;
    width: 723px;
    height: 585px;
    cursor: pointer;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
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
