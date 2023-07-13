import BackTop from "./components/backTop/Index"
import Footer from "./components/footer/Index"
import SectionBanner from "./components/SectionBanner/Index"
import Whatsapp from "./components/whatsapp/Index"
import SectionSallus from "./components/SectionSallus/Index"
import SectionQuem from "./components/SectionQuem/Index"
import SectionAprender from "./components/SectionAprender/Index"


function App() {
  return (
    <>
      <main className="bg-sky-500">
        <SectionBanner />
        <SectionQuem />
        <SectionAprender />
        <SectionSallus />
        <BackTop />
      </main>
      <Footer />

    </>
  )
}

export default App
