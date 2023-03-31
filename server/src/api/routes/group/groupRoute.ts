import { Router } from 'express';
import { createGroupAdapter, getGroupInfoAdapter, getUserGroupsAdapter, joinGroupAdapter, verifyJWT } from '../../adapters';
import { createGroup, getGroupInfo, getUserGroups, joinGroup } from '../../controllers';

const groupRoutes = Router();

groupRoutes.post('/group', verifyJWT, createGroupAdapter, createGroup);

groupRoutes.post('/group/join', verifyJWT, joinGroupAdapter, joinGroup);

groupRoutes.get('/group', verifyJWT, getUserGroupsAdapter, getUserGroups);

groupRoutes.get('/group/info', verifyJWT, getGroupInfoAdapter, getGroupInfo);

export default groupRoutes;