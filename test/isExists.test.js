const { isExists } = require('../src')

const variants = [
  { output: false, input: undefined },
  { output: false, input: null },
  { output: false, input: NaN },
  // booleans
  { output: true,  input: true },
  { output: true,  input: false },
  { output: true,  input: new Boolean(), desc: 'new Boolean()' },
  // numbers
  { output: true,  input: 0 },
  { output: true,  input: 1 },
  { output: true,  input: new Number(), desc: 'new Number()' },
  // bigint
  { output: true,  input: BigInt(0), desc: 'BigInt(0)' },
  { output: true,  input: BigInt(1), desc: 'BigInt(1)' },
  // strings
  { output: true,  input: '', desc: `'' (empty string)` },
  { output: true,  input: 'str' },
  { output: true,  input: new String(), desc: 'new String()' },
  // RegExp
  { output: true,  input: new RegExp(), desc: 'new RegExp()' },
  // arrays
  { output: true,  input: [],               desc: '[]' },
  { output: true,  input: ['val'],          desc: `['val']` },
  { output: true,  input: new Array(),      desc: 'new Array()' },
  { output: true,  input: new Array('val'), desc: `new Array('val')` },
  // Set
  { output: true,  input: new Set(),        desc: 'new Set()' },
  { output: true,  input: new Set(['val']), desc: `new Set(['val'])` },
  // Map
  { output: true,  input: new Map(),                desc: 'new Map()' },
  { output: true,  input: new Map([['key','val']]), desc: `new Map([['key','val']])` },
  // Date
  { output: true,  input: new Date(), desc: 'new Date()' },
  // Promise
  { output: true,  input: new Promise((res,rej)=>{}), desc: `new Promise((res,rej)=>{})` },
  // objects
  { output: true,  input: {},                      desc: '{}' },
  { output: true,  input: {key:'val'},             desc: `{key:'val'}` },
  { output: true,  input: new Object(),            desc: 'new Array()' },
  { output: true,  input: new Object({key:'val'}), desc: `new Object({key:'val'})` },
  // Symbol
  { output: true,  input: Symbol('s'), desc: `Symbol('s')` },
]

variants.forEach((variant, i) => {
  const input = variant.input
  const output = variant.output
  const desc = (variant.desc === undefined) ? input : variant.desc

  const description = `${i + 1}: When the input value is "${desc}", the expected output value is "${output}".`

  test(description, () => expect(isExists(input)).toBe(output))
})
