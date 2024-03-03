import React, { useState } from "react";

export default function Form() {
  let [text, Settext] = useState("Enter Your Text");
  let ChangeValur = () => {
    let uppertext = text.toUpperCase();
    Settext(uppertext);
  };
  let changetext = (event) => {
    Settext(event.target.value);
  };
  let clear = () => {
    Settext("");
  };
  return (
    <div>
      <div
        className="container
"
      >
        <div className="form-group">
          <label>Email address</label>
          <textarea
            rows={8}
            className="form-control input_area"
            value={text}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={text}
            onChange={changetext}
          />
          {/* <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small> */}
        </div>
        {/* <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div> */}
        {/* <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div> */}
        <button
          type="submit"
          className="btn btn-primary mt-2 m-2"
          onClick={ChangeValur}
        >
          Upper Case
        </button>
        <button type="submit" className="btn btn-primary mt-2 m-2">
          Lower Case
        </button>
        <button
          type="submit"
          className="btn btn-primary mt-2 m-2"
          onClick={clear}
        >
          Clear
        </button>
        <h3> Text Length {text.length}</h3>
        <h3> Text Length {text.split(" ").length}</h3>
      </div>
    </div>
  );
}
