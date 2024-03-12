import './App.css';
import Comment from './components/Comment';
import commentData from './Data/commentData.js' ;



function App() {
  return (
    <>
     
     <Comment commentData={commentData}/>

    </>
  );
}

export default App;
