import { useState } from 'react';
import Navbar from './component/Layout/Navbar/Navbar';
import LoggedinNavbar from './component/Layout/loggedinNavbar/LoggedinNavbar';
import Footer from './component/Layout/footer/footer';
import LoggedinLayout from './component/Layout/LoggedinLayout/LoggedinLayout';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
         {/* <Navbar /> */}
         {/* <LoggedinNavbar />
         <Footer /> */}

         <LoggedinLayout>
           <h1>Hi welcome to the e-commerce application</h1>
         </LoggedinLayout>
       </div>
    </>
  )
}

export default App
