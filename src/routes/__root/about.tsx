import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__root/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3>Welcome About!</h3>
    </div>
  );
}
