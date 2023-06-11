import { Button, Form, Input, Radio, Select } from "antd";
import { useNavigate } from "react-router-dom";

export const UserForm = (props) => {
  let navigate = useNavigate();

  const onFinish = async (values) => {
    await fetch(props.url, {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((json) => {});
    let path = `/`;
    navigate(path);
  };
  const onFinishFailed = (errorInfo) => {};

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={props.user}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="firstname"
        rules={[
          {
            required: true,
            message: "Please input user's firstname!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[
          {
            required: true,
            message: "Please input user's lastname!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input user's email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mobile No."
        name="mobile"
        rules={[
          {
            required: true,
            message: "Please input user's mobile!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Location"
        name="location"
        rules={[
          {
            required: true,
            message: "Please input user's location!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="gender"
        rules={[
          {
            required: true,
            message: "Please select user's gender!",
          },
        ]}
      >
        <Radio.Group>
          <Radio value="Male">Male</Radio>
          <Radio value="Female">Female</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Select status"
        name="status"
        rules={[
          {
            required: true,
            message: "Please select user's status!",
          },
        ]}
      >
        <Select>
          <Select.Option value="Inactive">Inactive</Select.Option>
          <Select.Option value="Active">Active</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
