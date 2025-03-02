import { createFileRoute, useNavigate } from "@tanstack/react-router";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_protected/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h3>Welcome Dashboard!</h3>
      <Button onClick={handleLogout} className="cursor-pointer">
        Logout
      </Button>
    </div>
  );
}
