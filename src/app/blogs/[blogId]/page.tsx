import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId {
  params: {
    blogId: string;
  };
}

const BlogDetailsPage = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:3004/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  // console.log(blog);

  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
