import { Schema, Document } from "mongoose";
import { Submission, SubmissionSchema } from "./Submission";

export interface AttemptedProblem extends Document {
  problemId: string;
  attempts: number;
  submissions: Submission[];
}

export const AttemptedProblemSchema: Schema<AttemptedProblem> = new Schema({
  problemId: {
    type: String,
    required: [true, "Problem ID is required"],
  },
  attempts: {
    type: Number,
    required: [true, "Total attempts are required"],
    default: 0,
  },
  submissions: [SubmissionSchema],
});
