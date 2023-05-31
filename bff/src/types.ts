export type PaginationRequest = {
  page: number;
  limit: number;
};

export type SignUpRequest = {
  data: {
    username: string;
    email: string;
    password: string;
  };
};

export type VerifyJwtRequest = {
  data: {
    token: string;
  };
};

export type ArticleRequest = {
  id: string;
};
