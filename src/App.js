import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "오승현",
    content: "하이 1",
    emotion: 1,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "이주형",
    content: "하이 1",
    emotion: 1,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "이강인",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 4,
    author: "새오",
    content: "하이 1",
    emotion: 1,
    created_date: new Date().getTime()
  }
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
