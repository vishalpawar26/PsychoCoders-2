import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user/User";
import { verifySchema } from "@/schema/verifySchema";
import { z } from "zod";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, code } = await request.json();

    const result = verifySchema.safeParse({ code });
    console.log(result.error?.format().code?._errors.join(", "));
    const codeErrors = result.error?.format().code?._errors.join(", ") as
      | string
      | "Invalid code";

    if (!result.success) {
      return Response.json(
        {
          success: false,
          message: codeErrors,
        },
        {
          status: 404,
        }
      );
    }

    const decodedUsername = decodeURIComponent(username);
    const user = await UserModel.findOne({ username: decodedUsername });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const isValidCode = user.verifyCode === code;
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

    if (isValidCode && isCodeNotExpired) {
      user.isVerified = true;
      await user.save();

      return Response.json(
        {
          success: true,
          message: "User verified successfully",
        },
        {
          status: 200,
        }
      );
    } else if (!isCodeNotExpired) {
      return Response.json(
        {
          success: false,
          message:
            "Verification code has expired! Please sign-up again to get a new one",
        },
        {
          status: 400,
        }
      );
    } else {
      return Response.json(
        {
          success: false,
          message: "Invalid verification code",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.log("Error while verifying user", error);
    return Response.json(
      {
        success: false,
        message: "Error while verifying user",
      },
      {
        status: 500,
      }
    );
  }
}
