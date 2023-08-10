import React from 'react'
import './chartbar.css'
import { LineChart, Line } from 'recharts';


const Chartbar = () => {
    const data = [
    {name: 'Page A', uv: 300,}, 
    {name: 'Page B', uv: 200,},
    {name: 'Page C', uv: 400,},
    {name: 'Page D', uv: 300,},

];

  return (
    <div className=''>
        <div className='lowerHigherWrapper'>
            <div className='sideOne'>
                <div className='circleOne'></div>
                <div className='textLower'>Lower:$4.995</div>
            </div>
            <div className='sideTwo'>
                <div className='circleTwo'></div>
                <div className='textHigher'>Higher:$6.957</div>
            </div>
        </div>
    <div className='chartWrapper'>
    <LineChart width={200} height={50} data={data} >
    <Line type="monotone"  dataKey="uv" stroke="#FF9B20" />
  </LineChart>
  </div>
  <div  className='btcStatisticWrapper'>
    <div className='btcstatisticSub'>
        <div className='circleThree'></div>
        <div className='onebtcText'>1BTC=$5,483</div>
    </div>
  </div>
    </div>
  )
}

export default Chartbar