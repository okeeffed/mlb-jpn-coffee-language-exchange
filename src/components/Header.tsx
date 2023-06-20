"use client";

import { Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Heading
      as="h1"
      size={{ base: "xl", sm: "xl", md: "4xl" }}
      mb={{ base: 8, md: 12 }}
    >
      Melbourne Japanese-English Coffee Exchange
    </Heading>
  );
}
