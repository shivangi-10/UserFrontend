import { Descriptions } from "antd";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { url } from "./constant";

export const ViewUser = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("_id");
  const [user, setUser] = useState();

  const fetchUser = async (id) => {
    const data = await fetch(`http://${url}/view?_id=${id}`);
    const json = await data.json();
    setUser(json.user);
  };
  useEffect(() => {
    if (id) {
      fetchUser(id);
    }
  }, [id]);

  return (
    <div>
      {user ? (
        <Descriptions
          title="User Details"
          bordered
          column={{
            xxl: 4,
            xl: 3,
            lg: 3,
            md: 3,
            sm: 2,
            xs: 1,
          }}
        >
          <Descriptions.Item label="First Name">
            {user.firstname}
          </Descriptions.Item>
          <Descriptions.Item label="Last Name">
            {user.lastname}
          </Descriptions.Item>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          <Descriptions.Item label="Mobile no">{user.mobile}</Descriptions.Item>
          <Descriptions.Item label="Gender">{user.gender}</Descriptions.Item>
          <Descriptions.Item label="Location">
            {user.location}
          </Descriptions.Item>
          <Descriptions.Item label="Status">{user.status}</Descriptions.Item>
          <Descriptions.Item label="Profile">
            {user.firstname}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <div>Fetching user</div>
      )}
    </div>
  );
};
