export const state = () => {
  return {
    counter: 0,
    name: ''
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}
