import { Button } from "react-bootstrap";
import React, { useRef } from "react";

export const ContactUs = (props) => {
  //   const person = {
  //     name: "Nilesh",
  //     age: 18,
  //   };
  //   person["ocupation"] = "Engineer";
  //   person.jsgj = "gby"

  //   console.log(person);

  //   console.log(person["name"]);

  //   const onChangeHandler = (e) => {
  //     setObj({ ...obj, [e.target.name]: e.target.value });
  //   };

  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = () => {
    const detailRef = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    console.log(detailRef);
    props.onSubmit(detailRef);
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <form className="text-center">
      <div>
        <label className="mt-5">Name:</label>
        <input type="text" name="name" ref={nameRef} />
      </div>
      <div>
        <label className="mt-5">E-mail Id:</label>
        <input type="email" name="email" ref={emailRef} />
      </div>
      <div>
        <label className="mt-5 mb-4">Phone Number:</label>
        <input type="phone" name="phone number" ref={phoneRef} />
      </div>
      <Button className="mb-2" onClick={submitHandler}>Submit</Button>
    </form>
  );
};
