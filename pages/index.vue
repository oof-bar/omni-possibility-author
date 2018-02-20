<template>
  <div class="index">
    <page-header />
    <phrase-generator />
    <page-footer />
  </div>
</template>

<script>
  import PhraseGenerator from '~~/components/phrase-generator.vue';

  import PageHeader from '~~/partials/page-header.vue';
  import PageFooter from '~~/partials/page-footer.vue';

  export default {
    components: {
      PageHeader,
      PageFooter,
      PhraseGenerator
    },
    fetch: ({ store }) => {
      // Ensure there is a phrase ready on render:
      store.commit('phrase/randomize');
    }
  }
</script>
