import { useState } from "react";
import "./App.css";

// Завдання 3: Компоненти та props
function UserCard({ name, role }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px 0', borderRadius: '4px' }}>
      <b>{name}</b> — {role}
    </div>
  );
}

// Завдання 4: State та useState
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginBottom: '15px' }}>
      <h3>Завдання 4: Лічильник: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '5px' }}>Reset</button>
    </div>
  );
}

// Завдання 5: Події в React
function ClickButton() {
  const handleClick = () => {
    alert("Кнопку натиснуто!");
  };
  return (
    <div style={{ marginBottom: '15px' }}>
      <h3>Завдання 5: Події</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// Завдання 6: Списки та key
function FruitsList() {
  const fruits = ["Apple", "Banana", "Orange"];
  return (
    <div style={{ marginBottom: '15px' }}>
      <h3>Завдання 6: Списки</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// Завдання 7: Умовний рендеринг
function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div style={{ marginBottom: '15px' }}>
      <h3>Завдання 7: Умовний рендеринг</h3>
      {isLoggedIn ? <p>Ви увійшли</p> : <p>Увійдіть у систему</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Вийти' : 'Увійти'}
      </button>
    </div>
  );
}

// Завдання 8: Комплексне завдання: Mini ToDo List
function ToDoList() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All"); // All, Active, Done

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "Active") return !task.done;
    if (filter === "Done") return task.done;
    return true; // All
  });

  return (
    <div style={{ border: '2px solid #646cff', padding: '20px', borderRadius: '8px' }}>
      <h2>Завдання 8: Mini ToDo List</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Нова задача..."
          style={{ padding: '8px', marginRight: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <button 
          onClick={() => setFilter("All")} 
          style={{ fontWeight: filter === "All" ? 'bold' : 'normal', marginRight: '5px' }}>
          All
        </button>
        <button 
          onClick={() => setFilter("Active")} 
          style={{ fontWeight: filter === "Active" ? 'bold' : 'normal', marginRight: '5px' }}>
          Active
        </button>
        <button 
          onClick={() => setFilter("Done")} 
          style={{ fontWeight: filter === "Done" ? 'bold' : 'normal' }}>
          Done
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredTasks.map(task => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', background: '#f9f9f9', padding: '8px', borderRadius: '4px' }}>
            <input 
              type="checkbox" 
              checked={task.done} 
              onChange={() => toggleTask(task.id)} 
              style={{ marginRight: '10px', cursor: 'pointer' }}
            />
            <span 
              onClick={() => toggleTask(task.id)} 
              style={{ 
                textDecoration: task.done ? "line-through" : "none",
                cursor: 'pointer',
                flexGrow: 1,
                color: task.done ? '#888' : '#000',
                textAlign: 'left'
              }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} style={{ marginLeft: '10px', padding: '4px 8px', background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              x
            </button>
          </li>
        ))}
        {filteredTasks.length === 0 && <p style={{ color: '#888' }}>Немає задач</p>}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center' }}>Практична робота №9</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>React + Vite — компоненти, props, state, події</p>
      <hr />
      
      <h3>Завдання 3: Компоненти та props</h3>
      <UserCard name="Іван" role="Student" />
      <UserCard name="Олена" role="Teacher" />
      <hr />

      <Counter />
      <hr />

      <ClickButton />
      <hr />

      <FruitsList />
      <hr />

      <LoginStatus />
      <hr />

      <ToDoList />
    </div>
  );
}
