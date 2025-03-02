import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import useAuth from "@/hooks/useAuth";

export const Route = createFileRoute("/__root/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSignUp) {
      console.log("Method not implemented here");
      alert("Method not implemented here");
    } else {
      const success = await login(email, password);
      if (success) {
        navigate({ to: "/dashboard" });
      } else {
        alert("Invalid credentials");
      }
    }

    console.log("Form submitted for", isSignUp ? "sign up" : "sign in");
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[90%] max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full cursor-pointer">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          <div className="flex items-center space-x-2 my-4">
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            <span className="text-zinc-400 dark:text-zinc-300 text-sm">
              Or Continue With
            </span>
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full cursor-pointer"
          >
            {isSignUp ? "Sign up" : "Sign in"} with Google
          </Button>
        </CardContent>
        <CardFooter>
          <div className="text-center text-sm w-full">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <Button
              variant="link"
              onClick={toggleMode}
              className="cursor-pointer p-0"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
