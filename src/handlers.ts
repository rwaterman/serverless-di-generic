import { example } from './example';
import * as cleanStack from 'clean-stack';
import { Context } from 'aws-lambda';

export async function handlerExample(event: any, context: Context) {
  return example(event, context);
}
