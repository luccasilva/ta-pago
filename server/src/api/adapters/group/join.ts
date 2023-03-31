import { Response, NextFunction, Request } from 'express';
import { JoinGroupRequest } from '../../ports/requests';

const joinGroupAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const joinGroupAttributes: JoinGroupRequest = {
    tag: req.body.tag,
  }
  if (!joinGroupAttributes.tag) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { joinGroupAdapter }
