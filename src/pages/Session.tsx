import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { SESSIONS } from '../dummy-sessions.ts';
import Button from '../UI/Button.tsx';
import BookSession from '../sessions/BookSession.tsx';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [isBooking, setIsBooking] = useState(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  const handleStartBooking = () => {
    setIsBooking(true);
  }

  const handleStopBooking = () => {
    setIsBooking(false);
  }


  return (
    <main id="session-page">
      {isBooking && (
        <BookSession session={loadedSession} onDone={handleStopBooking} />
      )}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button onClick={handleStartBooking}>Book session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
