import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/assessments/wizard/review')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/assessments/wizard/review"!</div>
}
