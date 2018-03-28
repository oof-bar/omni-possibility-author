<template>
  <div class="phrase-generator">
    <p class="phrase-generator__title">
      <span class="phrase-generator__lead-in">You are {{ indefiniteArticle }}</span>
      <span class="phrase-generator__word phrase-generator__word--prefix"><text-scrambler :text="prefix" /></span>
      <span class="phrase-generator__separator">-</span>
      <span class="phrase-generator__word phrase-generator__word--descriptor"><text-scrambler :text="descriptor" /></span>
      <span class="phrase-generator__separator">&MediumSpace;</span>
      <span class="phrase-generator__word phrase-generator__word--noun"><text-scrambler :text="noun" /></span>
    </p>
    <button class="phrase-generator__randomize" @click="$store.commit('phrase/randomize')">Disrupt</button>
    <tweet-button :message="phraseAsText" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import TextScrambler from '~~/components/text-scrambler.vue';
  import TweetButton from '~~/components/tweet-button.vue';

  export default {
    computed: {
      phraseAsText () {
        return `I’m ${this.indefiniteArticle} ${this.prefix} ${this.descriptor} ${this.noun}`;
      },
      indefiniteArticle () {
        const prefix = this.$store.state.phrase.prefix
        if (prefix) {
          return prefix.search(/^[aeiou]/i) == 0 ? 'an' : 'a';
        } else {
          return 'an';
        }
      },
      ...mapState('phrase', ['prefix', 'descriptor', 'noun'])
    },
    updated: function () {
      this.$ga.track('send', 'event', 'Phrase', 'Generate', this.phraseAsText);
    },
    components: {
      TextScrambler,
      TweetButton
    }
  }
</script>
