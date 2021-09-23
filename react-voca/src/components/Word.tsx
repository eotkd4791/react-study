import { useState } from 'react';

export interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}

interface IProps {
  word: IWord;
}

export default function Word(props: IProps) {
  const [word, setWords] = useState(props.word);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...word, isDone: !isDone })
    }).then((res) => res.ok && setIsDone(!isDone));
  }

  function del() {
    if (window.confirm('삭제하시겠습니까 ?')) {
      fetch(`http://localhost:3001/words/${word.id}`, { method: 'DELETE' }).then((res) => {
        if (res.ok) {
          setWords({ ...word, id: 0 });
        }
      });
    }
  }

  if (word.id === 0) {
    return null; // null 반환하면 아무일도 일어나지 않음
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
        <button onClick={del} className='btn_del'>
          삭제
        </button>
      </td>
    </tr>
  );
}
