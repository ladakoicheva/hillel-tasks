import React from "react";
import SmileItem from "./SmileItem";

export default function SmileList({ list = [], onVote }) {
  return (
    <>
      {list.length === 0 && (
        <span className="loading-message">Завантаження смайликів...</span>
      )}
      {list.length > 0 && (
        <ul className="smile-list">
          {list.map((item) => (
            <SmileItem onVote={onVote} data={item} key={item.id} />
          ))}
        </ul>
      )}
    </>
  );
}
