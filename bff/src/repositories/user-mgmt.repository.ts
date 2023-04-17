import { userGrpcClient } from "@config/grpc";
import {
  SignUpRequest,
  SignUpResponse,
  VerifyJwtRequest,
  VerifyJwtResponse,
} from "@proto/user_mgmt_pb";
import { promisify } from "util";

export namespace UserMgmtRepository {
  export const signUp = async (
    username: string,
    email: string,
    password: string
  ): Promise<SignUpResponse.AsObject> => {
    const req = new SignUpRequest()
      .setEmail(email)
      .setUsername(username)
      .setPassword(password);

    const response = await promisify<SignUpRequest, SignUpResponse>(
      userGrpcClient.signUp.bind(userGrpcClient)
    )(req);

    return response.toObject();
  };

  export const verifyJwt = async (
    token: string
  ): Promise<VerifyJwtResponse.AsObject> => {
    const req = new VerifyJwtRequest().setToken(token);

    const response = await promisify<VerifyJwtRequest, VerifyJwtResponse>(
      userGrpcClient.verifyJwt.bind(userGrpcClient)
    )(req);

    return response.toObject();
  };
}
