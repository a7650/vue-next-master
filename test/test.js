const data = [
  {
    id: 'f',
    body: {
      next: ['a']
    }
  },
  {
    id: 'a',
    body: {
      next: []
    }
  }
]

function arrToTree(arr) {
  const deepCopy = data => data && JSON.parse(JSON.stringify(data))
  const rawArr = deepCopy(arr)
  const rawTree = rawArr.reduce(
    (pre, cur) =>
      Object.assign(pre, { [cur.id]: { children: cur.body.next, id: cur.id } }),
    {}
  )
  const targetTree = deepCopy(rawTree)
  const format = children =>
    children.map(key => {
      if (typeof key === 'string') {
        obj = rawTree[key]
        obj.children = format(obj.children)
        delete targetTree[key]
        return obj
      }
      return key
    })
  Object.values(targetTree).forEach(item => {
    item.children = format(item.children)
  })
  return targetTree
}

console.log(JSON.stringify(arrToTree(data)))
