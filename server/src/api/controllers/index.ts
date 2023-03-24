import { login } from "./auth/login";
import { createExercise } from "./exercise/create";
import { deleteExercise } from "./exercise/delete";
import { getExercise } from "./exercise/get";
import { createGroup } from "./group/create";
import { getGroupInfo } from "./group/get-group-info";
import { getUserGroups } from "./group/get-user-groups";
import { joinGroup } from "./group/join";
import { createRecord } from "./record/create";
import { deleteRecord } from "./record/delete";
import { getRecord } from "./record/get";
import { addRecordExercises } from "./record/put";
import { createUser } from "./user/create";

export {
  login,
  createUser,
  createExercise,
  deleteExercise,
  getExercise,
  createRecord,
  deleteRecord,
  getRecord,
  addRecordExercises,
  createGroup,
  joinGroup,
  getUserGroups,
  getGroupInfo,
}