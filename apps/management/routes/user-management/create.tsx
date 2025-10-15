import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user-management/create")({
  component: RouteComponent,
  meta: {
    breadcrumb: () => "생성",
  },
});

function RouteComponent() {
  return <div>Hello "/user-management/create"!</div>;
}
