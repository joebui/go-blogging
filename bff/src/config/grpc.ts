import { credentials } from "@grpc/grpc-js";
import grpcService from "@proto/article_svc_grpc_pb";

const cred = credentials.createInsecure();

export const articleGrpcClient = new grpcService.ArticleSvcClient("localhost:8081", cred);
