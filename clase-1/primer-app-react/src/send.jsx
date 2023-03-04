import { useState } from "react";
export const Send = () => {
  const [form, setForm] = useState();
  const submit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      };

      const res = await fetch("asdasdasd/asdasd.php", config);
      console.log(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Send</h1>
      <form onSubmit={submit}>
        <input type="text" name="prueba1" onChange={handelChange} />
        <input type="text" name="prueba2" onChange={handelChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
