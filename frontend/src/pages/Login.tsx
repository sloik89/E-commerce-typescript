import { redirect, Link, Form, ActionFunction } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { customFetch } from "@/utilis";
import { useDispatch } from "react-redux";
import { type ReduxStore } from "@/store";
import { loginUser } from "@/features/user/userSlice";
import { FormInput } from "@/components";
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);
    console.log(request);
    try {
      const res = await customFetch.post("/auth/login", data);
      console.log(res);
      store.dispatch(loginUser(res.data.user));
      return redirect("/products");
    } catch (err) {
      console.log(err);
    }
    return null;
  };
const Login = () => {
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
            <Button className="w-full" type="submit" variant="default">
              Submit
            </Button>
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
