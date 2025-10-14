import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/my-account/profile/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/my-account/profile/edit"!</div>
}
