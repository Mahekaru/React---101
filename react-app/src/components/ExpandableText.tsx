import { set } from 'immer/dist/internal';
import React, { useState } from 'react'
import { ReactNode } from "react";

interface Props {
    maxChars?: number;
    children: string;
    onClick: () => void;
}
const ExpandableText = ({onClick, maxChars = 100, children = ""}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = children.length <= maxChars ? children : isExpanded ? children : children.substring(0, maxChars) + '...';
  return (
    <>
      <div>{text}</div>
      <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button>
    </>
    
  )
}

export default ExpandableText