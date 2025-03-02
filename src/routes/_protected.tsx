import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  beforeLoad: async ({ context }) => {
    const { isAuthenticated } = context.authentication;
    if (!isAuthenticated) {
      throw redirect({ to: "/auth" });
    }
    return {};
  },
  component: ProtectedLayout,
});

function ProtectedLayout() {
  return (
    <div>
      <h3>Welcome to the protected area</h3>
      <Outlet />
    </div>
  );
}
