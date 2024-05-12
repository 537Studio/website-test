import { Introduce } from './_components/Introduce'
import Title from './_components/Title'

import './app.css'

export default function Home() {
  return (
    <main className="h-full w-full">
      <Title></Title>
      <Introduce></Introduce>
    </main>
  )
}
