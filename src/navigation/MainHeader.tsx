import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import UpcomingSessions from '../sessions/UpcomingSessions.tsx';
import Button from '../UI/Button.tsx';

const MainHeader = () => {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  function showUpcomingSessions() {
    setUpcomingSessionsVisible(true);
  }

  function hideUpcomingSessions() {
    setUpcomingSessionsVisible(false);
  }

  return (
    <>
      {upcomingSessionsVisible && <UpcomingSessions onClose={hideUpcomingSessions} />}
      <header id='main-header'>
        <h1>React Mentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink to='/' className = {(isActive) => isActive ? 'active' : '' } >Our mission</NavLink>
            </li>
            <li>
              <NavLink to='/sessions' className = {(isActive) => isActive ? 'active' : ''}>Browse Sessions</NavLink>
            </li>
            <li>
              <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>

      </header>
    </>
  );
}

export default MainHeader;