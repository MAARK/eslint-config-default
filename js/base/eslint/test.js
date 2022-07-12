const sample = {
  foo: 'bar',
  bar: 'foo'
}

const list = ['foo', 'bar']

const { foo } = sample
const [, bar] = list

function hello(args) {
  if (args.foo === 'bar') {
    return 'hello'
  }
  return ''
}

hello({ foo, bar, sample, list })
