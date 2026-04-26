import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details, rating, total_view, author, tags } =
    news;

  return (
    <div className="card bg-base-100 shadow-sm rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 p-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4 pb-0">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full h-52 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body pt-4">
        {/* Tags + Date */}
        <p className="text-sm text-gray-500">
          {format(new Date(author.published_date), "EEEE, MMMM d, yyyy")} | Tag
          Cloud Tags: {tags?.join(", ")}
        </p>

        {/* Details */}
        <p className="text-sm text-gray-600">
          {details.length > 180 ? details.slice(0, 180) + "..." : details}
        </p>

        <button className="text-orange-500 font-semibold text-sm w-fit">
          Read More
        </button>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? "" : "opacity-30"}
              />
            ))}
            <span className="ml-2 text-gray-600">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
