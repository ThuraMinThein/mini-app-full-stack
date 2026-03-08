import { useQuery } from "@tanstack/react-query";
import { getLanguages } from "../../api/language/language.api";

export const useGetLanguages = (lang) =>
    useQuery({ queryFn: () => getLanguages(lang) });