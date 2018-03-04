<template>
  <div class="phrase-generator">
    <p class="phrase-generator__title">
      <span class="phrase-generator__lead-in">You are {{ indefiniteArticle }}</span>
      <span class="phrase-generator__word phrase-generator__word--prefix"><text-scrambler :text="prefix" /></span>
      <span class="phrase-generator__separator">-</span>
      <span class="phrase-generator__word phrase-generator__word--descriptor"><text-scrambler :text="descriptor" /></span>
      <span class="phrase-generator__separator">&MediumSpace;</span>
      <span class="phrase-generator__word phrase__word--noun"><text-scrambler :text="noun" /></span>
    </p>
    <button class="phrase-generator__randomize" @click="$store.commit('phrase/randomize')">Generate</button>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import TextScrambler from '~~/components/text-scrambler.vue';

  export default {
    computed: {
      indefiniteArticle () {
        return this.$store.state.phrase.prefix.search(/^[aeiou]/i) == 0 ? 'an' : 'a';
      },
      ...mapState('phrase', ['prefix', 'descriptor', 'noun'])
    },
    components: {
      TextScrambler
    }
  }
</script>
