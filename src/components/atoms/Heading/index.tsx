import React from 'react';

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

export const Heading: React.VFC<Props> = ({level, children}) => {
  if (level === 1) return (<h1>{children}</h1>)
  else if (level === 2) return (<h2>{children}</h2>)
  else if (level === 3) return (<h3>{children}</h3>)
  else if (level === 4) return (<h4>{children}</h4>)
  else if (level === 5) return (<h5>{children}</h5>)
  else return (<h6>{children}</h6>)
}