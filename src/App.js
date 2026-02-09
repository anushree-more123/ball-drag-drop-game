import TubeBoard from "./components/TubeBoard";
import { AppWrapper, GameTitle, GameBoardWrapper } from "./components/style";

function App() {
  return (
    <AppWrapper>
      <GameTitle>Ball Sort Puzzle</GameTitle>

      <GameBoardWrapper>
        <TubeBoard />
      </GameBoardWrapper>
    </AppWrapper>
  );
}

export default App;
