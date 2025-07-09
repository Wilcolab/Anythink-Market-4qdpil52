/**
 * @module routes/api/comments
 * @description Express router for handling comment-related endpoints.
 */

 /**
    * GET /
    * @summary Retrieves all comments, sorted by creation date (most recent first).
    * @route GET /
    * @returns {Array<Object>} 200 - An array of comment objects
    * @returns {Object} 500 - Error message if fetching comments fails
    */

 /**
    * DELETE /:commentID
    * @summary Deletes a comment by its ID.
    * @route DELETE /:commentID
    * @param {string} commentID.path.required - The ID of the comment to delete
    * @returns {Object} 200 - Success message if comment is deleted
    * @returns {Object} 404 - Error message if comment is not found
    * @returns {Object} 500 - Error message if deleting comment fails
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
});

// add another endpoint for deleting a comment
router.delete("/:commentID", async (req, res, next) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
});