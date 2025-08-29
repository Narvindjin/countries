import DetailPage from "~/pages/detail/detailPage";
import type { Route } from "./+types/detail-page";

export default function Details({ loaderData }: Route.ComponentProps) {
  return (
    <DetailPage/>
  );
}