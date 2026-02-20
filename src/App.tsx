import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // создаем счетчик с начальным значением 100
  const [counter, setCounter] = useState<number>(100);

  useEffect(() => {
    // вывод текущей даты и времени в консоль
    const currentDate = new Date();
    console.log('Страница загружена/обновлена. Время:', currentDate.toLocaleString());
    
    // сброс счетчика на 100
    setCounter(100);
  }, []); 

  // отслеживание изменений счетчика
  useEffect(() => {
    console.log('Текущее значение счетчика:', counter);
  }, [counter]); // эффект будет срабатывать при каждом изменении counter

  // кнопочки
  const handleAdd = () => {
    setCounter(prevCounter => prevCounter + 5);
  };

  const handleSubtract = () => {
    setCounter(prevCounter => prevCounter - 5);
  };

  const handleMultiply = () => {
    setCounter(prevCounter => prevCounter * 5);
  };

  const handleDivide = () => {
    setCounter(prevCounter => prevCounter / 5);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Калькулятор</h1>
        
        {/* текущее значение счетчика */}
        <h2>Счетчик: {counter}</h2>
        
        {/* кнопки управления */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button onClick={handleAdd} className="calc-button">+5</button>
          <button onClick={handleSubtract} className="calc-button">-5</button>
          <button onClick={handleMultiply} className="calc-button">×5</button>
          <button onClick={handleDivide} className="calc-button">÷5</button>
        </div>
      </header>
    </div>
  );
}

export default App;