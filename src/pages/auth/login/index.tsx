import MetaHead from "@/components/MetaHead";
import FormLogin from "@/features/login/ui/FormLogin";

function Home() {
  return (
    <>
      <MetaHead
        title={"Login Page"}
        description={"Welcome to login page"}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}`}
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/logo_investhub.webp`}
      />
      <FormLogin />
    </>
  );
}

export default Home;
