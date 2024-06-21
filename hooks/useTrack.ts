import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { TrackService } from "@/store/services/track";

export const useSaveTrack = (trackIds: Array<string>) => {
  const queryClient = useQueryClient();

  const { data: isSaved } = useQuery({
    queryKey: ["user-library", trackIds],
    queryFn: () => TrackService.checkIfTracksInLibrary(trackIds),
  });

  const { mutate: saveTrack } = useMutation({
    mutationKey: ["add-user-library"],
    mutationFn: (variables: string[]) => TrackService.saveTracks(variables),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["user-library", variables],
      });
    },
  });

  const { mutate: unSaveTrack } = useMutation({
    mutationKey: ["remove-user-library"],
    mutationFn: (variables: string[]) => TrackService.removeTracks(variables),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["user-library"],
        type: "all",
      });
    },
  });

  return {
    isSaved,
    saveTrack,
    unSaveTrack,
  };
};
