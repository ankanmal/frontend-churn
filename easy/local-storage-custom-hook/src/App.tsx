
import { useLocalStorage } from "./useLocalStorage"


const App = () => {
  const [theme, setTheme] = useLocalStorage('set-theme', 'light')


  return (
    <div>
      <select name="Theme" id="0" value={theme} onChange={(e)=>setTheme(e.target.value)}>
        <option value="dark" >Dark</option>
        <option value="light" >Light</option>
      </select>
      <h1>Value From Local Storage : {theme}</h1>


    </div>
  )
}

export default App