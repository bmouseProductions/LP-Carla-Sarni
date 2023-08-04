import BackTop from "./components/backTop/Index"
import Footer from "./components/footer/Index"
import SectionBanner from "./sections/SectionBanner/Index"
import SectionSallus from "./sections/SectionSallus/Index"
import SectionQuem from "./sections/SectionQuem/Index"
import SectionAprender from "./sections/SectionAprender/Index"
import SectionPrice from "./sections/SectionPrice/Index"
import SectionFAQ from "./sections/SectionFAQ/Index"

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();
  return (
    <>
      <main className="">
        <SectionBanner />
        <SectionQuem />
        <SectionPrice />
        <SectionAprender />
        <SectionSallus />
        <SectionFAQ />
        <BackTop />
      </main>
      <Footer />

    </>
  )
}

export default App
