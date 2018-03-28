<template>
  <a class="tweet-button" :href="shareUrl" target="_blank">Tweet</a>
</template>

<script>
  export default {
    props: ['message'],
    data: function () {
      return {
        siteUrl: process.env.baseUrl
      }
    },
    computed: {
      shareText () {
        return `${this.message}. What are you?`;
      },
      shareUrl () {
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.shareText)}&url=${encodeURIComponent(this.siteUrl)}&hashtags=omnipossibilityauthor`;
      }
    }
  }
</script>
