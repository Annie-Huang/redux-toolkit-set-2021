import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLorem } from './store/features/lorem/loremSlice';

function App() {
  const dispatch = useDispatch();

  // find the slice in store.js
  const lorem = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(getLorem());
  }, []);

  return <div> {JSON.stringify(lorem)}</div>;
}

export default App;
