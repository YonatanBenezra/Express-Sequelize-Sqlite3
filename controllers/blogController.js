const Blog = require("../models/blogModel");

exports.createBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                blog: newBlog,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};