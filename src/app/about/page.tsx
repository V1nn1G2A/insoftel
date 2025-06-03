import AboutUs from './_components/AboutUs'
import ChooseUs from './_components/ChooseUs'
import Commitment from './_components/Commitment'
import Expertise from './_components/Expertise'
import QuoteSection from './_components/QuoteSection'
import Slogan from './_components/Slogan'

export default function About() {
  return (
    <>
      <Slogan />
      <QuoteSection />
      <AboutUs />
      <Expertise />
      <ChooseUs />
      <Commitment />
    </>
  )
}
