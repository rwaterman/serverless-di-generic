// import { example } from '../example';

// tslint:disable-next-line:variable-name
// export async function handlerExample(args) {
//   console.log(43434);
//   return example(convertReqToProvider(args));
// }

// @ts-ignore
// tslint:disable-next-line:only-arrow-functions
import {
  Context,
  APIGatewayProxyWithLambdaAuthorizerEventRequestContext,
  APIGatewayEvent,
  APIGatewayProxyEvent,
} from 'aws-lambda';

export async function exampleAzure(context: any, req: any) {
  context.log('JavaScript HTTP trigger function processed a request.');

  if (req.query.name || (req.body && req.body.name)) {
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: 'Hello ' + (req.query.name || req.body.name),
    };
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a name on the query string or in the request body',
    };
  }
}

export async function exampleAWS(event: any, context: Context) {
  console.log('heres the event', event)
  console.log(context.awsRequestId)
  const data = JSON.parse(event.body);
  console.log('heres the data', data);

  return { statusCode: 200, body: JSON.stringify({}) };
}

//
// export function convertReqToProvider(...args: any[]) {
//   console.log(123123123123, process.env);
// }
//
// export function convertResToProvider(res: any) {
//
// }