import prefixes from '~~/static/prefixes.json'
import descriptors from '~~/static/descriptors.json'
import nouns from '~~/static/nouns.json'

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
