"use client";

import React from "react";
import WebsiteCard, { Website } from "./WebsiteCard";
import { Text } from "./retroui/Text";

interface CategoryProps {
  name: string;
  websites: Website[];
}

const Category: React.FC<CategoryProps> = ({ name, websites }) => {
  return (
    <section className="mt-10">
      <Text as="h2" className="text-2xl font-minecraft mb-4">{name}</Text>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {websites.map((site) => (
          <WebsiteCard key={site.url} {...site} />
        ))}
      </div>
    </section>
  );
};

export default Category;
