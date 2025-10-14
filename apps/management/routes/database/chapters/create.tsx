import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/database/chapters/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/database/chapters/create"!</div>
}
