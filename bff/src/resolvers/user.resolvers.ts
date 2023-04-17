import { UserService } from "@domain/user.service";
import { SignUpResponse, VerifyJwtResponse } from "@proto/user_mgmt_pb";
import { SignUpRequest, VerifyJwtRequest } from "src/types";

export const signUp = async (
  _: unknown,
  { data: { username, email, password } }: SignUpRequest
): Promise<SignUpResponse.AsObject> => {
  return UserService.signUp(username, email, password);
};

export const verifyJwt = async (
  _: unknown,
  { data: { token } }: VerifyJwtRequest
): Promise<VerifyJwtResponse.AsObject> => {
  return UserService.verifyJwt(token);
};
