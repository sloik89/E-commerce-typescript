import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Button } from "./components/ui/button";
type Products = {};
function App() {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [items, setItems] = useState([]);
  console.log(items);
  const loggin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sss");
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password: pswd,
      });
      console.log(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/products");
        console.log(res);
        setItems(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <form onSubmit={(e) => loggin(e)}>
        <h1 className="text-4xl">xxxxxx</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <input
          type="text"
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
        />
        <Button type="submit">Send</Button>
        <div className="items">
          {items?.map((item) => {
            return <img src={item.image}></img>;
          })}
        </div>
      </form>
    </>
  );
}

export default App;
