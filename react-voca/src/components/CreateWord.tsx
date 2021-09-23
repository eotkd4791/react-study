import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { IDay } from './DayList';

export default function CreateWord() {
  const days: IDay[] = useFetch('http://localhost:3001/days');
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!isLoading && engRef.current && korRef.current && dayRef.current) {
      setIsLoading(true);

      const eng = engRef.current.value;
      const kor = korRef.current.value;
      const day = dayRef.current.value;

      fetch(`http://localhost:3001/words/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eng,
          kor,
          day,
          isDone: false
        })
      }).then((res) => {
        res.ok && alert('생성이 완료 되었습니다.');
        history.push(`/day/${day}`);
        setIsLoading(false);
      });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='input_area'>
        <label>Eng</label>
        <input type='text' placeholder='computer' ref={engRef} />
      </div>
      <div className='input_area'>
        <label>Kor</label>
        <input type='text' placeholder='컴퓨터' ref={korRef} />
      </div>
      <div className='input_area'>
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button style={{ opacity: isLoading ? 0.3 : 1 }}>{isLoading ? 'Saving ...' : '저장'}</button>
    </form>
  );
}
