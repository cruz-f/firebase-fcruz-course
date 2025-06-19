import { fetchInvite } from "../repo/fetchInvite";

export const inviteQueryOptions = (inviteId: string, inviteCode: string) => ({
  queryKey: ["invite", inviteId],
  queryFn: async () => {
    const invite = await fetchInvite(inviteId, inviteCode);
    return invite;
  },
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 5,
});
