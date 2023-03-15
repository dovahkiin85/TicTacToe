import { useEffect, useRef, useState } from 'react'


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
    <body style={{justifyContent:'center'}}>
    <div style={{marginLeft:'450px'}} >
      <p >{wonOrNot}</p>
      <p>{showPlayer}</p>
      <div >
      <table style={{border: '10px solid blue', borderRadius:'2em'}}>
      <thead >
        <td ref={div}  style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><button style={{padding:'5px'}} onClick={() => {if(wonOrNot=='No one has won YET'){if(block1 != "X" && block1 != "O"){isXorNot? setBlock1('X',setIsXorNot(!isXorNot)): setBlock1('O',setIsXorNot(!isXorNot))}}}}>{block1}</button></td>
        <td ref={div} style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><button style={{padding:'5px'}}onClick={() => {if(wonOrNot=='No one has won YET'){if(block2 != "X" && block2 != "O"){isXorNot? setBlock2('X',setIsXorNot(!isXorNot)): setBlock2('O',setIsXorNot(!isXorNot))}}}}>{block2}</button></td>
        <td ref={div} style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><button style={{padding:'5px'}}onClick={() => {if(wonOrNot=='No one has won YET'){if(block3 != "X" && block3 != "O"){isXorNot? setBlock3('X',setIsXorNot(!isXorNot)): setBlock3('O',setIsXorNot(!isXorNot))}}}}>{block3}</button></td>
      </thead>
      <tr>
      <td ref={div} style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><button style={{padding:'5px'}}onClick={() => {if(wonOrNot=='No one has won YET'){if(block4 != "X" && block4 != "O"){isXorNot? setBlock4('X',setIsXorNot(!isXorNot)): setBlock4('O',setIsXorNot(!isXorNot))}}}}>{block4}</button></td>
      <td ref={div} style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><button style={{padding:'5px'}}onClick={() => {if(wonOrNot=='No one has won YET'){if(block5 != "X" && block5 != "O"){isXorNot? setBlock5('X',setIsXorNot(!isXorNot)): setBlock5('O',setIsXorNot(!isXorNot))}}}}>{block5}</button></td>
      <td ref={div} style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><button style={{padding:'5px'}}onClick={() => {if(wonOrNot=='No one has won YET'){if(block6 != "X" && block6 != "O"){isXorNot? setBlock6('X',setIsXorNot(!isXorNot)): setBlock6('O',setIsXorNot(!isXorNot))}}}}>{block6}</button></td>
      </tr>
      <tr>
      <td ref={div} style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><button style={{padding:'5px'}}onClick={() => {if(wonOrNot=='No one has won YET'){if(block7 != "X" && block7 != "O"){isXorNot? setBlock7('X',setIsXorNot(!isXorNot)): setBlock7('O',setIsXorNot(!isXorNot))}}}}>{block7}</button></td>
      <td ref={div} style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><button style={{padding:'5px'}}onClick={() => {if(wonOrNot=='No one has won YET'){if(block8 != "X" && block8 != "O"){isXorNot? setBlock8('X',setIsXorNot(!isXorNot)): setBlock8('O',setIsXorNot(!isXorNot))}}}}>{block8}</button></td>
      <td ref={div} style={{border: '4px solid gold', borderRadius:'1em', padding:'55px'}}><button style={{padding:'5px'}}onClick={() => {if(wonOrNot=='No one has won YET'){if(block9 != "X" && block9 != "O"){isXorNot? setBlock9('X',setIsXorNot(!isXorNot)): setBlock9('O',setIsXorNot(!isXorNot))}}}}>{block9}</button></td>
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
  )
}

export default App
