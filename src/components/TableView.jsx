import { Space, Table, Tag, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Button } from "antd";

export const TableView = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [status, setStatus] = useState("");
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
      render: (_, record) => (
        <span>
          {record.firstname} {record.lastname}
        </span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const items = [
          {
            label: <a href={`form?_id=${record._id}`}>Edit</a>,
            key: "0",
          },
          {
            label: <a href={`view?_id=${record._id}`}>View</a>,
            key: "1",
          },
          {
            label: (
              <button onClick={() => handleDelete(record._id)}>Delete</button>
            ),
            key: "2",
          },
        ];
        return (
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Click me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        );
      },
    },
  ];

  const apiCall = () => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((res) => {
        const users = res.users.map((ele, key) => {
          ele.id = key + 1;
          return ele;
        });
        setData(users);
      });
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/delete`, {
      method: "delete",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setStatus(res));
  };

  const handleSearch = () => {
    fetch(`http://localhost:8000?search=${search}`)
      .then((res) => res.json())
      .then((res) => {
        const users = res.users.map((ele, key) => {
          ele.id = key + 1;
          return ele;
        });
        setData(users);
      });
  };

  useEffect(() => {
    apiCall();
  }, [status]);
  return (
    <>
      <div className="header">
        <div className="search">
          <input onChange={(e) => setSearch(e.target.value)} />
          <Button type="primary" danger onClick={handleSearch}>
            Search
          </Button>
        </div>
        <div className="add">
          <Button type="primary" danger>
            <a href="/form">Add User</a>
          </Button>
          <Button type="primary" danger>
            <a href={`http://localhost:8000/export?search=${search}`} download>
              Export csv
            </a>
          </Button>
        </div>
      </div>

      <div className="table">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
        />
        ;
      </div>
    </>
  );
};
