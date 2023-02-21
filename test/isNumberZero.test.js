const { isNumberZero } = require('../src')

const variants = [
  { output: false, input: undefined },
  { output: false, input: null },
  { output: false, input: NaN },
  // booleans
  { output: false, input: true },
  { output: false, input: false },
  { output: false, input: new Boolean(), desc: 'new Boolean()' },
  // numbers
  { output: true,  input: 0 },
  { output: false, input: 1 },
  { output: false, input: new Number(), desc: 'new Number()' },
  // bigint
  { output: false, input: BigInt(0), desc: 'BigInt(0)' },
  { output: false, input: BigInt(1), desc: 'BigInt(1)' },
  // strings
  { output: false, input: '', desc: `'' (empty string)` },
  { output: false, input: 'str' },
  { output: false, input: new String(), desc: 'new String()' },
  // RegExp
  { output: false, input: new RegExp(), desc: 'new RegExp()' },
  // arrays
  { output: false, input: [],               desc: '[]' },
  { output: false, input: ['val'],          desc: `['val']` },
  { output: false, input: new Array(),      desc: 'new Array()' },
  { output: false, input: new Array('val'), desc: `new Array('val')` },
  // Set
  { output: false, input: new Set(),        desc: 'new Set()' },
  { output: false, input: new Set(['val']), desc: `new Set(['val'])` },
  // Map
  { output: false, input: new Map(),                desc: 'new Map()' },
  { output: false, input: new Map([['key','val']]), desc: `new Map([['key','val']])` },
  // Date
  { output: false, input: new Date(), desc: 'new Date()' },
  // Promise
  { output: false, input: new Promise((res,rej)=>{}), desc: `new Promise((res,rej)=>{})` },
  // objects
  { output: false, input: {},                      desc: '{}' },
  { output: false, input: {key:'val'},             desc: `{key:'val'}` },
  { output: false, input: new Object(),            desc: 'new Array()' },
  { output: false, input: new Object({key:'val'}), desc: `new Object({key:'val'})` },
  // Symbol
  { output: false, input: Symbol('s'), desc: `Symbol('s')` },
]

variants.forEach((variant, i) => {
  const input = variant.input
  const output = variant.output
  const desc = (variant.desc === undefined) ? input : variant.desc

  const description = `${i + 1}: When the input value is "${desc}", the expected output value is "${output}".`

  test(description, () => expect(isNumberZero(input)).toBe(output))
})
