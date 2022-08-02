import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [grocery, setGrocery] = useState("");
  const [groceryList, setGroceryList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [alert, setAlert] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (grocery) {
      if (!isEdit) {
        setGroceryList([
          ...groceryList,
          { id: new Date().getTime().toString(), title: grocery },
        ]);
        setAlert("item added");
      } else {
        setGroceryList(
          groceryList.map((item) => {
            if (item.id === editId) {
              return { ...item, title: grocery };
            } else {
              return { ...item };
            }
          })
        );
        setIsEdit(false);
        setEditId("");
        setAlert("item updated");
      }
    }
    setGrocery("");
  };

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("groceryList"));
    if (savedList.length !== 0) {
      setGroceryList(savedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
  }, [groceryList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert("");
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  });

  const clearItems = () => {
    setGroceryList([]);
    setAlert("items cleared");
  };
  const deleteItem = (id) => {
    setGroceryList(groceryList.filter((item) => item.id !== id));
    setAlert("item removed");
  };
  const setEdit = (id, title) => {
    setEditId(id);
    setIsEdit(true);
    setGrocery(title);
  };
  return (
    <section className="section-center">
      <form className="grocery-form">
        {alert && (
          <p
            className={
              alert === "item added" || "item updated"
                ? "alert alert-success"
                : "alert alert-danger"
            }
          >
            {alert}
          </p>
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="ex:tomatoes"
            value={grocery}
            onChange={(e) => setGrocery(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            {isEdit ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {groceryList.length ? (
        <List
          groceryList={groceryList}
          clearItems={clearItems}
          deleteItem={deleteItem}
          setEdit={setEdit}
        />
      ) : null}
    </section>
  );
}

export default App;
