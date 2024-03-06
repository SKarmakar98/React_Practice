import React, { useState } from "react";
// import FontAwesomeIcon from "FontAwesomeIcon";
import moon from "../images/moon.png"
import sun from "../images/sun.png"
export default function Form() {
  let colours = { color: "White", backgroundColor: "black" };
  let [text, Settext] = useState("Enter Your Text");
  let [bg_black, bg_white] = useState({ color: "White", backgroundColor: "black" });
  let [b_text, b_text_black] = useState({moon});
  // console.log({moon});
  // console.log({b_text});
  // text change and text cases
  let ChangeValur = () => {
    let uppertext = text.toUpperCase();
    Settext(uppertext);
  };
  let ChangeValu_lower = () => {
    let uppertext = text.toLowerCase();
    Settext(uppertext);
  };
  let changetext = (event) => {
    Settext(event.target.value);
  };
  let clear = () => {
    Settext("");
  };
  // text change and text cases

  //   bg colour change
  //   debugger;
  let bgbtn_text_change = () => {
    // alert("test");
    console.log(colours.color);
    if (bg_black.backgroundColor == "black") {
    //   bg_white({ color: "white", backgroundColor: "w" });
      bg_white({ color: "black", backgroundColor: "white " });
      b_text_black({sun})
    } else {
        bg_white({color: "White", backgroundColor: "black" });
        b_text_black({sun})
    }
  };
  //   bg colour change
  // console.log(b_text+"test")
  return (
    <div style={bg_black}>
      <button style={{ borderRadius: "50%" ,float:"left",border:'none',background:'none'}} onClick={bgbtn_text_change}>
        {/* {b_text} */}
       <img src={moon} style={{height:'20px',width:'20px',alignItems:'center'}}/>
      </button>
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
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-2 m-2"
          onClick={ChangeValur}
        >
          Upper Case
        </button>
        <button
          type="submit"
          className="btn btn-primary mt-2 m-2"
          onClick={ChangeValu_lower}
        >
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
