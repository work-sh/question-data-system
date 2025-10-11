import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/my-page/scrap')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/my-page/scrap"!</div>
}
