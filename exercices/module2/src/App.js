import { useState } from "react"

const Display = props =>
    <div>
        {props.text} {props.value}
    </div>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Update = () => (
    setAll(good + neutral + bad)
    setAverage((good + neutral)/all)
    
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    return (
        <div>
            <h2>give feedback</h2>
            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />

            <h2>statistics</h2>
            <Display value={good} text="good" />
            <Display value={neutral}text="neutral" />
            <Display value={bad} text="bad" />
            <Display value={all} text="all" />
            <Display value={average} text="average" />
            <Display value={positive} text="positive" />
        </div>
    )

}

export default App