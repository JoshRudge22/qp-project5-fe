import React, { useState, useEffect } from 'react';
import goalsStyles from '../styles/Goals.module.css';

const GoalsPage = () => {
  const [goal, setGoal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [goals, setGoals] = useState([]);

  // Fetch goals from backend API
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch('/api/goals/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGoals(data);
      } catch (error) {
        console.error('Error fetching goals:', error);
        // Handle error gracefully (e.g., display an error message)
      }
    };
    fetchGoals();
  }, []);

  const addGoal = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/goals/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include authentication headers if required (e.g., JWT)
        },
        body: JSON.stringify({ 
          title: goal, 
          startDate: startDate, 
          endDate: endDate 
        }), 
      });

      if (!response.ok) {
        throw new Error('Failed to add goal');
      }

      const newGoal = await response.json();
      setGoals([...goals, newGoal]);
      setGoal('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      console.error('Error adding goal:', error);
      // Handle error gracefully (e.g., display an error message)
    }
  };

  return (
    <div className={goalsStyles.container}>
      <div className={goalsStyles.leftPanel}>
        <h1 className={goalsStyles.title}>Add New Goal</h1>
        <form onSubmit={addGoal} className={goalsStyles.form}>
          <div className={goalsStyles.formGroup}>
            <label htmlFor="goal" className={goalsStyles.label}>
              Goal:
            </label>
            <input 
              type="text" 
              id="goal" 
              placeholder="Enter a new goal" 
              value={goal} 
              onChange={(e) => setGoal(e.target.value)} 
              className={goalsStyles.input} 
            />
          </div>
          <div className={goalsStyles.formGroup}>
            <label htmlFor="startDate" className={goalsStyles.label}>
              Start Date:
            </label>
            <input 
              type="date" 
              id="startDate" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)} 
              className={goalsStyles.dateInput} 
            />
          </div>
          <div className={goalsStyles.formGroup}>
            <label htmlFor="endDate" className={goalsStyles.label}>
              End Date:
            </label>
            <input 
              type="date" 
              id="endDate" 
              value={endDate} 
              onChange={(e) => setEndDate(e.target.value)} 
              className={goalsStyles.dateInput} 
            />
          </div>
          <button type="submit" className={goalsStyles.addButton}>
            Add Goal
          </button>
        </form>
      </div>
      <div className={goalsStyles.rightPanel}>
        <h2 className={goalsStyles.subtitle}>Your Current Goals</h2>
        {goals.length > 0 ? (
          <ul className={goalsStyles.goalList}>
            {goals.map((goal) => (
              <li key={goal.id} className={goalsStyles.goalItem}>
                <span className={goalsStyles.goalTitle}>{goal.title}</span> 
                <span className={goalsStyles.goalDates}> 
                  Start: {goal.startDate} - Due: {goal.endDate} 
                </span>
                <span 
                  className={goalsStyles.goalStatus} 
                  style={{ 
                    color: goal.progress === 100 
                      ? 'green' 
                      : goal.progress > 0 
                        ? 'orange' 
                        : 'red' 
                  }}
                >
                  {goal.progress === 100 
                    ? 'Completed' 
                    : goal.progress > 0 
                      ? 'In Progress' 
                      : 'Not Started'} 
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={goalsStyles.noGoalsMessage}>No goals available.</p>
        )}
      </div>
    </div>
  );
};

export default GoalsPage;