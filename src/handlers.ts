import { logExample } from './logExample';

// @ts-ignore
export async function handlerExample(event, context) {
  return logExample(event, context);
}
