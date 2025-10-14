import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/assessments/wizard/question-type')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/assessments/wizard/question-type"!</div>
}
