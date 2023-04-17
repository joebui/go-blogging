import { SignUpResponse, VerifyJwtResponse } from "@proto/user_mgmt_pb";
import { UserMgmtRepository } from "@repository/user-mgmt.repository";

export namespace UserService {
  export const signUp = (
    username: string,
    email: string,
    password: string
  ): Promise<SignUpResponse.AsObject> => {
    return UserMgmtRepository.signUp(username, email, password);
  };

  export const verifyJwt = (
    token: string
  ): Promise<VerifyJwtResponse.AsObject> => {
    return UserMgmtRepository.verifyJwt(token);
  };
}
