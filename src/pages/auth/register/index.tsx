import FormRegister from "@/features/register/ui/FormRegister";
import withPrivateRoute from "@/shared/lib/withPrivateRoute";
import MetaHead from "@/components/MetaHead";

function Register() {
  return (
    <>
      <MetaHead
        title={"Register Page"}
        description={"Welcome to register page"}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}`}
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/logo_investhub.webp`}
      />
      <FormRegister />
    </>
  );
}

export default withPrivateRoute(Register);
