import {  Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import { RestApi, LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import * as path from 'path'

export class CdkDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // lamda function 

    const putTodoLambda = new Function(this,"PutTodoLambdaHandler",{
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(path.resolve(__dirname, 'functions')),
      handler: "put-todo.saveHello",

    })


//  api gateway 
    const api = new RestApi(this, "todo-api")

    api.root
    .resourceForPath("hello")
    .addMethod("POST", new LambdaIntegration(putTodoLambda))

  }
}
