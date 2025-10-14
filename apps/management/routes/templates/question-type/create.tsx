import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/templates/question-type/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/templates/question-type/create"!</div>
}
