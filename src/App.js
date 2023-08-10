import {GiNetworkBars} from 'react-icons/gi'
import {AiOutlineWifi} from 'react-icons/ai'
import {BsBatteryHalf} from 'react-icons/bs'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {FaWallet} from 'react-icons/fa'
import {BsRocketTakeoff} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'
import {PiAlarm} from 'react-icons/pi'
import Menubar from './component/menubar/Menubar';
import Btcbar from './component/btcbar/Btcbar';
import Chartbar from './component/chartbar/Chartbar';


function App() {
  return (
    <div>
      <div className='container'>
            <div className='phone_container'>
            <header className='header'>
               <div className='notification'>
                <div>9:45am</div>
                <div class="top-notch"></div>
                <div className='bar'>
                <div><GiNetworkBars/></div>
                    <div><AiOutlineWifi/></div>
                    <div><BsBatteryHalf/></div>
                </div>
               </div>
               <Menubar />
            </header>
            <main className='main_container'>
                <div className='btc-container'>
                  <Btcbar />
                </div>
                <div className='chart-container'>
                  <Chartbar />
                </div>
                <div className='car'>
                    <div className='buyBtc'>
                      <div className='buybtcSub'>
                       <AiOutlineDollarCircle className='dollarIconOne' />
                        <div className='buybtctext'>Buy BTC</div>
                      </div>
                    </div>

                    <div className='sellBtc'>
                      <div className='sellbtcSub'>
                         <AiOutlineDollarCircle className='dollarIconTwo' />
                        <div className='sellbtctext'>Sell BTC</div>
                      </div>
                    </div>
                </div>
            </main>
            <footer className='footer_nav'>
               <ul>
                <li><FaWallet /></li>
                <li><BsRocketTakeoff /></li>
                <li><PiAlarm /></li>
                <li><AiOutlineSetting /></li>
               </ul>
               <div className="powerbutton"></div>

            </footer>
            </div>
        </div>
    </div>
  );
}

export default App;
