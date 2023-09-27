<script lang="ts">
  export let video: string;
</script>

<div class="video">
  {#if video === 'god'}
    <iframe
      title="god"
      width="560"
      height="420"
      src="https://www.youtube.com/embed/PuUmLIPSasI?rel=0&amp;hd=1&amp;autoplay=1&amp;modestbranding=0"
      frameborder="0"
      allowfullscreen
    />
  {/if}
  {#if video === 'explode'}
    <iframe
      title="explode"
      width="560"
      height="420"
      src="https://www.youtube.com/embed/7pSlA0kf3P8?rel=0&amp;hd=1&amp;autoplay=1&amp;modestbranding=0"
      frameborder="0"
      allowfullscreen
    />
  {/if}
  {#if video === 'electricity'}
    <iframe
      title="electricity"
      width="640"
      height="500"
      src="https://www.youtube.com/embed/QoXUJPghm7k?rel=0&amp;hd=1&amp;autoplay=1&amp;modestbranding=0"
      frameborder="0"
      allowfullscreen
    />
  {/if}
  {#if video === 'artifacts'}
    <iframe
      title="artifacts"
      width="640"
      height="500"
      src="https://www.youtube.com/embed/e4rcTNDvdkI?rel=0&amp;hd=1&amp;autoplay=1&amp;modestbranding=0"
      frameborder="0"
      allowfullscreen
    />
  {/if}
  {#if video === 'prettylittlebird'}
    <iframe
      title="prettylittlebird"
      width="640"
      height="500"
      src="https://www.youtube.com/embed/G2X1pdiunnk?rel=0&amp;hd=1&amp;autoplay=1&amp;modestbranding=0"
      frameborder="0"
      allowfullscreen
    />
  {/if}
  {#if video === 'vampire'}
    <iframe
      title="vampire"
      width="640"
      height="500"
      src="https://www.youtube.com/embed/X3Nv-hiBhLQ?rel=0&amp;hd=1&amp;autoplay=1&amp;modestbranding=0"
      frameborder="0"
      allowfullscreen
    />
  {/if}
  {#if video === 'gay'}
    <iframe
      title="gay"
      width="640"
      height="500"
      src="https://www.youtube.com/embed/F25d9hVodsc?rel=0&amp;hd=1&amp;autoplay=1&amp;modestbranding=0"
      frameborder="0"
      allowfullscreen
    />
  {/if}
</div>

<style lang="less">
  .video {
    background-color: black;
  }
</style>
