import MetaHead from "@/components/MetaHead";
import ForgotPasswordForm from "@/features/forgotpasswordform/ForgotPasswordForm";
import withPrivateRoute from "@/shared/lib/withPrivateRoute";

function ForgotPasswordFormScreen() {
  return (
    <>
      <MetaHead
        title={"Forgot Password Page"}
        description={"Welcome to forgot password page"}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}`}
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/logo_investhub.webp`}
      />
      <ForgotPasswordForm />
    </>
  );
}

export default withPrivateRoute(ForgotPasswordFormScreen);
