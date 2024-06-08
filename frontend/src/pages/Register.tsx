import { redirect, Link, Form, ActionFunction } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { customFetch } from "@/utilis";
import { FormInput } from "@/components";
// /api/auth/register
export const action: ActionFunction = async ({ request }): Promise<null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const res = await customFetch.post("/auth/register", data);
    console.log(res);
  } catch (err) {
    const resError =
      err instanceof AxiosError ? err.response?.data.msg : "Register Failed";
    console.log(resError);
    toast({ description: resError });
  }
  console.log(data);
  return null;
};
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="POST">
            <FormInput
              type="text"
              label="username"
              name="name"
              defaultValue="test"
            />
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
              Already a member?{" "}
              <Button type="button" asChild variant="link">
                <Link to="/login">Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Register;
