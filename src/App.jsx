import Navbar from './components/navbar/nav'
import Header from './components/header/header'
import BoxX from './components/boxX/boxX'
import './App.css'
import {FaChartPie, FaRegChartBar,FaUsers,FaPercent} from 'react-icons/fa'
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
          <Header/>
          <div className='boxes-top'>
            <BoxX 
            title='TRAFFIC' 
            value='350,857'
            period='Since last month'
            porcent='3,48'
            color='var(--green-color)'
            background='var(--red-color)'
            icon={<FaRegChartBar className='fi'
            />}/>
             <BoxX 
            title='NEW USERS' 
            value='2,356'
            period='Since last month'
            porcent='3,48'
            color='var(--red-color)'
            background='var(--orange-color)'
            icon={<FaChartPie/>}/>
             <BoxX className='sales'
            title='SALES' 
            value='924'
            period='Since last month'
            porcent='1,10'
            color='var(--red-color)'
            background='var(--color-yellow)'
            icon={<FaUsers/>}/>
             <BoxX 
            title='PERFORMANCE' 
            value='49,65%'
            period='Since last month'
            porcent='12%'
            color='var(--green-color)'
            background='var(--blue-light)'
            icon={<FaPercent/>}/>
            
            
          </div>
      </div>
    </div>
  )
}

export default App
