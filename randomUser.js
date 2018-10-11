import how from './lib/how'
import who from './lib/who'
import what from './lib/what'
import where from './lib/where'
let animalsCount = 216

let randomize = (min, max) => Math.floor(Math.random() * (max - min)) + min

export const randomUser = () => ({
  img: randomize(1, animalsCount + 1),
  who: who[randomize(0, who.length)],
  how: how[randomize(0, how.length)],
  what: what[randomize(0, what.length)],
  where: where[randomize(0, where.length)]
})