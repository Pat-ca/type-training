import { Lesson } from "../../models/lesson";

const LESSONS: Lesson[] = [
  {
    id: 1,
    name: "a-line-basic",
    leftKeyIds: [43, 46],
    rightKeyIds: [49, 52],
    lesson: 1,
  },
  {
    id: 2,
    name: "a-line-enhancement",
    leftKeyIds: [43, 47],
    rightKeyIds: [48, 52],
    lesson: 1,
  },
  {
    id: 3,
    name: "a-line-all",
    leftKeyIds: [43, 47],
    rightKeyIds: [48, 54],
    lesson: 1,
  },
];

export default LESSONS;
