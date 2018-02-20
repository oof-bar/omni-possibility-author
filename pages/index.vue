<template>
  <div class="phrase">
    <p>
      <span class="phrase__word phrase__word--prefix">{{ prefix }}</span>
      <span class="phrase__separator">-</span>
      <span class="phrase__word phrase__word--descriptor">{{ descriptor }}</span>
      <span class="phrase__separator">&MediumSpace;</span>
      <span class="phrase__word phrase__word--noun">{{ noun }}</span>
    </p>
    <button @click="$store.commit('phrase/randomize')">Generate</button>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState('phrase', ['prefix', 'descriptor', 'noun']),
    fetch: ({ store }) => {
      // Ensure there is a phrase ready on render:
      store.commit('phrase/randomize');
    }
  }
</script>

<style>
</style>
