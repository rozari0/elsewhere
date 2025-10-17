"use client";

import React from "react";
import { Card } from "./retroui/Card";
import { Text } from "./retroui/Text";

export interface Website {
  name: string;
  url: string;
  description: string;
}

const WebsiteCard: React.FC<Website> = ({ name, url, description }) => {
  return (
    <Card className="max-w-sm p-4">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <Text as="h3" className="text-lg font-bold">{name}</Text>
      </a>
      <Text as="p" className="mt-2 text-sm opacity-80">{description}</Text>
    </Card>
  );
};

export default WebsiteCard;
