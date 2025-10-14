import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/database/textbooks/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/database/textbooks/create"!</div>
}
