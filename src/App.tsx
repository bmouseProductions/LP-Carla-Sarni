import BackTop from "./components/backTop/Index"
import Footer from "./components/footer/Index"
import SectionBanner from "./components/SectionBanner/Index"
import SectionSallus from "./components/SectionSallus/Index"
import SectionQuem from "./components/SectionQuem/Index"
import SectionAprender from "./components/SectionAprender/Index"
import SectionPrice from "./components/SectionPrice/Index"

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
        <BackTop />
      </main>
      <Footer />

    </>
  )
}

export default App
