import { loginAdapter } from "./auth/login";
import { createUserAdapter } from "./user/create";
import { createExerciseAdapter } from "./exercise/create";
import { verifyJWT } from "./auth/verifyJWT";
import { isAuthRequest } from "./auth/verifyJWT";
import { deleteExerciseAdapter } from "./exercise/delete";
import { getExerciseAdapter } from "./exercise/get";
import { createRecordAdapter } from "./record/create";
import { deleteRecordAdapter } from "./record/delete";
import { getRecordAdapter } from "./record/get";
import { putRecordAdapter } from "./record/put";
import { createGroupAdapter } from "./group/create";
import { joinGroupAdapter } from "./group/join";
import { getUserGroupsAdapter } from "./group/get-user-groups";
import { getGroupInfoAdapter } from "./group/get-group-info";


export {
  loginAdapter,
  verifyJWT,
  isAuthRequest,
  createUserAdapter,
  createExerciseAdapter,
  deleteExerciseAdapter,
  getExerciseAdapter,
  createRecordAdapter,
  deleteRecordAdapter,
  getRecordAdapter,
  putRecordAdapter,
  createGroupAdapter,
  joinGroupAdapter,
  getUserGroupsAdapter,
  getGroupInfoAdapter,
}