import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/assessments/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/assessments/create"!</div>;
}
