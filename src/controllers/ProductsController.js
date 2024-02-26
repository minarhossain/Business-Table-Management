const ProductsModel = require('../models/ProductsModel');

exports.ProductList = async (req, res) => {
    try {
        const pageNumber = Number(req.params.pageNo);
        const perPage = Number(req.params.perPage);
        const searchValue = req.params.searchKeyword;
        const skipRow = (pageNumber - 1) * perPage;


        // (2-1)*5

        let data;
        if (searchValue !== "0") {
            const searchRgx = { "$regex": searchValue, "$options": "i" };
            const searchQuery = { "$or": [{ title: searchRgx }, { category: searchRgx }, { subCategory: searchRgx }, { brand: searchRgx }, { remark: searchRgx }] };

            data = await ProductsModel.aggregate([{
                $facet: {
                    total: [{ $match: searchQuery }, { $count: "count" }],
                    rows: [{ $match: searchQuery }, { $skip: skipRow }, { $limit: perPage }]
                }
            }]);

        } else {
            data = await ProductsModel.aggregate([{
                $facet: {
                    total: [{ $count: "count" }],
                    rows: [{ $skip: skipRow }, { $limit: perPage }]
                }
            }]);
        }

        res.status(200).json({ status: "success", data: data });

    } catch (error) {
        res.status(200).json({ status: "error", data: error });
    }

}