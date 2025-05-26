// src/hooks/useTime.ts
import { useEffect, useState } from "react"

function useTime(type: string): string {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const [currentValue, setCurrentValue] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      if (type === "day") {
        setCurrentValue(daysOfWeek[now.getDay()])
      } else {
        setCurrentValue(now.getHours().toString())
      }
    }

    updateTime()
    const intervalId = setInterval(updateTime, 60000)

    return () => clearInterval(intervalId)
  }, [type])

  return currentValue
}

export default useTime
