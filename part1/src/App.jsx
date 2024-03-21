import { useState } from 'react'

const StatisticLine = (props) =>{
  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}
const Statistics = (props) => {
  const totalFeedback = props.good+props.neutral+props.bad
  if (totalFeedback == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const averageScore = totalFeedback === 0 ? 0 : (props.good - props.bad) / totalFeedback;

  const positivePercentage = totalFeedback === 0 ? 0 : (props.good / totalFeedback) * 100;

  return (
    <div>
      <h2>statistics</h2>
      <div>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="neutral" value ={props.neutral} />
        <StatisticLine text="bad" value ={props.bad} />
        <StatisticLine text="all" value ={totalFeedback} />
        <StatisticLine text="average" value ={averageScore} />
        <StatisticLine text="positive" value ={`${positivePercentage} %`} />
      </div>
    </div>
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={()=> setGood(good+1)}>Good</button>
      <button onClick={()=> setNeutral(neutral+1)}>Neutral</button>
      <button onClick={()=> setBad(bad+1)}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App