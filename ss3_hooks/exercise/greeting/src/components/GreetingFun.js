import { useEffect, useState } from "react";

export function GreetingFun() {
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );

  useEffect(() => {
    localStorage.setItem("FirstName", firstName);
    localStorage.setItem("LastName", lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>
        Hello,{" "}
        <span>
          {firstName} {lastName}
        </span>
      </p>
    </div>
  );
}
