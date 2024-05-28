import MemberCards from './_components/memberCards'
import { ProductsCards } from './_components/ProductsCards'
import Title from './_components/Title'

import './app.css'

export default function Home() {
  return (
    <main className="relative h-full w-full overflow-x-clip">
      <Title></Title>
      <ProductsCards></ProductsCards>
      <MemberCards></MemberCards>1 1 1
    </main>
  )
}
