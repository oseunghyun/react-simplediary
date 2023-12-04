import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState, useRef } from 'react';

// const dummyList = [
//   {
//     id: 1,
//     author: "오승현",
//     content: "하이 1",
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: "이주형",
//     content: "하이 1",
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: "이강인",
//     content: "하이 1",
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 4,
//     author: "새오",
//     content: "하이 1",
//     emotion: 1,
//     created_date: new Date().getTime()
//   }
// ]

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data}/>
    </div>
  );
}

export default App;
