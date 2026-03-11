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

    const [debouncedIdSearch, setDebouncedIdSearch] = useState('');


    const search = searchParams.get("search") || "";
    const idSearch = searchParams.get("article_number_search") || "";
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
            setDebouncedIdSearch(idSearch);
        }, 400);

        return () => clearTimeout(timer);
    }, [search, idSearch]);

    const tableSearch = getLanguage('table_search', language, languages);
    const tableArticleNoSearch = getLanguage("table_article_no_search", language, languages)
    const btnNewProduct = getLanguage('btn_new_product', language, languages);
    const btnPrintList = getLanguage('btn_print_list', language, languages);
    const btnAdvancedMode = getLanguage('btn_advanced_mode', language, languages);

    return (
        <div className="price-list-container">
            <div className="price-list-actions">
                <div className='search-container'>
                    <div className="search-section">
                        <input
                            type="number"
                            placeholder={tableArticleNoSearch + '...'}
                            value={idSearch}
                            onChange={(e) => updateParams({ article_number_search: e.target.value, page: 1 })}
                        />
                        <span className="search-icon"><FiSearch /></span>
                    </div>

                    <div className="search-section">
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
                    <button>
                        <span className='text'>{btnNewProduct}</span> <span className="icon plus"><FiPlusCircle /></span>
                    </button>
                    <button>
                        <span className='text'>{btnPrintList}</span> <span className="icon printer"><FiPrinter /></span>
                    </button>
                    <button>
                        <span className='text'>{btnAdvancedMode}</span> <span className="icon toggle"><FiToggleRight /></span>
                    </button>
                </div>
            </div>

            <div className="table-wrapper">
                <PriceListTable
                    search={debouncedSearch}
                    idSearch={debouncedIdSearch}
                    page={page}
                    updateParams={updateParams}
                />
            </div>
        </div>
    );
};

export default PriceListContainer;
