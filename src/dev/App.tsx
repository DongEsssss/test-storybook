
import { useState } from 'react'
import { Button } from '../components/basic/Button/Button'
import { Cards } from '../components/basic/Card'


const isPrime = (num: number) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return num > 1
}

enum ViewType {
  ALL = 'ALL',
  ODD = 'ODD',
  EVEN = 'EVEN',
  PRIME = 'PRIME',
}

const viewFilter: Record<ViewType, (n: number) => boolean> = {
  ALL: () => true,
  ODD: (n) => n % 2 === 1,
  EVEN: (n) => n % 2 === 0,
  PRIME: isPrime,
}

const svgtext =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="background-color:green"><style>text{font:28px bold;stroke-linejoin:round;stroke:#ffa600;fill:#b3cb2d;text-anchor:middle;dominant-baseline:middle;stroke-width:4px;paint-order:stroke;}</style><text x="32" y="36">N</text></svg>'

const generateImage = (n: number) =>
  `data:image/svg+xml,${encodeURIComponent(svgtext.replace('N', n.toString()))}`

const generateCard = (n: number) => ({
  title: `Card #${n}`,
  subtitle: `the ${n}th card`,
  subscriptionStatus: isPrime(n) ? 'Prime' : undefined,
  description: 'description of the card',
  image: {
    src: generateImage(n),
  },
})

const cardsArgs = {
  buttonText: 'View',
}

export default function App() {
  const [count, setCount] = useState<number>(1)
  const [view,] = useState<ViewType>(ViewType.ALL)

  return (
    <main style={{ padding: 80 }}>
      <Button
        sx={{ marginLeft: 2 }}
        onClick={() => {
          setCount(() => count + 1)
        }}
      >
        count is {count}
      </Button>
      <div style={{ height: 16 }} />
      <Cards
        {...cardsArgs}
        items={new Array(count)
          .fill(0)
          .map((_, i) => i)
          .filter(viewFilter[view])
          .map(generateCard)}
      />
    </main>
  )
}
