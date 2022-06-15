import { useState } from "react";
import Data from "./data.json";
import "./style.css";

export default function App() {
  const [index, setIndex] = useState(0);
  const arr = Data.tabs;
  const col = Data.tabs.length;

  return (
    <>
      <section className="main">
        <section className="tab_head">
          {arr &&
            arr.map((e) => {
              return (
                <div key={e.id}>
                  <button onClick={() => setIndex(e.id)}>{e.name}</button>
                </div>
              );
            })}
        </section>
        <br />
        <br />
        {arr &&
          arr.map((e) => {
            return (
              <div className="tab-content" key={e.id} hidden={index != e.id}>
                <h2>{e.name}</h2>
                <p>{e.text}</p>
              </div>
            );
          })}
      </section>
    </>
  );
}
