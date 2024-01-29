import MetaHead from "@/components/MetaHead";
import ForgotPassword from "@/features/forgotpassword/ForgotPassword";
import withPrivateRoute from "@/shared/lib/withPrivateRoute";

function ForgotPasswordScreen() {
  return (
    <>
      <MetaHead
        title={"Forgot Password Page"}
        description={"Welcome to forgot password page"}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}`}
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/logo_investhub.webp`}
      />
      <ForgotPassword />
    </>
  );
}

export default withPrivateRoute(ForgotPasswordScreen);
