import React from 'react';

const generateColumns = () => {
  const columns = [];
  for (let n = 1; n <= 80; n++) {
    const rows = [];
    for (let i = 1; i <= 50; i++) {
      const value = Math.random() > 0.5 ? '1' : '0';
      rows.push(<span key={i} style={{ animationDuration: `${Math.random() * 4 + 1}s`, animationDelay: `${i * 0.02}s` }}>{value}</span>);
    }
    columns.push(<div key={n} className={`column col-${n}`}>{rows}</div>);
  }
  return columns;
};

const CodeMatrix: React.FC = () => {
    return (

<div className="codematrix wrapper column ">
        {generateColumns()}
      </div>
       );
    };
    
export default CodeMatrix;