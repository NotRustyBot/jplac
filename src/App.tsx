import PixiCanvas from './components/PixiCanvas'
import { PixiCanvasHandler } from './pixiCanvasHandler'
import UiContainer from './UiContainer';
const handler = new PixiCanvasHandler();
await handler.precook();
function App() {
  return (
    <div>
      <PixiCanvas handler={handler}></PixiCanvas>
      <UiContainer></UiContainer>
    </div>
  )
}

export default App
