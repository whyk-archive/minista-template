import React from 'react';

interface Props {
  type?: 'button' | 'blank';
  href: string;
  children: React.ReactNode
}

export const Link: React.VFC<Props> = ({type, href, children}) => {
  if (type === 'button') return (<a href={href}>{children}</a>)
  if (type === 'blank') return (<a href={href} target="_blank" rel="noopener noreferrer">{children}</a>)
  return (<a href={href}>{children}</a>)
}
