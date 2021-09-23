import { useState, useEffect } from 'react';

interface IDay {
  id: number;
  day: number;
}

interface IWord extends IDay {
  eng: string;
  kor: string;
  isDone: boolean;
}

export default function useFetch(url: string): (IDay | IWord)[] {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
}
