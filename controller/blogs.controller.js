const Blogs = require("./../models/blog");

exports.getPost = async (request, response) => {
  try {
    const users = await Blogs.find();
    response.status(200).json({ message: "users fetched", users: users });
  } catch (error) {
    response.status(505).json({ message: "failed to get users", error: error });
  }
};

exports.savePost = async (request, response) => {
  const obj = {
    title: request.body.title,
    body: request.body.body,
    
  };
  try {
    const savedBlog = await Blogs.create(obj);
    console.log(savedBlog);
    response.status(201).json({ message: "blogs saved succefully" });
  } catch (error) {
    response.status(500).json({ message: "failed to fetch" });
  }
};

exports.singlePost = async (request, response) => {
  const id = request.params.id;
  try {
    const singleBlog = await Blogs.find({ _id: id });
    response.status(201).json({ message: "blog received", blog: singleBlog });
  } catch (error) {
    response.status(505).json({ message: "failed" });
  }
};

exports.updatePost =async  (request, response) => {
  const id = request.params.id;
  try{
    const updated= await Blogs.findByIdAndUpdate(
      { _id: id },
      { title: request.body.title, body: request.body.body }
    )
    response.status(201).json({ message: "success",blogs: updated}) ;
    
  }catch(error){
 
    response.status(505).json({ message: "failed" });
  }
  
};

exports.deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteblog = await Blogs.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "record deleted" });
  } catch (err) {
    res.status(505).json({ message: "failed" });
  }
};
