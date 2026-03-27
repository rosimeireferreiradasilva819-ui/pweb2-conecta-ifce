
import HomePage from '@/pages/homepage/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { Outlet, useLocation } from 'react-router'
import useScrool from './shared/hooks/useScrool'
import Navbar from './shared/componentes/navbar'
import Footer from './shared/componentes/footer'

function App() {

  useScrool()


  return (
    <>
      <div className='flex flex-col min-h-svh'>
        <Navbar />
        <main className='flex-1 flex flex-col'>
         <Outlet/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
