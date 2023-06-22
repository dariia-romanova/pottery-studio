import { Request, Response, NextFunction } from "express";
import { createError } from "./error";
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token;

  if(!token) {
    return next(createError(401, 'Not authenticated'));
  }

  jwt.verify(token, process.env.JWT || '', (err: any, user: any) => {
    if (err) {
      return next(createError(403, 'Token is not valid'));
    };

    req.user = user;
    next();
  })
}

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if(req.user?.id === req.params.id || req.user?.isAdmin) {
      next();
    } else {
      return next(createError(403, 'You are not authorized'));
    }
  })
}

export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if(req.user?.isAdmin) {
      next();
    } else {
      return next(createError(403, 'You are not authorized'));
    }
  })
}