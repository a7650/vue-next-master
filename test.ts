import { computed } from 'vue'

const reactVal = reactive({})
let computedVal = computed(() => reactVal.foo)
let effectVal
effect(() => {
  effectVal = reactVal.foo + computedVal.value
  console.log('normal effects trigger!')
})

console.log('--- Test begin ---')
reactVal.foo = 1
