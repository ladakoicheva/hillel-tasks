import React from "react";

export default function SmileItem({ data, onVote }) {
  const handleClick = () => {
    onVote(data.id);
  };
  return (
    <li onClick={handleClick} className="smile-item">
      <span className="smile-item-icon">{data.smile}</span>
      <span className="smile-item-content">{data.content}</span>
    </li>
  );
}
