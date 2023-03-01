const { User } = require('../models');

module.exports = {
  getUser(req, res) {
    Post.findall()
      .populate({ path: '', select: '-__v' })
      .then((posts) => res.json(posts))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSingleUser(req, res) {
    Post.findOne({ _id: req.params.userId  })
      .populate({ path: '', select: '-__v' })
      .then((post) =>
        !post
          ? res.status(404).json({ message: 'No post with that ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new post
  createUser(req, res) {
    Post.create(req.body)
      .then((post) => res.json(post))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req,res) {
    Post.findOneAndUpdate({ _id: req.params.userId  })
    .populate({ path: '', select: '-__v' })
    .then((post) =>
      !post
        ? res.status(404).json({ message: 'No User with that ID to update' })
        : res.json(post)
    )
    .catch((err) => res.status(500).json(err));
  },
  deleteUser(req,res) {
    Post.findOneAndDelete({ _id: req.params.userId  })
    .populate({ path: '', select: '-__v' })
    .then((post) =>
      !post
        ? res.status(404).json({ message: 'No User with that ID to delete' })
        : res.json(post)
    )
    .catch((err) => res.status(500).json(err));
  }
};
