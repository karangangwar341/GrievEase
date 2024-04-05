import { SignInMethod } from 'firebase/auth'
import './App.css'
import Login from './components/locality/into/SignIn'
import SignUp from './components/locality/into/SignUp'
import SignIn from './components/locality/into/SignIn'
import LandingPage from './components/locality/Land/LandingPage'
import Shift from './components/locality/into/Shift'
import Sample from './components/locality/into/Sample'

function App() {

  return (
    <>
    <div className='bg-gradient-to-br from-orange-300 to-orange-500 h-screen w-screen'>
    {/* <SignUp/> */}
    {/* <LandingPage/> */}
    {/* <SignUp/> */}
    {/* <Shift/> */}
    <Sample/>
    </div>
      
      
    </>
  )
}

export default App
