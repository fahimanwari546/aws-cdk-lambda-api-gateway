#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkDemoStack } from '../lib/cdk_demo-stack';

const app = new cdk.App();
new CdkDemoStack(app, 'CdkDemoStack', {});