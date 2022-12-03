import { sendResponse } from '@lib1';
import express from 'express';

// This is how to import types from library
import type * as libts from '@lib1';
// Declare a variable using imported types
const func1 : libts.SendResponse = sendResponse;

const app1 = express();


app1.get('*', (_req, res) => {
  sendResponse(res, 'app1');
  
});

app1.listen(3000);
