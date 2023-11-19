import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { createUserAccount, signINAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccuontMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signINAccount(user),
  });
};
