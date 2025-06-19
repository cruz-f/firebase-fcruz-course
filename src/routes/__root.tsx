import type { FC } from "react";
import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";

const Loading: FC<{ shown: boolean }> = (props) => {
  const { shown } = props;
  const corePosition =
    "fixed left-[50%] top-0 translate-x-[-50%] bg-yellow-300";
  return (
    <div
      style={{
        opacity: shown ? 1 : 0,
        transition: shown ? "opacity 300ms ease-in 20ms" : "",
      }}
      className={`${corePosition} rounded-b px-2 py-1`}
    >
      Loading ...
    </div>
  );
};

type MyRouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root,
});

function Root() {
  const state = useRouterState();
  const isNavigating = state.isLoading;

  return (
    <>
      <Loading shown={isNavigating} />
      <Outlet />
    </>
  );
}
