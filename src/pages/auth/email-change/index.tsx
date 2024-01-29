import MetaHead from "@/components/MetaHead";
import EmailChange from "@/features/emailchange/EmailChange";
import withPrivateRoute from "@/shared/lib/withPrivateRoute";

function EmailChangeScreen() {
  return (
    <>
      <MetaHead
        title={"Email Change Page"}
        description={"Welcome to email change page"}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}`}
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/logo_investhub.webp`}
      />
      <EmailChange />
    </>
  );
}

export default withPrivateRoute(EmailChangeScreen);
