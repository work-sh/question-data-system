import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/analytic/conversion/ocr")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/analytic/conversion/ocr"!</div>;
}
