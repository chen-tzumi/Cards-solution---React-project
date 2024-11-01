import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { CreateCardSchema } from "../../validations/CreateCardSchema";
import axios from "axios";
import { Button, FloatingLabel } from "flowbite-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../Components/Shared/Hoc/PageContainer";
import { PageTitle } from "../../Components/Shared/Hoc/PageTitle";

const CreateCard = () => {

    const nav = useNavigate();
    const initialData = {
        title: "",
        subtitle: "",
        description: "",
        phone: "",
        email: "",
        web: "",
        image: { url: "", alt: "" },
        address: { state: "", country: "", city: "", street: "", houseNumber: "", zip: "" }
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: initialData,
        mode: "onChange",
        resolver: joiResolver(CreateCardSchema)
    });

    const onSubmit = async (form: typeof initialData) => {
        try {
            const token = localStorage.getItem("token");
            await axios.post("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
                form,
                {
                    headers: {
                        'x-auth-token': token
                    }
                }
            )
            toast.success("you created a new card")
            nav("/my-cards")
        }
        catch (error) {
            toast.error("you failed to create a new card")
        }
    }


    return (
        <PageContainer>
            <PageTitle>
                Create new Biz Card
            </PageTitle>

            <form
                className="flex flex-col gap-2 p-10 mx-auto text-center rounded-lg shadow-lg md:w-2/3 sm:w-3/4 dark:bg-[#1f2937]"
                onSubmit={handleSubmit(onSubmit)}
            >


                <div
                    className="flex flex-row justify-between gap-8 text-left"
                >
                    <div
                        className="flex flex-col w-full"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="text"
                            variant="standard"
                            label="Title *"
                            {...register("title")}
                            color={errors.title ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.title?.message}
                        </span>

                    </div>

                    <div
                        className="flex flex-col w-full">
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="text"
                            variant="standard"
                            label="Subtitle *"
                            {...register("subtitle")}
                            color={errors.subtitle ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.subtitle?.message}
                        </span>
                    </div>
                </div>

                <div
                    className="flex flex-col w-full text-left">
                    <FloatingLabel
                        className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                        type="text"
                        variant="standard"
                        label="Description *"
                        {...register("description")}
                        color={errors.description ? "error" : "success"}
                    />
                    <span
                        className="mb-5 text-xs text-red-500"
                    >
                        {errors.description?.message}
                    </span>
                </div>

                <div
                    className="flex flex-row justify-between gap-8 text-left"
                >
                    <div
                        className="flex flex-col w-3/5"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="tel"
                            variant="standard"
                            label="Phone Number *"
                            {...register("phone")}
                            color={errors.phone ? "error" : "success"}
                        />
                        <span className="mb-5 text-xs text-red-500"
                        >
                            {errors.phone?.message}
                        </span>
                    </div>

                    <div
                        className="flex flex-col w-full"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="email"
                            variant="standard"
                            label="Email *"
                            {...register("email")}
                            color={errors.email ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.email?.message}
                        </span>
                    </div>

                    <div
                        className="flex flex-col w-full"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="text"
                            variant="standard"
                            label="Web"
                            {...register("web")}
                            color={errors.web ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.web?.message}
                        </span>
                    </div>
                </div>

                <div
                    className="flex flex-row justify-around gap-12 text-left"
                >
                    <h2
                        className="font-bold text-[var(--primary-color)] dark:text-[var(--background-color)] pt-2"
                    >
                        Image:
                    </h2>
                    <div
                        className="flex flex-col w-full"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="url"
                            variant="standard"
                            label="Image URL *"
                            {...register("image.url")}
                            color={errors.image?.url ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.image?.url?.message}
                        </span>
                    </div>

                    <div
                        className="flex flex-col w-full"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="text"
                            variant="standard"
                            label="Image Alt *"
                            {...register("image.alt")}
                            color={errors.image?.alt ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.image?.alt?.message}
                        </span>
                    </div>
                </div>

                <h2 className="font-bold text-[var(--primary-color)] dark:text-[var(--background-color)] pt-2"
                >
                    Address:
                </h2>
                <div
                    className="flex flex-row justify-around gap-5 mb-4 text-left"
                >
                    <div
                        className="flex flex-col w-full"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="text"
                            variant="standard"
                            label="State *"
                            {...register("address.state")}
                            color={errors.address?.state ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.address?.state?.message}
                        </span>
                    </div>

                    <div
                        className="flex flex-col w-full"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="text"
                            variant="standard"
                            label="Country *"
                            {...register("address.country")}
                            color={errors.address?.country ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.address?.country?.message}
                        </span>
                    </div>

                    <div
                        className="flex flex-col w-full"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="text"
                            variant="standard"
                            label="City *"
                            {...register("address.city")}
                            color={errors.address?.city ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.address?.city?.message}
                        </span>
                    </div>

                    <div
                        className="flex flex-col w-full"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="text"
                            variant="standard"
                            label="Street *"
                            {...register("address.street")}
                            color={errors.address?.street ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.address?.street?.message}
                        </span>
                    </div>

                    <div
                        className="flex flex-col w-1/4"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="number"
                            variant="standard"
                            label="Num *"
                            {...register("address.houseNumber")}
                            color={errors.address?.houseNumber ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.address?.houseNumber?.message}
                        </span>
                    </div>

                    <div
                        className="flex flex-col w-[35%]"
                    >
                        <FloatingLabel
                            className="dark:text-[var(--background-color)] dark:border-[var(--background-color)]"
                            type="number"
                            variant="standard"
                            label="Zip *"
                            {...register("address.zip")}
                            color={errors.address?.zip ? "error" : "success"}
                        />
                        <span
                            className="mb-5 text-xs text-red-500"
                        >
                            {errors.address?.zip?.message}
                        </span>
                    </div>
                </div>

                <Button
                    className="btn dark:bg-[var(--primary-color)] dark:text-white  dark:bg-slate-400"
                    type="submit"
                    disabled={!isValid}
                >
                    Create
                </Button>
            </form>
        </PageContainer>
    );
};

export default CreateCard;
