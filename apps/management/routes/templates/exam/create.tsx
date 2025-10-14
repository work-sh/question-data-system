import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/templates/exam/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/templates/exam/create"!</div>
}
