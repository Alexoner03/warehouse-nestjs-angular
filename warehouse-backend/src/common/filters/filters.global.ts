import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import mongoose from "mongoose";

@Catch(mongoose.Error.ValidationError)
export class MongooseValidationError implements ExceptionFilter {
    catch(exception: mongoose.Error.ValidationError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = 422;

        response
            .status(status)
            .json({
                "statusCode": 422,
                "message": [
                    exception.message
                ],
                "errors" : exception.errors,
                "error": "Unprocesable Entity"
            });
    }
}