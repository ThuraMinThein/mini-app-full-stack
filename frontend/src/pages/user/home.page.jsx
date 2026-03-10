import { useSearchParams } from "react-router-dom";
import PriceListPage from "./price-list.page";

const HomePage = () => {

    const [searchParams] = useSearchParams();

    const tab = searchParams.get("tab") || "price-list";

    switch (tab) {
        case "price-list":
            return <PriceListPage />
        default:
            return <div>Tab Not Found</div>
    }
};

export default HomePage;
