import { useEffect, useState } from 'react';
import './priceList.css';
import PriceListTable from './PriceListTable.component';
import { FiSearch, FiPlusCircle, FiPrinter, FiToggleRight } from "react-icons/fi";
import { getLanguage } from '../../utils/services/language';
import { useLanguage } from '../../providers/language.provider';
import { useSearchParams } from 'react-router-dom';

const PriceListContainer = () => {
    const [debouncedSearch, setDebouncedSearch] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";
    const page = Number(searchParams.get("page") || 1);

    const updateParams = (newParams) => {
        setSearchParams({
            ...Object.fromEntries(searchParams),
            ...newParams
        });
    };

    const { language, languages } = useLanguage();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 400);

        return () => clearTimeout(timer);
    }, [search]);

    const tableSearch = getLanguage('table_search', language, languages);
    const btnNewProduct = getLanguage('btn_new_product', language, languages);
    const btnPrintList = getLanguage('btn_print_list', language, languages);
    const btnAdvancedMode = getLanguage('btn_advanced_mode', language, languages);

    return (
        <div className="price-list-container">
            <div className="price-list-actions">
                <div className="search-section">
                    <div className="search-input-wrapper">
                        <input
                            type="text"
                            placeholder={tableSearch + '...'}
                            value={search}
                            onChange={(e) => updateParams({ search: e.target.value, page: 1 })}
                        />
                        <span className="search-icon"><FiSearch /></span>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="btn btn-outline btn-new-product">
                        {btnNewProduct} <FiPlusCircle />
                    </button>
                    <button className="btn btn-outline">
                        {btnPrintList} <FiPrinter />
                    </button>
                    <button className="btn btn-outline">
                        {btnAdvancedMode} <FiToggleRight />
                    </button>
                </div>
            </div>

            <div className="table-wrapper">
                <PriceListTable
                    search={debouncedSearch}
                    page={page}
                    updateParams={updateParams}
                />
            </div>
        </div>
    );
};

export default PriceListContainer;
