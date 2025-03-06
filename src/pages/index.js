import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { motion } from "framer-motion";

const IndexPage = ({ data }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(
      data.allFile.nodes.map((node) => ({
        id: node.id,
        url: node.publicURL,
        type: node.extension === "mp4" ? "video" : "image",
      }))
    );
  }, [data]);
  

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <motion.h1
        className="text-4xl font-bold my-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to Our Content Gallery
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item) => (
          <Card key={item.id}>
            {item.type === "image" ? (
              <img src={item.url} alt="Uploaded content" className="w-full rounded-lg" />
            ) : (
              <video controls className="w-full rounded-lg">
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        id
        publicURL
        extension
      }
    }
  }
`;

export default IndexPage;

// Card Component (src/components/ui/card.js)
export const Card = ({ children }) => {
  return <div className="p-4 bg-gray-800 rounded-lg shadow-lg">{children}</div>;
};

// Button Component (src/components/ui/button.js)
export const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
