import { useState } from "react";
import "./ProductForm";

function ProductForm(props) {
  // handling multiple states
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");

  //   const [newValues, setNewValues] = useState({
  //     newTitle: "",
  //     newDate: "",
  //   });

  function titleChangeHandler(event) {
    //console.log(event);
    setTitle(event.target.value);
    //console.log(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    // prevent default behaviour
    event.preventDefault();

    const productData = {
      title: newTitle,
      date: newDate,
    };

    //console.log(productData);
    props.onSaveProduct(productData);

    // after form submission the form inputs will again be empty.
    setTitle("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-product_controls">
        <div className="new-product_control">
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-product_control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            onChange={dateChangeHandler}
            min="2023-01-01"
            max="2023-12-12"
          ></input>
        </div>
        <div className="new-product_button">
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
