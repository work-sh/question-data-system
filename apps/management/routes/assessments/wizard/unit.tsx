import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/assessments/wizard/unit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/assessments/wizard/unit"!</div>
}
