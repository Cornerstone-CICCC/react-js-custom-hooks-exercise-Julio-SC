// src/App.tsx
import useTime from "../src/hooks/UseTime"

function App() {
  const currentDay = useTime("day")
  const currentHour = useTime("hour")

  return (
    <div style={{ textAlign: "center", marginTop: "4rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🕒 Custom Hook - useTime</h1>
      <h3>Today is: {currentDay}</h3>
      <h3>Current Hour: {currentHour}</h3>
    </div>
  )
}

export default App

