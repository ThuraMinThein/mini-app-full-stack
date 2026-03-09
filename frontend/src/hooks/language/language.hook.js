import { useQuery } from "@tanstack/react-query";
import { getLanguages } from "../../api/language/language.api.js";

export const useGetLanguages = () =>
    useQuery({ queryKey: [`languages`], queryFn: () => getLanguages() });