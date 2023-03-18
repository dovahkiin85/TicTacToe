import { createContext, useEffect, useRef, useState } from 'react'
import Cell from './components/Cell'
import React from 'react'
export const AppContext = createContext(null)

function App() {

  const [block1,setBlock1] = useState('')
  const [block2,setBlock2] = useState('')
  const [block3,setBlock3] = useState('')
  const [block4,setBlock4] = useState('')
  const [block5,setBlock5] = useState('')
  const [block6,setBlock6] = useState('')
  const [block7,setBlock7] = useState('')
  const [block8,setBlock8] = useState('')
  const [block9,setBlock9] = useState('')
  const [isXorNot,setIsXorNot] = useState(true)
  const [showPlayer,setShowPlayer] = useState('')
  const [wonOrNot,setWonOrNot] = useState('No one has won YET')
  const [player1,setPlayer1] = useState('Player 1')
  const [player2,setPlayer2] = useState('Player 2')
  const history = [localStorage.getItem('history')]
  const [div,setDiv] = useState() 
  const victors = String(history).split(',')

  useEffect(() => {
    if(block1 != '' && block2 != '' && block3 != '' && block4 != '' && block5 != '' && block6 != '' && block7 != '' && block8 != '' && block9 != ''){
      setWonOrNot('THE GAME HAS BEEN TIED')
    }else{
      // if(block1 == 'X' && block2 == 'X' && block3 == 'X' || block1 == 'X' && block4 == 'X' && block7 == 'X' || block1 == 'X' && block5 == 'X' && block9 == 'X' || block2 == 'X' && block5 == 'X' && block8 == 'X' || block3 == 'X' && block6 == 'X' && block9 == 'X' || block3 == 'X' && block5 == 'X' && block7 == 'X' || block4 == 'X' && block5 == 'X' && block6 == 'X' || block7 == 'X' && block8 == 'X' && block9 == 'X'){
      //   setWonOrNot('THE GAME IS WON BY PLAYER X!!!!')
      //   history.push([player1])
      //   localStorage.setItem('history',history)   

      // }else if(block1 == 'O' && block2 == 'O' && block3 == 'O' || block1 == 'O' && block4 == 'O' && block7 == 'O' || block1 == 'O' && block5 == 'O' && block9 == 'O' || block2 == 'O' && block5 == 'O' && block8 == 'O' || block3 == 'O' && block6 == 'O' && block9 == 'O' || block3 == 'O' && block5 == 'O' && block7 == 'O' || block4 == 'O' && block5 == 'O' && block6 == 'O' || block7 == 'O' && block8 == 'O' && block9 == 'O'){
      //   setWonOrNot('THE GAME IS WON BY PLAYER O!!!!')
      //   history.push([player2])
      //   localStorage.setItem('history',history)
      // }
      if(block1 == 'X' && block2 == 'X' && block3 == 'X' || block4 == 'X' && block5 == 'X' && block6 == 'X' || block7 == 'X' && block8 == 'X' && block9 == 'X'){
        setWonOrNot('THE GAME IS WON BY PLAYER X!!!!')
        history.push([player1])
        localStorage.setItem('history',history)   
      }
      if(block1 == 'X' && block4 == 'X' && block7 == 'X' || block2 == 'X' && block5 == 'X' && block8 == 'X' || block3 == 'X' && block6 == 'X' && block9 == 'X'){
        setWonOrNot('THE GAME IS WON BY PLAYER X!!!!')
        history.push([player1])
        localStorage.setItem('history',history)   
      }
      if(block1 == 'X' && block5 == 'X' && block9 == 'X' || block3 == 'X' && block5 == 'X' && block7 == 'X'){
        setWonOrNot('THE GAME IS WON BY PLAYER X!!!!')
        history.push([player1])
        localStorage.setItem('history',history)   
      }
      if(block1 == 'O' && block2 == 'O' && block3 == 'O' || block4 == 'O' && block5 == 'O' && block6 == 'O' || block7 == 'O' && block8 == 'O' && block9 == 'O'){
        setWonOrNot('THE GAME IS WON BY PLAYER O!!!!')
        history.push([player2])
        localStorage.setItem('history',history)   
      }
      if(block1 == 'O' && block4 == 'O' && block7 == 'O' || block2 == 'O' && block5 == 'O' && block8 == 'O' || block3 == 'O' && block6 == 'O' && block9 == 'O'){
        setWonOrNot('THE GAME IS WON BY PLAYER O!!!!')
        history.push([player2])
        localStorage.setItem('history',history)   
      }
      if(block1 == 'O' && block5 == 'O' && block9 == 'O' || block3 == 'O' && block5 == 'O' && block7 == 'O'){
        setWonOrNot('THE GAME IS WON BY PLAYER O!!!!')
        history.push([player2])
        localStorage.setItem('history',history)   
      }
    }
    if(isXorNot == true){
      setShowPlayer("Player is X")
    }else{
      setShowPlayer("Player is O")
    }
  }, [block1,block2,block3,block4,block5,block6,block7,block8,block9])

  return (
    <AppContext.Provider value={{isXorNot, setIsXorNot, wonOrNot}}>
    <body style={{justifyContent:'center'}}>
    <div style={{marginLeft:'450px'}} >
      <p >{wonOrNot}</p>
      <p>{showPlayer}</p>
      <div >
      <table style={{border: '10px solid blue', borderRadius:'2em'}}>
      <thead >
        <td  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><Cell block={block1} setBlock={setBlock1}/></td>
        <td  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><Cell block={block2} setBlock={setBlock2}/></td>
        <td  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><Cell block={block3} setBlock={setBlock3}/></td>
      </thead>
      <tr>
      <td  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><Cell block={block4} setBlock={setBlock4}/></td>
      <td  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><Cell block={block5} setBlock={setBlock5}/></td>
      <td  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><Cell block={block6} setBlock={setBlock6}/></td>
      </tr>
      <tr>
      <td  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><Cell block={block7} setBlock={setBlock7}/></td>
      <td  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><Cell block={block8} setBlock={setBlock8}/></td>
      <td  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><Cell block={block9} setBlock={setBlock9}/></td>
      </tr>
    </table>
      </div>
      <input type='text' value={player1} onChange={(e) => setPlayer1(e.target.value)}></input>
      <input type='text' value={player2} onChange={(e) => setPlayer2(e.target.value)}></input>
      <br/>
      <p>The people who won before:
      <p>{victors[victors.length - 1]}</p> 
      <p>{victors[victors.length - 2]}</p>
      <p>{victors[victors.length - 3]}</p>
      <p>{victors[victors.length - 4]}</p>
      <p>{victors[victors.length - 5]}</p>

      </p>
    </div>
    </body>
    </AppContext.Provider>
  )
}

export default App
