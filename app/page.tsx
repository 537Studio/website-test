import MemberCards from './_components/MemberCards'
import { ProductsCards } from './_components/ProductsCards'
import Title from './_components/Title'

import './app.css'

export default function Home() {
  return (
    <main className="h-full w-full">
      <Title></Title>
      <ProductsCards></ProductsCards>
      <MemberCards></MemberCards>
    </main>
  )
}
