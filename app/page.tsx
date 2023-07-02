import { Carrousel } from './components/Carrousel'
import {Proyects} from './components/Proyects'
import {Form} from './components/Form'
import { Footer } from './components/Footer'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Carrousel></Carrousel>
      <Proyects></Proyects>
      <Form></Form>
      <Footer></Footer>
    </main>
  )
}
