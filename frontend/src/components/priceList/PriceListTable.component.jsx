import { useGetProducts, useUpdateProduct } from "../../hooks/product/product.hook";
import { useLanguage } from "../../providers/language.provider";
import { getLanguage } from "../../utils/services/language";
import EditableCell from "../editableCell/EditableCell.component";

const PriceListTable = ({ search, page, updateParams }) => {
    const { data, isFetching } = useGetProducts({ search, page, limit: 15 });

    const { mutate } = useUpdateProduct()

    const updateProduct = (id, data) => {
        mutate({ id, data });
    }

    const { language, languages } = useLanguage();

    const tableArticleNo = getLanguage('table_article_no', language, languages);
    const tableProductService = getLanguage('table_product/service', language, languages);
    const tableInPrice = getLanguage('table_in_price', language, languages);
    const tablePrice = getLanguage('table_price', language, languages);
    const tableUnit = getLanguage('table_unit', language, languages);
    const tableInStock = getLanguage('table_in_stock', language, languages);
    const tableDescription = getLanguage('table_description', language, languages);
    const paginateNext = getLanguage('pagination_next', language, languages);
    const paginatePrevious = getLanguage('pagination_previous', language, languages);
    const paginatePage = getLanguage('pagination_page', language, languages);

    if (isFetching) {
        return <div>Loading...</div>
    }

    return (
        <>
            <table className="price-list-table">
                <thead>
                    <tr>
                        <th>{tableArticleNo} <span className="sort-icon desc"></span></th>
                        <th>{tableProductService} <span className="sort-icon desc"></span></th>
                        <th>{tableInPrice}</th>
                        <th>{tablePrice}</th>
                        <th>{tableUnit}</th>
                        <th>{tableInStock}</th>
                        <th>{tableDescription}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.products.map((row) => (
                        <tr key={row.id}>
                            <td className="cell-indicator">
                                <span className="cell-content rounded-cell">{row.id}</span>
                            </td>
                            <td>
                                <EditableCell
                                    className="cell-content rounded-cell"
                                    value={row.name}
                                    onSave={(val) => updateProduct(row.id, { name: val })}
                                />
                            </td>
                            <td>
                                <EditableCell
                                    className="cell-content rounded-cell"
                                    value={row.inPrice}
                                    onSave={(val) => updateProduct(row.id, { price: val })}
                                />
                            </td>
                            <td>
                                <EditableCell
                                    className="cell-content rounded-cell"
                                    value={row.price}
                                    onSave={(val) => updateProduct(row.id, { price: val })}
                                />
                            </td>
                            <td>
                                <EditableCell
                                    className="cell-content rounded-cell"
                                    value={row.unit}
                                    onSave={(val) => updateProduct(row.id, { unit: val })}
                                />
                            </td>
                            <td>
                                <EditableCell
                                    className="cell-content rounded-cell"
                                    value={row.inStock}
                                    onSave={(val) => updateProduct(row.id, { inStock: val })}
                                />
                            </td>
                            <td>
                                <EditableCell
                                    className="cell-content rounded-cell"
                                    value={row.description}
                                    onSave={(val) => updateProduct(row.id, { description: val })}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    className="page-btn"
                    disabled={page === 1}
                    onClick={() => updateParams({ page: page - 1 })}
                >
                    {paginatePrevious}
                </button>

                <span className="page-info">{paginatePage}: {page}</span>

                <button
                    className="page-btn"
                    disabled={!data.metaData.hasNextPage}
                    onClick={() => updateParams({ page: page + 1 })}
                >
                    {paginateNext}
                </button>
            </div>
        </>
    );
};

export default PriceListTable;
