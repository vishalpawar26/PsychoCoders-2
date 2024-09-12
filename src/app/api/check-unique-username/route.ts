import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user/User";
import { usernameValidation } from "@/schema/signupSchema";
import { z } from "zod";

const verifyUsername = z.object({
  username: usernameValidation,
});

export async function GET(request: Request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const queryParams = {
      username: searchParams.get("username"),
    };

    const result = verifyUsername.safeParse(queryParams);
    const usernameErrors: string = result?.error
      ?.format()
      .username?._errors.join(", ") as string | "Invalid username.";

    if (!result.success) {
      return Response.json(
        {
          success: false,
          message: usernameErrors,
        },
        {
          status: 400,
        }
      );
    }

    const { username } = result.data;
    const existingVerifiedUser = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingVerifiedUser) {
      return Response.json(
        {
          success: false,
          message: "Username is already taken",
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Username is available",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error while checking username", error);
    return Response.json(
      {
        success: false,
        message: "Error while checking for unique username",
      },
      {
        status: 500,
      }
    );
  }
}
