/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
 
export function useLogin(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {isLoading: isLogging, mutate: loginMethod} = useMutation({
        mutationFn: ({email, password}) => login({email, password}),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user)
            navigate("/dashboard", { replace: true });
            //toast.success(`${data} successfully Login`);

        },
        onError: () => {
            toast.error(`Provided email or password are incorrect`)
        }
    })

    return {isLogging, loginMethod};
}