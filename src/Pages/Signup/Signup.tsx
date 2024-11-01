import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../validations/RegisterSchema";
import { FloatingLabel, Button, Checkbox, Label } from "flowbite-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../Components/Shared/Hoc/PageContainer";

const Register = () => {
  const nav = useNavigate();

  const initalData = {
    name: {
      first: "",
      middle: "",
      last: "",
    },
    phone: "",
    email: "",
    password: "",
    image: {
      url: "",
      alt: "",
    },
    address: {
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: 0,
      zip: 0,
    },
    isBusiness: false,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initalData,
    mode: "onChange",
    resolver: joiResolver(RegisterSchema),
  });

  const onSubmit = async (form: typeof initalData) => {
    try {
      await axios.post("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users"
        , form);
      toast.success("sign up coplited")
      nav("/Signin")
    }
    catch (error) {
      toast.error("sign up failed")
    }
  };

  return (
    <PageContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4 rounded-lg shadow-lg"
      >
        <h1
          className="text-2xl font-bold text-gray-800"
        >
          Register
        </h1>


        <div
          className="flex flex-wrap gap-10 w-[85vw] m-auto justify-center lg:px-64"
        >
          <div
            className="w-[40%] "
          >
            <FloatingLabel
              type="text"
              label="First  Name"
              variant="outlined"
              {...register("name.first")}
              color={errors.name?.first ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.name?.first?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="Middle Name"
              variant="outlined"
              {...register("name.middle")}
              color={errors.name?.middle ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.name?.middle?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="Last Name"
              variant="outlined"
              {...register("name.last")}
              color={errors.name?.last ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.name?.last?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="phone"
              label="phone"
              variant="outlined"
              {...register("phone")}
              color={errors.phone ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.phone?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="email"
              label="Email"
              variant="outlined"
              {...register("email")}
              color={errors.email ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.email?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="password"
              label="Password"
              variant="outlined"
              {...register("password")}
              color={errors.password ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.password?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="image url"
              variant="outlined"
              {...register("image.url")}
              color={errors.image?.url ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.image?.url?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="image alt"
              variant="outlined"
              {...register("image.alt")}
              color={errors.image?.alt ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.image?.alt?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="state"
              variant="outlined"
              {...register("address.state")}
              color={errors.address?.state ? "error" : "success"}
            />

            <span
              className="text-sm text-red-500"
            >
              {errors.address?.state?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="country"
              variant="outlined"
              {...register("address.country")}
              color={errors.address?.country ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.address?.country?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="city"
              variant="outlined"
              {...register("address.city")}
              color={errors.address?.city ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.address?.city?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="street"
              variant="outlined"
              {...register("address.street")}
              color={errors.address?.street ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.address?.street?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="House number"
              variant="outlined"
              {...register("address.houseNumber")}
              color={errors.address?.houseNumber ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.address?.houseNumber?.message}
            </span>
          </div>

          <div
            className="w-[40%]"
          >
            <FloatingLabel
              type="text"
              label="Zip"
              variant="outlined"
              {...register("address.zip")}
              color={errors.address?.zip ? "error" : "success"}
            />
            <span
              className="text-sm text-red-500"
            >
              {errors.address?.zip?.message}
            </span>
          </div>

          <div
            className="w-[40%] flex flex-col m-auto "
          >
            <div
              className="flex flex-row justify-center gap-5 my-11"
            >
              <Label
                htmlFor="isBusiness"
              >
                Is Bussines
              </Label>
              <Checkbox {...register("isBusiness")} />
            </div>



            <Button
              type="submit"
              color="success"
              disabled={!isValid}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </PageContainer>
  );
};

export default Register;