import { Schema, Document } from "mongoose";

export interface Submission extends Document {
  code: string;
  language: string;
  status: string;
  passedTestcases: number;
  solvedAt: Date;
  submissionId: string;
}

export const SubmissionSchema: Schema<Submission> = new Schema({
  code: {
    type: String,
    required: [true, "Code is required"],
  },
  language: {
    type: String,
    required: [true, "Language is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
  },
  passedTestcases: {
    type: Number,
    required: [true, "Total passed testcases is required"],
  },
  solvedAt: {
    type: Date,
    required: [true, "Solved problem date is required"],
  },
  submissionId: {
    type: String,
    required: [true, "Submission ID is required"],
  },
});
