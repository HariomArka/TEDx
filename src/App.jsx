import { useContext } from 'react'
import './App.css'
import Card from './components/Card'
import { imageContext } from './context/Context'

function App() {
  const carddata = useContext(imageContext)

  return (
    <imageContext.Provider>
    <div className='my-5'>
      <div className="name cursor-pointer text-red-600 text-center text-4xl font-extrabold flex items-center mx-auto p-2 border-2 border-white w-max rounded-xl transform transition-transform duration-500 hover:-translate-y-2  hover:scale-105 mb-4">
        <img className='w-[104px] rounded-xl' src="https://avatars.githubusercontent.com/u/33686558?s=280&v=4" alt="" />
        <div className=''>Gallery</div>
      </div>
      <div className="cardcontainer max-[500px]:grid-cols-1 max-[1100px]:grid-cols-2">
        {
          carddata.map(item => {
            return (
              <Card src={item.src} title={item.title} description={item.description}/>
            )
          })
        }

      </div>
      <div className="footer text-slate-500 text-right pr-2 mt-4">
        &copy;All rights reservered 2024
      </div>
    </div>
    </imageContext.Provider>
  )
}

export default App
