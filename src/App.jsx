import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline/'
import Scene from './components/Scene';

import './App.sass';

const App = () => {
  return (
    <div className='wrapper'>
      <div className="left-side">
        <button className='action-button'>
          <ChevronLeftIcon />
        </button>
      </div>
      <div className='scene__wrapper'>
        <Scene />
      </div>
      <div className='right-side'>
        <button className='action-button'>
          <ChevronRightIcon />
        </button>
      </div>
      <div className='object-title'>Moon</div>
      <div className='object-content'>
        The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet, with a diameter about one-quarter that of Earth.
      </div>
    </div>
  )
}

export default App
