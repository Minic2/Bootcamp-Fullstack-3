import { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
const WarningNotUsed = () => {

    return <h1>Todavia no se ha usado el contador</h1>
}
const ListOfClicks = ({ clicks }) => {
    console.log({ clicks })
    debugger;
    return <p>{clicks.join(", ")}</p>

}
// const INITIAL_COUNTER_STATE ={

//     left:0,
//     right:0,
//     mensaje:"Mensaje"
    
// }
const App = () => {



    // const [left,setLeft] = useState(0)
    // const [right,setRight] = useState(0)
    const [clicks, setClicks] = useState([])
    // const [counters, setCounters] = useState(INITIAL_COUNTER_STATE)
    const handlerReset = () => {

        // setCounters(INITIAL_COUNTER_STATE)
        setClicks([])
    }
    const handlerClickLeft = () => {

        // setCounters({
        //     ...counters,
        //     left: counters.left + 1,


        // })
        setClicks(prevClicks => ([...prevClicks, 'L']))
    }
    const handlerClickRight = () => {

        // setCounters({
        //     ...counters,

        //     right: counters.right + 1,

        // })
        setClicks(prevClicks => ([...prevClicks, 'R']))
    }
    const left = clicks.filter(click => click === 'L')
    const right =clicks.filter(click => click ===  'R')
    return (

        <div>
            {left.length}
            <button onClick={handlerClickLeft}>
                left
            </button>
            <button onClick={handlerClickRight}>
                right
            </button>
            {right.length}

            <p>
                <button onClick={handlerReset}>
                    reset
                </button>

            </p>
            <p>Clicks Totales{clicks.length}</p>
            {/* <p>{counters.mensaje}</p> */}
            {clicks.length === 0
                ? <WarningNotUsed />
                : <ListOfClicks clicks={clicks} />

            }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))