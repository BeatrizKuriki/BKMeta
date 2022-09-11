import Header from "./componentes/Header"
import CardVendas  from "./componentes/SalesCard"


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="vendas">
          <div className="bkmeta-container">
          <CardVendas/>  
          </div>
        </section>
      </main>


    </>
  )

}

export default App
