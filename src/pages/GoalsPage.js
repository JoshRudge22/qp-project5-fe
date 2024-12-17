import React, { useState } from 'react';

const GoalsPage = () => {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = (e) => {
    e.preventDefault();
    setGoals([...goals, goal]);
    setGoal('');
  };

  return (
    <div>
      <h1>Your Goals</h1>
      <form onSubmit={addGoal}>
        <input
          type="text"
          placeholder="Enter a new goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {goals.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsPage;