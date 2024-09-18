import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:3004/blogs");
  const blogs = await res.json();

  return (
    <div>
      <h1 className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          esse eos nostrum ab voluptate, odio beatae. Error, deleniti
          voluptatem, tempora, dicta quas dolore quibusdam facilis autem quam
          maxime illum? Quos!
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
