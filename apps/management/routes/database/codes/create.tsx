import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/database/codes/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/database/codes/create"!</div>
}
