import Contact from './_components/contact'
import MemberCards from './_components/memberCards'
import JoinUs from './_components/memberCards/JoinUs'
import { ProductsCards } from './_components/ProductsCards'
import Title from './_components/Title'

import './app.css'

export default function Home() {
  return (
    <main className="relative h-full w-full overflow-x-clip">
      <Title></Title>
      <ProductsCards></ProductsCards>
      <MemberCards></MemberCards>
      <JoinUs></JoinUs>
      <Contact></Contact>
    </main>
  )
}
