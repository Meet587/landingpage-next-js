"use client";
import theme from "@/theme";
import {
  ThemeUIProvider,
  Box,
  Container,
  Heading,
  Image,
  Text,
} from "theme-ui";

const ThemeProvider = ({ children }) => {
  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>;
};

export { ThemeProvider, Container, Box, Heading, Image, Text };
