import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { inviteQueryOptions } from "../queries/inviteQuery";

export const Route = createFileRoute("/invite/$inviteId")({
  component: Invite,
  validateSearch: (search) =>
    search as {
      codeId: string;
    },
  loaderDeps: ({ search: { codeId } }) => ({
    codeId,
  }),
  loader: async ({ context, params: { inviteId }, deps: { codeId } }) => {
    const queryClient = context.queryClient;
    queryClient.prefetchQuery(inviteQueryOptions(inviteId, codeId));
  },
  onError: ({ error }) => {
    console.error(error);
  },
  errorComponent: () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Oops Error</h1>
      </div>
    );
  },
});

function Invite() {
  const { inviteId } = Route.useParams();
  const { codeId } = Route.useSearch();
  const { data } = useSuspenseQuery(inviteQueryOptions(inviteId, codeId));
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Invite Page</h1>
      <p className="text-lg">Invite ID: {inviteId}</p>
      <p className="text-lg">Invite Name: {data.name}</p>
    </div>
  );
}
