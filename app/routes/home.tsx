import type { Route } from "./+types/home";
import MainPage from "~/pages/main/mainPage";


export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <MainPage/>
  );
}
