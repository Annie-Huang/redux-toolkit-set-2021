import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLorem } from './store/features/lorem/loremSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLorem());
  }, []);

  return <div></div>;
}

export default App;
