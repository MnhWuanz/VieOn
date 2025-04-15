import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import Child from "./Child";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChangeData = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log({ formData });
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://67dfd0d47635238f9aaadbe8.mockapi.io/SE150197"
      );
      console.log({ response });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="username"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="password"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {/* <button onClick={() => handleLogin()}>Login</button> */}
          <Child formDataProps={formData} setFormDataProps={setFormData} />
        </div>
      )}
    </>
  );
};

export default Register;
