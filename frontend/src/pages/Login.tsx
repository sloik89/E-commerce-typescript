import {
  redirect,
  Link,
  Form,
  ActionFunction,
  useNavigate,
} from "react-router-dom";
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { customFetch } from "@/utilis";
import { useDispatch } from "react-redux";
import { type ReduxStore } from "@/store";
import { loginUser } from "@/features/user/userSlice";
import { FormInput, SubmitBtn } from "@/components";
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const res = await customFetch.post("/auth/login", data);
      console.log(res);
      // dispatch action from store in fuction
      store.dispatch(loginUser(res.data.user));
      return redirect("/products");
    } catch (err) {
      console.log(err);
    }
    return null;
  };
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleTestUser = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    const userCredential = {
      email: "test1@gmail.com",
      password: "secret",
    };
    const res = await customFetch.post("/auth/login", userCredential);
    dispatch(loginUser(res.data.user));
    console.log(res);

    navigate("/products");
  };
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="POST">
            <FormInput
              type="email"
              label="email"
              name="email"
              defaultValue="test1@gmail.com"
            />
            <FormInput
              type="password"
              label="password"
              name="password"
              defaultValue="secret"
            />
            <Button
              className="w-full"
              variant="default"
              onClick={handleTestUser}
            >
              Test user
            </Button>
            <SubmitBtn className="w-full mt-4" text="Login" />
            <p className="text-center mt-4">
              You dont have a account?{" "}
              <Button type="button" asChild variant="link">
                <Link to="/register">Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;
