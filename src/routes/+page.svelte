<script lang="ts">
  import './page.less';
  import Slideshow from './Slideshow.svelte';
  import Video from './Video.svelte';
  import EndupLogo from './endup-logo.svg?component';
  import { onMount } from 'svelte';

  let mode: 'slideshow' | 'video' | 'still';
  let slideshowPaused = true;
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

  $: slideshowLabel = slideshowPaused ? 'play slideshow' : 'pause slideshow';

  function checkHash() {
    const hash = window.location.hash.slice(1);
    if (hash.includes('video')) {
      mode = 'video';
      video = hash.replace('video', '');
      pauseSlideshow();
    } else if (hash.includes('still')) {
      mode = 'still';
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

<svelte:head>
  <title>Balthrop, Alabama</title>
  <meta name="description" content="A small-town band" />
  <meta property="og:title" content="Balthrop, Alabama" />
  <meta property="og:description" content="A small-town band" />
  <meta property="og:url" content="https://www.balthropalabama.com" />
  <meta property="og:site_name" content="Balthrop, Alabama" />
  <meta property="og:image" content="https://www.balthropalabama.com/lib/images/balthropalabama-mural-og-preview.jpg" />
  <meta property="twitter:title" content="Fuck Twitter" />
  <meta
    property="twitter:description"
    content="Balthrop, Alabmama encourages you to get off Twitter. It doesn’t deserve you."
  />
  <meta
    property="twitter:image"
    content="https://www.balthropalabama.com/lib/images/balthropalabama-mural-twitter-preview.jpg"
  />
</svelte:head>

<main>
  <div class="main-content">
    <div class="frame {mode}">
      {#if mode === 'video'}
        <Video {video} />
      {:else}
        <Slideshow bind:paused={slideshowPaused} still={mode === 'still'} />
      {/if}
    </div>

    <div class="menu">
      <section class="header">
        <h1 class="band-name">balthrop, alabama</h1>
        <h3 class="band-blurb">a small-town band</h3>
      </section>

      <section class="frame-links">
        <p class="video-link-header">watch a video!</p>
        <section class="sublinks">
          <p><a href="#vampirevideo" data-onclick="showVideo('vampire')">a vampire’s lament</a></p>
          <p><a href="#gayvideo" data-onclick="showVideo('gay')">you’ve gotta be gay</a></p>
          <p><a href="#prettylittlebirdvideo" data-onclick="showVideo('prettylittlebird')">pretty little bird</a></p>
          <p><a href="#artifactsvideo" data-onclick="showVideo('artifacts')">artifacts</a></p>
          <p><a href="#electricityvideo" data-onclick="showVideo('electricity')">electricity</a></p>
          <p><a href="#godvideo" data-onclick="showVideo('god')">god loves my country</a></p>
          <p><a href="#explodevideo" data-onclick="showVideo('explode')">explode!</a></p>
        </section>
        <section class="slideshow-toggle">
          <p>
            <a href="#slideshow" on:click={toggleSlideshow} aria-label={slideshowLabel}>
              {slideshowLabel}
            </a>
          </p>
        </section>
      </section>

      <section class="footer">
        <section class="outbound-links">
          <p><a href="https://balthropalabama.bandcamp.com">buy our records, please!</a></p>
          <p><a href="https://facebook.com/balthropalabama">facebook</a></p>
          <p><a href="https://instagram.com/balthropalabama">instagram</a></p>
          <p><a href="https://youtube.com/user/balthropalabama">youtube</a></p>
          <p><span class="fuck-twitter">fuck twitter</span></p>
        </section>
        <section class="endup">
          <EndupLogo />
        </section>
      </section>
    </div>
  </div>
</main>
<!-- end center -->

<a rel="me" href="https://mastodon.social/@pascalpp" style="display: none">Mastodon</a>
<a rel="me" href="https://moth.social/@pascal" style="display: none">Mastodon</a>

<!-- svelte-vercel -->

<style lang="less">
  main {
    padding: 2vw;
    padding-bottom: 10vh;
    font-size: 18px;
    line-height: 1.4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: #888;

    a {
      color: inherit;
      text-decoration: none;
    }
    a:hover {
      color: #fff;
    }

    .main-content {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      gap: 1.5em;

      @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        gap: 1em;
      }
    }

    .frame {
      order: 1;
      outline: none;
      background-image: url(./giltframe.jpg);
      background-repeat: no-repeat;
      background-size: contain;
      width: 100%;
      max-width: 723px;
      aspect-ratio: 1.236;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 800px) {
        &.video {
          padding: 0;
        }
      }
    }

    .menu {
      order: 1;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: 1.25em;
      line-height: 1.4;
      @media screen and (max-width: 800px) {
        display: contents;
      }

      .header {
        line-height: 1.2;
        padding-top: 0.5em;

        .band-name {
          color: #d5b16b;
          font-size: 1.8em;
          font-weight: normal;
          margin: 0;
          @media screen and (max-width: 800px) {
            &::before {
              content: '~ ';
            }
            &::after {
              content: ' ~';
            }
          }
        }

        .band-blurb {
          margin: 0;
          font-weight: normal;
        }

        @media screen and (max-width: 800px) {
          margin-top: 2vh;
          order: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: baseline;
        }
        @media screen and (max-width: 600px) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }

    .frame-links {
      order: 1;
      text-align: left;
      p {
        margin: 0;
      }

      a {
        &::before {
          content: '« ';
        }
        @media screen and (max-width: 800px) {
          &::before {
            content: '';
          }
        }
      }

      .sublinks {
        padding-left: 1em;
      }

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.25em 1.25em;
        padding: 0 1em;
        .sublinks {
          display: contents;
        }
      }
    }

    .footer {
      order: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1em;
      @media screen and (max-width: 800px) {
        align-items: center;
        margin: 0 1em;
        padding: 1em;
        border-top: 1px solid fade(white, 30%);
      }

      .outbound-links {
        a {
          white-space: nowrap;
          &::after {
            content: ' »';
          }
        }

        .fuck-twitter {
          white-space: nowrap;
          opacity: 0.7;
        }
        @media screen and (max-width: 800px) {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.5em 1.25em;
        }
      }

      .endup {
        width: 40px;
        flex-shrink: 0;
        margin: -2px;
      }
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
  }
</style>
