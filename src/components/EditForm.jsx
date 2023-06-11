import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserForm } from "./UserForm";
import { url } from "./constant";

export const EditForm = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("_id");
  const [user, setUser] = useState();

  const fetchUser = async (id) => {
    const data = await fetch(`http://${url}/view?_id=${id}`);
    const json = await data.json();
    json.user.gender = `${json.user.gender}`;
    json.user.status = `${json.user.status}`;
    setUser(json.user);
  };
  useEffect(() => {
    if (id) {
      fetchUser(id);
    }
  }, [id]);

  return (
    <>
      <h2>Register your details</h2>
      <div className="form">
        {user ? (
          <UserForm user={user} url={`http://${url}/form?_id=${id}`} />
        ) : (
          <div>Fetching user</div>
        )}
      </div>
    </>
  );
};
