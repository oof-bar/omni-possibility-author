<template>
  <div class="phrase-generator">
    <p>
      <span class="phrase-generator__word phrase-generator__word--prefix">{{ prefix }}</span>
      <span class="phrase-generator__separator">-</span>
      <span class="phrase-generator__word phrase-generator__word--descriptor">{{ descriptor }}</span>
      <span class="phrase-generator__separator">&MediumSpace;</span>
      <span class="phrase-generator__word phrase__word--noun">{{ noun }}</span>
    </p>
    <button class="phrase-generator__randomize" @click="$store.commit('phrase/randomize')">Generate</button>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState('phrase', ['prefix', 'descriptor', 'noun'])
  }
</script>
