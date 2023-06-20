"use client";

import { Container } from "@chakra-ui/react";

export function AppContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container px={4} py={8} maxW="container.lg">
      {children}
    </Container>
  );
}
