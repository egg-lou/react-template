import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__root/")({
  component: Index,
});

function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3>Welcome Home!</h3>
    </div>
  );
}
