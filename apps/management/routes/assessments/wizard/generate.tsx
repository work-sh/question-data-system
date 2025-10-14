import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/assessments/wizard/generate')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/assessments/wizard/generate"!</div>
}
