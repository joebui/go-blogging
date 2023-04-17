// package: proto
// file: user_mgmt.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SignUpRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): SignUpRequest;
    getEmail(): string;
    setEmail(value: string): SignUpRequest;
    getPassword(): string;
    setPassword(value: string): SignUpRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpRequest;
    static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
    export type AsObject = {
        username: string,
        email: string,
        password: string,
    }
}

export class SignInRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): SignInRequest;
    getPassword(): string;
    setPassword(value: string): SignInRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInRequest;
    static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class SignUpResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): SignUpResponse;
    getExpiresIn(): number;
    setExpiresIn(value: number): SignUpResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpResponse): SignUpResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpResponse;
    static deserializeBinaryFromReader(message: SignUpResponse, reader: jspb.BinaryReader): SignUpResponse;
}

export namespace SignUpResponse {
    export type AsObject = {
        token: string,
        expiresIn: number,
    }
}

export class SignInResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): SignInResponse;
    getExpiresIn(): number;
    setExpiresIn(value: number): SignInResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignInResponse): SignInResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInResponse;
    static deserializeBinaryFromReader(message: SignInResponse, reader: jspb.BinaryReader): SignInResponse;
}

export namespace SignInResponse {
    export type AsObject = {
        token: string,
        expiresIn: number,
    }
}

export class VerifyJwtRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): VerifyJwtRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyJwtRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyJwtRequest): VerifyJwtRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyJwtRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyJwtRequest;
    static deserializeBinaryFromReader(message: VerifyJwtRequest, reader: jspb.BinaryReader): VerifyJwtRequest;
}

export namespace VerifyJwtRequest {
    export type AsObject = {
        token: string,
    }
}

export class VerifyJwtResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): VerifyJwtResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyJwtResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyJwtResponse): VerifyJwtResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyJwtResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyJwtResponse;
    static deserializeBinaryFromReader(message: VerifyJwtResponse, reader: jspb.BinaryReader): VerifyJwtResponse;
}

export namespace VerifyJwtResponse {
    export type AsObject = {
        userId: string,
    }
}
