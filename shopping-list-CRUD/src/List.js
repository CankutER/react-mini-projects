import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ groceryList, clearItems, deleteItem, setEdit }) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {groceryList.map((grocery) => {
          const { id, title } = grocery;
          return (
            <article key={id} className="grocery-item">
              <p className="title">{title}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => setEdit(id, title)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <button className="clear-btn" onClick={clearItems}>
        clear items
      </button>
    </div>
  );
};

export default List;
