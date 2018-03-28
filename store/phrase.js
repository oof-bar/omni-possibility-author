import prefixes from '~~/static/db/prefixes.json'
import descriptors from '~~/static/db/descriptors.json'
import nouns from '~~/static/db/nouns.json'

export const state = () => ({
  prefix: null,
  descriptor: null,
  noun: null
})

export const mutations = {
  randomize (state) {
    state.prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    state.descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
    state.noun = nouns[Math.floor(Math.random() * nouns.length)];
  }
}
