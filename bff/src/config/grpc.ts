import { credentials } from "@grpc/grpc-js";
import { ArticleSvcClient } from "@proto/article_svc_grpc_pb";
import { UserMgmtClient } from "@proto/user_mgmt_grpc_pb";

const cred = credentials.createInsecure();

export const articleGrpcClient = new ArticleSvcClient("localhost:8081", cred);
export const userGrpcClient = new UserMgmtClient("localhost:8080", cred);
