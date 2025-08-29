import NotFound from "~/components/errors/notFound";
import type { Route } from "./+types/not-found";


export default function HiddenPage({ loaderData }: Route.ComponentProps) {
  return (
    <NotFound/>
  );
}