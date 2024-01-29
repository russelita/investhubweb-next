import MetaHead from "@/components/MetaHead";
import EmailConfirm from "@/features/emailconfirm/EmailConfirm";
import withPrivateRoute from "@/shared/lib/withPrivateRoute";

function EmailConfirmScreen() {
  return (
    <>
      <MetaHead
        title={"Email Confirm Page"}
        description={"Welcome to email confirm page"}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}`}
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/logo_investhub.webp`}
      />
      <EmailConfirm />
    </>
  );
}

export default withPrivateRoute(EmailConfirmScreen);
