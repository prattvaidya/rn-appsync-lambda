// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "DRAFT": "draft",
  "PUBLISHED": "published"
};

const { Post, Comment } = initSchema(schema);

export {
  Post,
  Comment,
  PostStatus
};