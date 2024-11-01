import { joiResolver } from "@hookform/resolvers/joi";
import { Button, FloatingLabel } from "flowbite-react";
import { useForm } from "react-hook-form";
import { SignInJoiSchema } from "../../validations/SigninSchema.joi";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userActions } from "../../Store/UserSlice";
import { decode } from "../../Services/tokenService";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../Components/Shared/Hoc/PageContainer";
import { PageTitle } from "../../Components/Shared/Hoc/PageTitle";

function SignIn() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const initialFormData = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialFormData,
    mode: "onChange",
    resolver: joiResolver(SignInJoiSchema),
  });

  const submit = async (form: typeof initialFormData) => {
    try {
      const token = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        form,
      );

      localStorage.setItem("token", token.data);
      const id = decode(token.data)._id;
      axios.defaults.headers.common["x-auth-token"] = token.data;
      const user = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/" + id,
      );
      dispatch(userActions.login(user.data));
      toast.success("Sign In Successful");
      nav("/");
    } catch (error) {
      toast.error("Sign In Failed");
    }
  };

  return (
    <PageContainer>
      <form
        className="flex flex-col w-2/5 gap-4 p-4 m-auto mt-20 rounded-lg shadow-lg"
        onSubmit={handleSubmit(submit)}
      >
        <PageTitle >Sign In</PageTitle>
        <FloatingLabel
          type="email"
          variant="outlined"
          label="Email"
          {...register("email")}
          color={errors["email"] ? "error" : "success"}
        />
        <span
          className="text-sm text-red-500"
        >
          {errors["email"]?.message}
        </span>

        <FloatingLabel
          type="password"
          variant="outlined"
          label="Password"
          {...register("password")}
          color={errors["password"] ? "error" : "success"}
        />
        <span
          className="text-sm text-red-500"
        >
          {errors["password"]?.message}
        </span>

        <Button
          type="submit"
          disabled={!isValid}
        >
          Sign In
        </Button>
      </form>
    </PageContainer>
  );
}

export default SignIn;
