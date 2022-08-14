import React, { useLayoutEffect, useState } from 'react';
import {
  Div,
  ButtonPink,
  ButtonDark,
  Li,
  ButtonGrin,
  ButtonViolet,
} from './Topics.styled';

const TOPICS__KEY = 'topics';

export const Topics = () => {
  const [topics, setTopics] = useState(
    () => JSON.parse(window.localStorage.getItem(TOPICS__KEY)) ?? 'dark'
  );

  useLayoutEffect(() => {
    localStorage.setItem(TOPICS__KEY, JSON.stringify(topics));
    document.documentElement.setAttribute('data-topics', topics);
  }, [topics]);
  return (
    <Div>
      <ul>
        <Li>
          <ButtonPink onClick={() => setTopics('pink')} />
        </Li>
        <Li>
          <ButtonDark onClick={() => setTopics('dark')} />
        </Li>
        <Li>
          <ButtonGrin onClick={() => setTopics('grin')} />
        </Li>
        <Li>
          <ButtonViolet onClick={() => setTopics('violet')} />
        </Li>
      </ul>
    </Div>
  );
};
