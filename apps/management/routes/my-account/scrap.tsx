import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/my-account/scrap")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/my-page/scrap"!</div>;
}
